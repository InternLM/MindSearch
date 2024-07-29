import styles from './index.module.less';
import { useEffect, useState, useRef, Children } from 'react';
import MindMapItem from './mindMapItem';
import PackIcon from '@/assets/pack-up.svg';
import SendIcon from '@/assets/sendIcon.svg';
import { Tooltip, Input, message } from 'antd';
import IconFont from '@/components/iconfont';
import ReactMarkdown from "react-markdown";
import ShowRightIcon from "@/assets/show-right-icon.png";
import rehypeRaw from 'rehype-raw';
import classNames from 'classnames';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { GET_SSE_DATA } from '@/config/cgi';
import { replaceStr } from '@/utils/tools';

const RenderTest = () => {
  let eventSource: any = null;
  let sseTimer: any = useRef(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [question, setQuestion] = useState("");
  const [stashQuestion, setStashQuestion] = useState("");
  const [isEnd, setIsEnd] = useState(false);
  const [showEndNode, setShowEndNode] = useState(false);
  // 一组节点的渲染草稿
  const [draft, setDraft] = useState('');
  // 一轮完整对话结束
  const [chatIsOver, setChatIsOver] = useState(true);
  // 一组节点的思考草稿是不是打印结束
  const [draftEnd, setDraftEnd] = useState(false);

  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');
  const [progressEnd, setProgressEnd] = useState(false);

  const [conclusion, setConclusion] = useState('');
  const [stashConclusion, setstashConclusion] = useState('');

  const [query, setQuery] = useState([]);
  const [searchList, setSearchList] = useState([]);
  // 整体的渲染树
  const [renderData, setRenderData] = useState<any[]>([]);
  const [currentNode, setCurrentNode] = useState<any>(null);
  // 渲染minddata里的第几个item
  const [renderIndex, setRenderIndex] = useState<number>(0);
  const [response, setResponse] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  // steps展开收起的信息
  const [collapseInfo, setCollapseInfo] = useState([true, true]);
  const [mapWidth, setMapWidth] = useState(0);
  // 是否展示右侧内容
  const [showRight, setShowRight] = useState(true);

  const [currentNodeRendering, setCurrentNodeRendering] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [nodeName, setNodeName] = useState('');
  const hasHighlight = useRef(false);
  const conclusionRender = useRef(false);
  const nodeDraftRender = useRef(false);
  const [obj, setObj] = useState<any>(null);
  const [nodeOutputEnd, setNodeEnd] = useState(false);
  const [adjList, setAdjList] = useState([]);

  const TEXT_INTERVAL = 20;
  const SEARCHLIST_INTERVAL = 80;


  const toggleRight = () => {
    setShowRight(!showRight);
  };

  const findAndUpdateStatus = (nodes: any[], targetNode: any) => {
    return nodes.map((node) => {
      if (node.state === 1 && node.id !== 0) {
        return { ...node, state: 3 };
      }

      if (node.name === targetNode) {
        return { ...node, state: 1 };
      }

      if (node.children) {
        // 递归地在子节点中查找  
        node.children = findAndUpdateStatus(node.children, targetNode);
      }

      return node;
    });
  }

  const generateEndStyle = () => {
    // 获取所有class为endline的div元素  
    const endlineDivs = document.getElementsByClassName('endline');
    const mindMap = document.getElementById("mindMap");
    // 确保至少有两个元素  
    if (endlineDivs.length >= 2 && mindMap) {
      // 获取第一个和最后一个元素的边界框（bounding rectangle）  
      const firstRect = endlineDivs[0].getBoundingClientRect();
      const lastRect = endlineDivs[endlineDivs.length - 1].getBoundingClientRect();
      const mindMapRect = mindMap?.getBoundingClientRect();
      // 计算y值的差值  
      const yDiff = lastRect.top - firstRect.top;
      // const top = firstRect.top - mindMapRect.top;
      // 如果需要包含元素的完整高度（不仅仅是顶部位置），可以加上元素的高度  
      // const yDiffWithHeight = yDiff + (lastRect.height - firstRect.height); 
      return {
        top: firstRect.top - mindMapRect.top,
        height: yDiff + 1
      };
    } else {
      return {
        top: '50%',
        height: 0
      };
    }
  };

  const generateWidth = () => {
    const articles = document.querySelectorAll('article');
    // 确保至少有两个元素  
    if (articles?.length) {
      let maxRight = 0;
      articles.forEach((item, index) => {
        if (item.getBoundingClientRect().right > maxRight) {
          maxRight = item.getBoundingClientRect().right;
        }
      })
      const firstArticle = articles[0].getBoundingClientRect();
      if (maxRight - firstArticle.left + 200 > mapWidth) {
        return maxRight - firstArticle.left + 200
      } else {
        return mapWidth;
      }
    } else {
      return 100;
    }
  };

  // 逐字渲染
  const renderDraft = (str: string, type: string, endCallback: () => void) => {
    // 已经输出的字符数量  
    let outputIndex = 0;

    // 输出字符的函数  
    const outputText = () => {
      // 给出高亮后draft输出的结束标志
      if (type === 'stepDraft-1' && outputIndex + 3 > str?.length) {
        nodeDraftRender.current = true;
      }
      // 如果还有字符未输出  
      if (outputIndex < str?.length) {
        // 获取接下来要输出的1个字符（或剩余字符，如果不足3个）  
        let chunk = str.slice(outputIndex, Math.min(outputIndex + 10, str.length));
        // 更新已输出字符的索引  
        outputIndex += chunk.length;
        if (type === 'thought') {
          setDraft(str.slice(0, outputIndex));
        } else if (type === "stepDraft-0") {
          setProgress1(str.slice(0, outputIndex));
        } else if (type === "stepDraft-1") {
          setProgress2(str.slice(0, outputIndex));
        } else if (type === "conclusion") {
          setConclusion(str.slice(0, outputIndex));
        } else if (type === "response") {
          setResponse(str.slice(0, outputIndex));
        }
      } else {
        // 如果没有更多字符需要输出，则清除定时器  
        clearInterval(intervalId);
        endCallback && endCallback()
      }
    }

    // 设定定时器ID  
    let intervalId = setInterval(outputText, TEXT_INTERVAL);
  }

  // 渲染搜索结果renderSearchList
  const renderSearchList = () => {
    let outputIndex = 0;
    const content = JSON.parse(currentNode.actions[currentStep].result[0].content);

    const arr: any = Object.keys(content).map(item => {
      return { id: item, ...content[item] };
    });
    const len = Object.keys(content).length;
    const outputText = () => {
      outputIndex++;
      if (outputIndex < len + 1) {
        setSearchList(arr.slice(0, outputIndex));
      } else {
        clearInterval(intervalId);
      }
    };
    // 设定定时器ID  
    let intervalId = setInterval(outputText, SEARCHLIST_INTERVAL);
  };

  // 高亮searchList
  const highLightSearchList = (ids: any) => {
    setSelectedIds([]);
    const newStep = currentStep + 1;
    setCurrentStep(newStep);
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
    renderDraft(currentNode.actions[1].thought, `stepDraft-1`, () => { });
    hasHighlight.current = true; // 标记为高亮已执行 
  };

  // 渲染结论
  const renderConclusion = () => {
    const res = window.localStorage.getItem('nodeRes') || '';
    const replaced = replaceStr(res);
    // setTimeout(() => { setCollapseInfo([false, false]); }, 2000);
    setCollapseInfo([false, false]);
    setConclusion(replaced);
    setstashConclusion(res);
    // 给出conclusion结束的条件
    if (stashConclusion.length + 5 > res.length) {
      conclusionRender.current = true;
      setProgressEnd(true);
    }
  };

  // 渲染query
  const renderQuery = (endCallback: () => void) => {
    const queries = currentNode.actions[currentStep]?.args?.query;
    setQuery(queries);
    endCallback && endCallback();
  };

  const renderSteps = () => {
    setCurrentNodeRendering(true);
    const queryEndCallback = () => {
      if (currentNode.actions[currentStep].result[0].content) {
        if (currentNode.actions[currentStep].type === "BingBrowser.search" || currentNode.actions[currentStep].type === "BingBrowser") {
          renderSearchList();
        }
      }
    };
    const thoughtEndCallback = () => {
      if (currentNode.actions[currentStep]?.args?.query?.length) {
        renderQuery(queryEndCallback);
      } else {
        queryEndCallback();
      }
    };
    if (currentNode.actions[currentStep].thought) {
      renderDraft(currentNode.actions[currentStep].thought, `stepDraft-${currentStep}`, thoughtEndCallback);
    }
  }

  // 展开收起
  const toggleCard = (index: number) => {
    const arr = [...collapseInfo];
    arr[index] = !arr[index];
    setCollapseInfo(arr);
  };

  // 渲染过程中保持渲染文字可见
  const keepScrollTop = (divA: any, divB: any) => {
    // 获取 divB 的当前高度  
    const bHeight = divB.offsetHeight;

    // 检查 divA 是否需要滚动（即 divB 的高度是否大于 divA 的可视高度）  
    if (bHeight > divA.offsetHeight) {
      // 滚动到 divB 的底部在 divA 的可视区域内  
      divA.scrollTop = bHeight - divA.offsetHeight;
    }
  };

  useEffect(() => {
    setRenderData([
      {
        id: 0,
        state: 3,
        name: '原始问题',
        children: adjList
      }
    ])
  }, [JSON.stringify(adjList)]);

  useEffect(() => {
    console.log('render data changed-----', renderData);
  }, [renderData]);

  useEffect(() => {
    if (currentStep === 1) {
      setCollapseInfo([false, true]);
    }
  }, [currentStep]);

  useEffect(() => {
    if (nodeOutputEnd && !localStorage.getItem('nodeRes')) {
      // 如果节点输出结束了，但是response还没有结束，认为节点渲染已结束
      conclusionRender.current = true;
      setProgressEnd(true);
      return;
    }
    if (nodeDraftRender.current && localStorage.getItem('nodeRes')) {
      renderConclusion();
    }
  }, [localStorage.getItem('nodeRes'), nodeDraftRender.current, nodeOutputEnd]);

  useEffect(() => {
    if (obj?.response?.nodes[obj.current_node]?.detail?.state !== 1) {
      setIsWaiting(true);
    }
    if (obj?.response?.nodes?.[obj.current_node].detail?.state === 0 && currentNode?.current_node === obj.current_node) {
      console.log('node render end-----', obj);
      setNodeEnd(true);
    }

    if (obj?.current_node && obj?.response?.state === 3) {
      // 当node节点的数据可以开始渲染时，给currentnode赋值
      // update conclusion
      if (obj.response.nodes[obj.current_node]?.detail?.actions?.length === 2 &&
        obj.response.nodes[obj.current_node]?.detail?.state === 1 &&
        obj.response.nodes[obj.current_node]?.detail.response) {
        window.localStorage.setItem('nodeRes', obj.response.nodes[obj.current_node]?.detail.response);
      }
      if (obj.current_node &&
        (obj.response.nodes[obj.current_node]?.detail?.state === 1) &&
        obj.response.nodes[obj.current_node]?.detail?.actions?.length &&
        currentStep === 0 &&
        currentNode?.current_node !== obj?.current_node
      ) {
        // 更新当前渲染节点
        console.log('update current node----');
        setIsWaiting(false);
        setCurrentNode({ ...obj.response.nodes[obj.current_node]?.detail, current_node: obj.current_node });
      }

      // 设置highlight
      if (!selectedIds.length &&
        obj.response.nodes[obj.current_node]?.detail?.actions?.[1]?.type === 'BingBrowser.select' &&
        (obj.response.nodes[obj.current_node]?.detail?.state === 1)) {
        setSelectedIds(obj.response.nodes[obj.current_node]?.detail?.actions?.[1]?.args?.select_ids || []);
        setCurrentNode({ ...obj.response.nodes[obj.current_node]?.detail, current_node: obj.current_node });
      }
    }
  }, [obj]);

  useEffect(() => {
    // 输出思考过程
    if (!currentNode || currentNodeRendering) { return; }
    renderSteps();
  }, [currentNode, currentNodeRendering, selectedIds]);

  useEffect(() => {
    if (!hasHighlight.current && selectedIds.length && currentNode?.actions.length === 2) {
      // 渲染高亮的search信息
      highLightSearchList(selectedIds);
    }
  }, [selectedIds, currentNode]);

  useEffect(() => {
    // 当前节点渲染结束
    if (nodeName && nodeName !== currentNode?.current_node && progressEnd && !isEnd) {
      resetNode(nodeName);
      setMapWidth(generateWidth());
    }
  }, [nodeName, currentNode, progressEnd, isEnd]);

  let responseTimer: any = useRef(null);
  useEffect(() => {
    if (isEnd) {
      responseTimer.current = setInterval(() => {
        const divA = document.getElementById('chatArea') as HTMLDivElement;
        const divB = document.getElementById('messageWindowId') as HTMLDivElement;
        keepScrollTop(divA, divB);
        if (chatIsOver) {
          clearInterval(responseTimer.current);
        }
      }, 500);
      setTimeout(() => {
        setShowEndNode(true);
      }, 300);
    } else if (responseTimer.current) {
      // 如果 isEnd 变为 false，清除定时器  
      clearInterval(responseTimer.current);
      responseTimer.current = null;
    }

    // 返回清理函数，确保组件卸载时清除定时器  
    return () => {
      if (responseTimer.current) {
        clearInterval(responseTimer.current);
        responseTimer.current = null;
      }
    };
  }, [isEnd, chatIsOver]);

  useEffect(() => {
    setRenderData([]);
    setResponse('');
    setDraft('');
    setIsEnd(false);
    setShowRight(true);
    window.localStorage.setItem('nodeRes', '');
    window.localStorage.setItem('finishedNodes', '');
  }, [question]);

  const resetNode = (targetNode: string) => {
    if (targetNode === 'response') return; // 如果开始response了，所有节点都渲染完了，不需要reset
    // 渲染下一个节点前，初始化状态
    const newData = findAndUpdateStatus(renderData, targetNode);
    console.log('reset node------', targetNode, renderData);
    setCurrentStep(0);
    setQuery([]);
    setSearchList([]);
    setConclusion('');
    setCollapseInfo([true, true]);
    setProgress1('');
    setProgress2('');
    setProgressEnd(false);
    setCurrentNode(null);
    setCurrentNodeRendering(false);
    setSelectedIds([]);
    setNodeEnd(false);
    hasHighlight.current = false;
    nodeDraftRender.current = false;
    conclusionRender.current = false;
    window.localStorage.setItem('nodeRes', '');
  };

  const formatData = (data: any) => {
    try {
      setIsWaiting(false);
      const obj = JSON.parse(data);
      if (!obj.current_node && obj.response.state === 0) {
        console.log('chat is over end-------');
        setChatIsOver(true);
        return;
      }
      if (!obj.current_node && obj.response.state === 9) {
        setShowRight(false);
        setIsEnd(true);
        const replaced = replaceStr(obj.response.response);
        setResponse(replaced);
        return;
      }
      if (!obj.current_node && obj.response.state === 1 && !currentNode) {
        // 有thought，没有node
        setDraftEnd(false);
        setDraft(obj.response.response);
      }
      if (!obj.current_node && (obj.response.state !== 1 || obj.response.state !== 0 || obj.response.state !== 9)) {
        // 有thought，没有node, 不用处理渲染
        //console.log('loading-------------', obj);
        setDraftEnd(true);
        setIsWaiting(true);
      }
      if (obj.current_node && obj.response.state === 3) {
        setNodeName(obj.current_node);
        // 有node
        setObj(obj);
        const newAdjList = obj.response?.adjacency_list;
        if (newAdjList?.length > 0) {
          setAdjList(newAdjList);
        }
      }
    } catch (err) {
      console.log('format error-----', err);
    }
  };

  const startEventSource = () => {
    if (!chatIsOver) {
      message.warning('有对话进行中！');
      return;
    }
    setQuestion(stashQuestion);
    setChatIsOver(false);
    const postData = {
      inputs: [
        {
          role: 'user',
          content: stashQuestion
        }
      ]
    }
    const ctrl = new AbortController();
    eventSource = fetchEventSource(GET_SSE_DATA, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
      onmessage(ev) {
        formatData(ev.data);
      },
      onerror(err) {
        console.log('sse error------', err);
      },
      // signal: ctrl.signal,
    });
  };

  const abortEventSource = () => {
    if (eventSource) {
      eventSource.close(); // 或使用其他方法关闭连接，具体取决于库的API  
      eventSource = null;
      console.log('EventSource connection aborted due to timeout.');
      message.error('连接中断，2s后即将刷新页面---');
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  };

  return <div className={styles.mainPage} style={!showRight ? { maxWidth: '1000px' } : {}}>
    <div className={styles.chatContent}>
      <div className={styles.top} id="chatArea">
        <div id="messageWindowId">
          {
            question && <div className={styles.question}>
              <span>{question}</span>
            </div>
          }
          {
            (draft || response || renderData?.length > 0) &&
            <div className={styles.answer}>
              {
                renderData?.length > 0 ? <div className={styles.inner}>
                  <div className={styles.mapArea}>
                    <ul className={styles.mindmap} id="mindMap" style={isEnd ? { width: mapWidth, overflow: "hidden" } : {}}>
                      {renderData.map((item: any) => (
                        <MindMapItem key={item.name} item={item} isEnd={isEnd} />
                      ))}
                      {showEndNode &&
                        <div className={styles.end} style={generateEndStyle()}>
                          <div className={styles.node}>
                            <article>最终回复</article>
                          </div>
                        </div>
                      }
                    </ul>
                  </div>
                </div> : <></>
              }
              {
                !response && <div className={styles.draft}>
                  {/* {!draftEnd && draft && <div className={styles.loading}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>} */}
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{replaceStr(draft)}</ReactMarkdown>
                </div>
              }
              {response && <div className={styles.response}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{response}</ReactMarkdown>
              </div>}
            </div>
          }
        </div>
      </div>
      <div className={styles.sendArea}>
        <Input type="text" placeholder='说点什么吧~  Shift+Enter 换行 ； Enter 发送' onChange={(e) => { setStashQuestion(e.target.value) }}
          onPressEnter={startEventSource} />
        <button onClick={startEventSource}>
          <img src={SendIcon} />
          发送
        </button>
      </div>
      <div className={styles.notice}>如果想要更丝滑的体验，请在本地搭建-<a href='https://github.com/InternLM/lagent' target='_blank'>Lagent <IconFont type='icon-GithubFilled' /></a></div>
    </div>
    {showRight && <div className={styles.progressContent}>
      {
        currentNode && <>
          <div className={styles.toggleIcon} onClick={toggleRight}>
            <Tooltip placement="top" title="收起">
              <img src={PackIcon} />
            </Tooltip></div>
          <div className={styles.titleNode}>{currentNode?.content || currentNode?.node}</div>
          {
            currentNode?.actions?.length ? <>
              {
                currentNode.actions.map((item: any, idx: number) => (
                  currentStep >= idx && <div className={classNames(
                    styles.steps,
                    item.type === "BingBrowser.search" ? styles.thinking : styles.select
                  )} key={`step-${idx}`}>
                    <div className={styles.title}>
                      <i></i>{item.type === "BingBrowser.search" ? "思考" : item.type === "BingBrowser.select" ? "信息来源" : "信息整合"}
                      <div className={styles.open} onClick={() => { toggleCard(idx) }}>
                        <IconFont type={collapseInfo[idx] ? "icon-shouqi" : "icon-xiangxiazhankai"} />
                      </div>
                    </div>
                    <div className={classNames(
                      styles.con,
                      !collapseInfo[idx] ? styles.collapsed : ""
                    )}>
                      {
                        item.type === "BingBrowser.search" && <div className={styles.thought}>
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{progress1}</ReactMarkdown>
                        </div>
                      }
                      {
                        item.type === "BingBrowser.search" && query.length > 0 && <div className={styles.query}>
                          <div className={styles.subTitle}><IconFont type="icon-SearchOutlined" />搜索关键词</div>
                          {
                            query.map((item, index) => (<div key={`query-item-${item}`} className={classNames(styles.queryItem, styles.fadeIn)}>
                              {item}
                            </div>))
                          }
                        </div>
                      }
                      {
                        currentStep === idx && searchList.length > 0 && <div className={styles.searchList}>
                          {item.type === "BingBrowser.search" && <div className={styles.subTitle}><IconFont type="icon-DocOutlined" />信息来源</div>}
                          {
                            item.type === "BingBrowser.select" && <div className={styles.thought}>
                              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{progress2}</ReactMarkdown>
                            </div>
                          }
                          <div className={styles.scrollCon} style={(searchList.length > 5 && currentStep === 0) ? { height: '300px' } : {}}>

                            <div className={styles.inner} style={(searchList.length > 5 && currentStep === 0) ? { position: 'absolute', bottom: 0, left: 0 } : {}}>

                              {
                                searchList.map((item: any, num: number) => (
                                  <div className={classNames(
                                    styles.searchItem,
                                    item.highLight ? styles.highLight : ""
                                  )} key={`search-item-${item.url}-${idx}`}>
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
                ))
              }
            </> : <></>
          }
        </>
      }
      {
        conclusion && <div className={styles.steps}>
          <div className={styles.title}>
            <i></i>信息整合
          </div>
          <div className={styles.conclusion}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{conclusion}</ReactMarkdown>
          </div>
        </div>
      }
      {isWaiting && question && <div className={styles.loading99}></div>}
    </div>}
    {
      !showRight && <div className={styles.showRight} onClick={toggleRight}>
        <img src={ShowRightIcon} />
      </div>
    }

  </div>
};

export default RenderTest;