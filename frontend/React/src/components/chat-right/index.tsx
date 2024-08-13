import { useEffect, useState } from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import IconFont from '@/components/iconfont';
import { replaceStr } from '@/utils/tools';
import PackIcon from '@/assets/pack-up.svg';
import { Tooltip } from 'antd';
import Loading from '../loading';
interface IProps {
  nodeInfo: any;
  stashInfo?: any;
  historyNode?: any;
  toggleRight?: () => void;
};

const ChatRight = ({ nodeInfo, stashInfo = null, historyNode = null, toggleRight }: IProps) => {
  const [subQuestion, setSubQuestion] = useState('');
  const [queries, setQuries] = useState<any>([]);
  const [searchList, setSearchList] = useState<any>([]);
  const [thought, setThought] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [conclusion, setConclusion] = useState('');
  const [thinkingData, setThinking] = useState<any>(null);
  const [readingData, setReading] = useState<any>(null);
  // steps展开收起的信息
  const [collapseInfo, setCollapseInfo] = useState<boolean[]>([true, true]);
  const [currentNode, setCurrentNode] = useState<any>();
  // 展开收起
  const toggleCard = (index: number) => {
    const arr = [...collapseInfo];
    arr[index] = !arr[index];
    setCollapseInfo(arr);
  };
  // 高亮searchList
  const highLightSearchList = (ids: any) => {
    // console.log('high light ids----------', ids);
    const timeout = historyNode ? 0 : 3000;
    setCurrentStep(1);
    const highlightArr: any = [...searchList];
    highlightArr.forEach((item: any) => {
      if (ids.includes(Number(item.id))) {
        item.highLight = true;
      }
    })
    highlightArr.sort((item1: any, item2: any) => {
      if (item1.highLight === item2.highLight) {
        return 0;
      }
      // 如果item1是highlight，放在前面  
      if (item1.highLight) {
        return -1;
      }
      // 如果item2是highlight，放在后面  
      return 1;
    })
    setSearchList(highlightArr);
    setTimeout(() => {
      setCurrentStep(2);
    }, timeout);
  };

  const handleReceiveHistory = () => {
    setThought(historyNode?.thinkingData?.thought);
    setThinking(historyNode.thinkingData);
    setConclusion(historyNode.conclusion);
    setReading(historyNode.readingData);
    setQuries(historyNode.queries);
    setSearchList(historyNode.searchList);
    setSelectedIds(historyNode.selectedIds);
    setSubQuestion(historyNode.subQuestion);
    setCurrentNode(2);
    setCollapseInfo([true, true]);
    setIsLoading(false);
  };

  const stashNodeInfo = () => {
    // 已完成节点信息存储
    const nodeInfo = {
      thinkingData,
      queries,
      readingData,
      searchList,
      conclusion,
      selectedIds,
      subQuestion
    };
    const obj: any = JSON.parse(window.localStorage.getItem('nodesInfo') || '{}');
    console.log('exsited history nodes-----', obj);
    obj[currentNode] = nodeInfo;
    window.localStorage.setItem('nodesInfo', JSON.stringify(obj));
  };

  const resetStatus = () => {
    // 记录节点信息
    stashNodeInfo();
    // 初始化组件状态
    console.log('reset status-------');
    setThought('');
    setCurrentStep(0);
    setCollapseInfo([true, true]);
    setSelectedIds([]);
    setSearchList([]);
    setThinking(null);
    setReading(null);
    setConclusion('');
    setSubQuestion('');
  };

  useEffect(() => {
    if (!historyNode) return;
    handleReceiveHistory();
  }, [historyNode]);

  useEffect(() => {
    if (!selectedIds.length) return;
    highLightSearchList(selectedIds);
  }, [selectedIds]);

  useEffect(() => {
    if (currentStep === 2) {
      setCollapseInfo([false, false]);
    } else {
      setCollapseInfo([true, true]);
    }
  }, [conclusion, currentStep]);

  useEffect(() => {
    // 如果是response节点就不要处理了，跟右边没关系
    if (nodeInfo?.current_node === 'response') return;
    if (nodeInfo && !currentNode) {
      setIsLoading(true);
    }
    if (nodeInfo?.current_node) {
      setCurrentNode(nodeInfo?.current_node);
    }
    if (nodeInfo?.current_node !== currentNode) {
      console.log('current node changed--------------', nodeInfo);
    }
    try {
      if (!(nodeInfo?.current_node && nodeInfo?.response?.nodes?.[nodeInfo.current_node]?.detail)) return;
      const nodeDetail = nodeInfo?.response?.nodes?.[nodeInfo.current_node]?.detail;
      // console.log('nodeInfo-------', nodeDetail);
      if (nodeDetail?.state === 0) {
        console.log('node is end------', nodeInfo);
        resetStatus();
      }
      if (nodeDetail?.state === 1) {
        setThought(nodeDetail.response);
        nodeDetail?.content && setSubQuestion(nodeDetail?.content);
        // 如果返回thought的时候还没有searchlist，那就是第一步的思考
        if (nodeDetail.actions?.[0]?.thought) {
          setThinking({
            thought: nodeDetail.actions?.[0]?.thought
          })
        }
        // 第二步的思考
        if (nodeDetail.actions?.[1]?.thought) {
          setReading({
            thought: nodeDetail.actions?.[1]?.thought
          })
        }
        setIsLoading(false);
        if (nodeDetail?.response && nodeDetail?.actions.length === 2) {
          setConclusion(nodeDetail?.response);
        }
      } else {
        setIsLoading(true);
      }
      if (nodeDetail?.actions?.length > 0) {
        // 搜索词
        if (nodeDetail.actions?.[0]?.args?.query?.length > 0) {
          setQuries(nodeDetail.actions[0]?.args?.query);
        }
        // 搜索信息
        if (nodeDetail.actions?.[0].result[0] && searchList.length === 0) {
          const content = JSON.parse(nodeDetail.actions[0].result[0].content);
          const arr: any = Object.keys(content).map(item => {
            return { id: item, ...content[item] };
          });
          setSearchList(arr);
        }
        if (nodeDetail.actions?.[1]?.args?.select_ids && selectedIds.length === 0) {
          setSelectedIds(nodeDetail.actions[1]?.args?.select_ids || []);
        }
      }
    } catch (err) {
      console.log('error from nodeinfo---');
    }
  }, [nodeInfo, currentNode]);

  return <div className={styles.rightContent}>
    {
      subQuestion && <div className={styles.toggleIcon} onClick={toggleRight}>
        <Tooltip placement="top" title="收起">
          <img src={PackIcon} />
        </Tooltip></div>
    }
    <div className={styles.titleNode}>{subQuestion}</div>
    {
      thought && <div className={classNames(
        styles.steps
      )}>
        <div className={styles.title}>
          <i></i>{"思考"}
          <div className={styles.open} onClick={() => { toggleCard(0) }}>
            <IconFont type={collapseInfo[0] ? "icon-shouqi" : "icon-xiangxiazhankai"} />
          </div>
        </div>
        <div className={classNames(
          styles.con,
          !collapseInfo[0] ? styles.collapsed : ""
        )}>
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{replaceStr(thinkingData?.thought ? thinkingData?.thought : thought)}</ReactMarkdown>
          </div>
          {
            queries.length > 0 && <div className={styles.query}>
              <div className={styles.subTitle}><IconFont type="icon-SearchOutlined" />搜索关键词</div>
              {queries.map((item: string, index: number) => (<div key={`query-item-${item}`} className={classNames(styles.queryItem, styles.fadeIn)}>
                {item}
              </div>))}
            </div>
          }
          {
            searchList.length > 0 && currentStep === 0 && <div className={styles.searchList}>
              <div className={styles.subTitle}><IconFont type="icon-DocOutlined" />信息来源</div>
              <div className={styles.scrollCon} style={(searchList.length > 5) ? { height: '300px' } : {}}>
                <div className={styles.inner} style={(searchList.length > 5) ? {} : {}}>
                  {
                    searchList.map((item: any, num: number) => (
                      <div className={classNames(
                        styles.searchItem,
                        item.highLight ? styles.highLight : ""
                      )} key={`search-item-${item.url}`}>
                        <p className={styles.summ}>{item.id}. {item?.title}</p>
                        <p className={styles.url}>{item?.url}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    }
    {
      currentStep > 0 && <div className={classNames(
        styles.steps
      )}>
        <div className={styles.title}>
          <i></i>{"信息来源"}
          <div className={styles.open} onClick={() => { toggleCard(1) }}>
            <IconFont type={collapseInfo[1] ? "icon-shouqi" : "icon-xiangxiazhankai"} />
          </div>
        </div>
        <div className={classNames(
          styles.con,
          !collapseInfo[1] ? styles.collapsed : ""
        )}>
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{replaceStr(readingData?.thought ? readingData?.thought : thought)}</ReactMarkdown>
          </div>
          {
            searchList.length > 0 && <div className={styles.searchList}>
              <div className={styles.subTitle}><IconFont type="icon-DocOutlined" />信息来源</div>
              <div className={styles.scrollCon} style={(searchList.length > 5) ? { height: '300px' } : {}}>
                <div className={styles.inner} style={(searchList.length > 5) ? {} : {}}>
                  {
                    searchList.map((item: any, num: number) => (
                      <div className={classNames(
                        styles.searchItem,
                        item.highLight ? styles.highLight : ""
                      )} key={`search-item-${item.url}`}>
                        <p className={styles.summ}>{item.id}. {item?.title}</p>
                        <p className={styles.url}>{item?.url}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    }
    {
      currentStep === 2 && <div className={classNames(
        styles.steps
      )}>
        <div className={styles.title}>
          <i></i>{"信息整合"}
        </div>
        <div className={styles.con}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{replaceStr(conclusion)}</ReactMarkdown>
        </div>
      </div>
    }

    {
      isLoading && <Loading />
    }
  </div>
};

export default ChatRight;