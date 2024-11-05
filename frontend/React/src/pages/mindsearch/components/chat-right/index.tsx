import { useEffect, useState, useRef } from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import CustomMarkdown from '../custom-markdown';
import IconFont from '../iconfont';
import PackIcon from '../../assets/pack-up.svg';
import PackDisableIcon from '../../assets/pack-up-disabled.svg';
import { Tooltip } from 'antd';
import QueryItem from './components/query-item';
import SearchItem from './components/search-item';
import Loading from '../loading';
import EmptyPlaceHolder from './components/empty-placeholder';

interface IProps {
    nodeInfo: any;
    stashInfo?: any;
    historyNode?: any;
    toggleRight: () => void;
    chatIsOver?: Boolean;
}

const ChatRight = ({ nodeInfo, historyNode = null, toggleRight, chatIsOver = false }: IProps) => {
    const [subQuestion, setSubQuestion] = useState('');
    const [queries, setQuries] = useState<any>([]);
    const [searchList, setSearchList] = useState<any>([]);
    const [conclusionRef, setConclusionRef] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [conclusion, setConclusion] = useState('');
    const [thinkingData, setThinking] = useState<any>(null);
    const [readingData, setReading] = useState<any>(null);
    const [isOutputing, setIsOutputing] = useState(false);

    // steps展开收起的信息
    const [collapseInfo, setCollapseInfo] = useState<boolean[]>([true, true, true]);
    const [currentNode, setCurrentNode] = useState<any>();
    // 展开收起
    const toggleCard = (index: number) => {
        const arr = [...collapseInfo];
        arr[index] = !arr[index];
        setCollapseInfo(arr);
    };
    // 高亮searchList
    const highLightSearchList = (ids: any) => {
        setCurrentStep(2);
        const highlightArr: any = [...searchList];
        highlightArr.forEach((item: any) => {
            if (ids.includes(Number(item.id))) {
                item.highLight = true;
            }
        });
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
        });
        setSearchList(highlightArr);
        setCollapseInfo([false, false, true]);
    };

    const handleReceiveHistory = () => {
        setCurrentNode(2);
        setCollapseInfo([false, false, true]);
        setIsLoading(false);
        setThinking(historyNode.thinkingData);
        setConclusion(historyNode.conclusion);
        setReading(historyNode.readingData);
        setQuries(historyNode.queries);
        setSearchList(historyNode.searchList);
        setConclusionRef(historyNode.conclusionRef);
        setSelectedIds(historyNode.selectedIds);
        setSubQuestion(historyNode.subQuestion);
    };

    const resetStatus = () => {
        // 初始化组件状态
        console.log('reset status-------');
        setCurrentStep(0);
        setCollapseInfo([true, true, true]);
        setSelectedIds([]);
        setSearchList([]);
        setConclusionRef(null);
        setThinking(null);
        setReading(null);
        setConclusion('');
        setSubQuestion('');
    };

    const hideRight = () => {
        if (isOutputing) return;
        toggleRight();
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
        if (historyNode) return; // 有历史记录，不处理
        try {
            if (nodeInfo?.current_node !== currentNode) {
                setCurrentNode(nodeInfo?.current_node);
                resetStatus();
            }
            setIsOutputing(nodeInfo?.outputing);
            if (!subQuestion && nodeInfo?.subQuestion) {
                setSubQuestion(nodeInfo.subQuestion);
            }
            if (nodeInfo?.thinkingData) {
                setThinking(nodeInfo.thinkingData);
            }
            if (nodeInfo?.readingData) {
                setReading(nodeInfo.readingData);
            }
            if (nodeInfo?.queries?.length) {
                setQuries(nodeInfo.queries);
            }
            if (nodeInfo?.searchList && !searchList?.length) {
                setSearchList(nodeInfo.searchList);
                setCurrentStep(1);
                setCollapseInfo([false, true, true]);
            }
            if (nodeInfo?.selectedIds && !selectedIds?.length) {
                setSelectedIds(nodeInfo.selectedIds);
            }
            if (nodeInfo?.conclusion) {
                setConclusion(nodeInfo.conclusion);
            }
            if (nodeInfo?.conclusionRef) {
                setConclusionRef(nodeInfo.conclusionRef);
            }
        } catch (err) {
            console.log('[chat right]--error from nodeinfo---', err);
        }
    }, [nodeInfo, currentStep]);

    return <div className={styles.rightContent} id="rightContent">
        <div className={styles.toggleIcon} onClick={hideRight}>
            <img src={PackIcon} />
        </div>
        {
            currentNode ? <>
                <div className={styles.titleNode}>{subQuestion}</div>
                <div className={classNames(
                    styles.nodeInfo,
                    isOutputing ? styles.forbidScroll : ''
                )}>
                    {thinkingData && (
                        <div className={classNames(styles.steps)}>
                            <div className={styles.title}>
                                <i></i>思考
                                <div
                                    className={styles.open}
                                    onClick={() => {
                                        toggleCard(0);
                                    }}
                                >
                                    <IconFont type={collapseInfo[0] ? 'icon-shouqi' : 'icon-xiangxiazhankai'} />
                                </div>
                            </div>
                            <div className={classNames(styles.con, !collapseInfo[0] ? styles.collapsed : '')}>
                                <div>
                                    <CustomMarkdown source={thinkingData} />
                                </div>
                                {queries.length > 0 && (
                                    <div className={styles.query}>
                                        <div className={styles.subTitle}>
                                            <IconFont type="icon-SearchOutlined" />
                                            搜索关键词
                                        </div>
                                        {queries.map((item: string, index: number) => (
                                            <QueryItem key={`query-item-${item}`} item={item} />
                                        ))}
                                    </div>
                                )}
                                {searchList.length > 0 && currentStep === 0 && (
                                    <div className={styles.searchList}>
                                        <div className={styles.subTitle}>
                                            <IconFont type="icon-DocOutlined" />
                                            信息来源
                                        </div>
                                        <div className={styles.scrollCon} style={searchList.length > 5 ? { height: '542px' } : {}}>
                                            <div className={styles.inner} style={searchList.length > 5 ? {} : {}}>
                                                {searchList.map((item: any) => (
                                                    <SearchItem item={item} key={`search-item-${item.url}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {currentStep > 0 && readingData && (
                        <div className={classNames(styles.steps)}>
                            <div className={styles.title}>
                                <i></i>信息来源
                                <div
                                    className={styles.open}
                                    onClick={() => {
                                        toggleCard(1);
                                    }}
                                >
                                    <IconFont type={collapseInfo[1] ? 'icon-shouqi' : 'icon-xiangxiazhankai'} />
                                </div>
                            </div>
                            <div className={classNames(styles.con, !collapseInfo[1] ? styles.collapsed : '')}>
                                <div className={styles.draft}>
                                    <CustomMarkdown source={readingData} />
                                </div>
                                {searchList.length > 0 && (
                                    <div className={styles.searchList}>
                                        <div className={styles.scrollCon} style={searchList.length > 5 ? { height: '542px' } : {}}>
                                            <div className={styles.inner} style={searchList.length > 5 ? {} : {}}>
                                                {searchList.map((item: any) => (
                                                    <SearchItem item={item} key={`search-item-${item.url}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {
                        conclusion && (
                            <div className={classNames(styles.steps)}>
                                <div className={styles.title}>
                                    <i></i>信息整合
                                    <div
                                        className={styles.open}
                                        onClick={() => {
                                            toggleCard(2);
                                        }}
                                    >
                                        <IconFont type={collapseInfo[2] ? 'icon-shouqi' : 'icon-xiangxiazhankai'} />
                                    </div>
                                </div>
                                <div
                                    id="nodeConclusionModule"
                                    className={classNames(
                                        styles.con,
                                        !collapseInfo[2] ? styles.collapsed : '',
                                        isOutputing ? styles.limitHeight : ''
                                    )}
                                >
                                    <div id="conclusionInfo">
                                        <CustomMarkdown source={conclusion} refList={chatIsOver ? conclusionRef : null} />
                                    </div>
                                </div>
                            </div>
                        )}
                    {isLoading && <Loading />}
                </div></> : <EmptyPlaceHolder />
        }
    </div>
};

export default ChatRight;
