import styles from './index.module.less';
import { useEffect, useState, useRef, useMemo, useContext } from 'react';
import { Input, message, Tooltip } from 'antd';
import ShowRightIcon from './assets/think-progress-icon.svg';
import { MindsearchContext } from './provider/context';
import ChatRight from './components/chat-right';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import SessionItem from './components/session-item';
import classNames from 'classnames';
import Notice from './components/notice';

interface INodeInfo {
    isEnd?: boolean; // 该节点是否结束
    current_node?: string;
    thinkingData?: string; // step1 思考
    queries?: [];
    readingData?: string; // step2 思考
    searchList?: [];
    conclusion?: string; // 节点的结论
    selectedIds?: number[];
    subQuestion?: string; // 节点的标题
    conclusionRef: any[];
    outputing?: boolean;
};

interface IFormattedData {
    question?: string;
    nodes?: any;
    adjacency_list?: object;
    response?: string;
    responseRefList?: any[];
    chatIsOver?: boolean;
};

interface INodeItem {
    id: string;
    name: string;
    state: number;
};

class FatalError extends Error { };
class RetriableError extends Error { };

const MindSearchCon = () => {
    const navigate = useNavigate();
    const params = useParams<{ id: string; robotId: string }>();
    const [qaList, setQaList] = useState<IFormattedData[]>([]);
    const [formatted, setFormatted] = useState<IFormattedData>({});
    const [question, setQuestion] = useState('');
    const [stashedQuestion, setStashedQuestion] = useState<string>('');
    const [newChatTip, setNewChatTip] = useState<Boolean>(false);
    const [singleObj, setSingleObj] = useState<any>(null);
    const [isEnd, setIsEnd] = useState(false);
    const [inputFocused, setFocused] = useState(false);
    // 一轮完整对话结束
    const [chatIsOver, setChatIsOver] = useState(true);

    const [currentNodeInfo, setCurrentNode] = useState<any>(null);
    const [currentNodeName, setCurrentNodeName] = useState<string>('');
    const [activeNode, setActiveNode] = useState<string>('');
    // 是否展示右侧内容
    const [showRight, setShowRight] = useState(false);
    const [adjList, setAdjList] = useState<any>({});
    const [historyNode, setHistoryNode] = useState<any>(null);

    const [hasNewChat, setHasNewChat] = useState(false);

    // 新开会话
    const openNewChat = () => {
        location.reload();
    };

    const toggleRight = () => {
        setShowRight(!showRight);
    };

    // 渲染过程中保持渲染文字可见
    const keepScrollTop = () => {
        const divA = document.getElementById('chatArea') as HTMLDivElement;
        const divB = document.getElementById('messageWindowId') as HTMLDivElement;
        // 获取 divB 的当前高度
        const bHeight = divB.offsetHeight;

        // 检查 divA 是否需要滚动（即 divB 的高度是否大于 divA 的可视高度）
        if (bHeight > divA.offsetHeight) {
            // 滚动到 divB 的底部在 divA 的可视区域内  
            divA.scrollTop = bHeight - divA.offsetHeight + 30;
        }
    };

    const initPageState = () => {
        setSingleObj(null);
        setCurrentNodeName('');
        setCurrentNode(null);
        setFormatted({});
        setAdjList({});
        setShowRight(false);
        setIsEnd(false);
    };

    const responseTimer: any = useRef(null);

    useEffect(() => {
        // console.log('[ms]---', formatted, chatIsOver, responseTimer.current);
        if (chatIsOver && formatted?.response) {
            // 一轮对话结束
            setQaList((pre) => {
                return pre.concat(formatted);
            });
            initPageState();
            setCurrentNodeName('customer-0');
        }
        if (!chatIsOver && !responseTimer.current) {
            responseTimer.current = setInterval(() => {
                keepScrollTop();
            }, 50);
        }
        if (responseTimer.current && chatIsOver) {
            // 如果 isEnd 变为 false，清除定时器  
            clearInterval(responseTimer.current);
            responseTimer.current = null;
        }
    }, [formatted?.response, chatIsOver, responseTimer.current, newChatTip]);

    useEffect(() => {
        if (formatted?.question) {
            setHistoryNode(null);
            setChatIsOver(false);
        }
    }, [formatted?.question]);

    // 存储节点信息
    const stashNodeInfo = (fullInfo: any, nodeName: string) => {
        // console.log('stash node info------', fullInfo, fullInfo?.response?.stream_state);
        const content = JSON.parse(fullInfo?.response?.content || '{}') || {};
        const searchListStashed: any = Object.keys(content).map((item) => {
            return { id: item, ...content[item] };
        });
        const stashedList = JSON.parse(localStorage?.stashedNodes || '{}');
        const nodeInfo = stashedList[nodeName] || {};

        if (fullInfo?.content) {
            nodeInfo.subQuestion = fullInfo.content;
        }
        if (fullInfo?.response?.formatted?.thought) {
            // step1 思考
            if (!nodeInfo?.readingData && !nodeInfo?.queries?.length) {
                nodeInfo.thinkingData = fullInfo?.response?.formatted?.thought;
            }

            // step2 思考
            if (nodeInfo?.thinkingData && nodeInfo?.queries?.length && nodeInfo?.searchList?.length && !nodeInfo?.selectedIds?.length && !nodeInfo?.conclusion) {
                nodeInfo.readingData = fullInfo?.response?.formatted?.thought;
            }

            // conclusion
            if (nodeInfo?.startConclusion && fullInfo?.response?.stream_state === 1) {
                nodeInfo.conclusion = fullInfo?.response?.formatted?.thought;
            }
        }
        if (fullInfo?.response?.formatted?.action?.parameters?.query?.length && !nodeInfo.queries?.length) {
            nodeInfo.queries = fullInfo?.response?.formatted.action.parameters.query;
        }

        if (searchListStashed?.length && !nodeInfo.conclusionRef) {
            nodeInfo.searchList = searchListStashed;
            nodeInfo.conclusionRef = content;
        }

        if (Array.isArray(fullInfo?.response?.formatted?.action?.parameters?.select_ids) && !nodeInfo?.selectedIds?.length) {
            nodeInfo.selectedIds = fullInfo?.response?.formatted.action.parameters.select_ids;
            nodeInfo.startConclusion = true;
        }

        if (fullInfo?.response?.stream_state) {
            nodeInfo.outputing = true;
        } else {
            nodeInfo.outputing = false;
        }

        const nodesList: any = {};
        nodesList[nodeName] = {
            current_node: nodeName,
            ...nodeInfo,
        };
        window.localStorage.stashedNodes = JSON.stringify({ ...stashedList, ...nodesList });
    };

    const formatData = (obj: any) => {
        // 嫦娥6号上有哪些国际科学载荷？它们的作用分别是什么？
        try {
            // 更新邻接表
            if (obj?.response?.formatted?.adjacency_list) {
                setAdjList(obj.response?.formatted?.adjacency_list);
            }

            if (!obj?.current_node && obj?.response?.formatted?.thought && obj?.response?.stream_state === 1) {
                // 有thought，没有node, planner思考过程
                setFormatted((pre: IFormattedData) => {
                    return {
                        ...pre,
                        response: obj.response.formatted.thought,
                    };
                });
            }
            if (obj?.response?.formatted?.ref2url && !formatted?.responseRefList) {
                setFormatted((pre: IFormattedData) => {
                    return {
                        ...pre,
                        responseRefList: obj?.response?.formatted?.ref2url,
                    };
                });
            }
            if (obj?.current_node || obj?.response?.formatted?.node) {
                // 有node, 临时存储node信息
                stashNodeInfo(obj?.response?.formatted?.node?.[obj.current_node], obj.current_node);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleError = (errCode: number, msg: string) => {
        message.warning(msg || '请求出错了，请稍后再试');
        if (errCode === -20032 || errCode === -20033 || errCode === -20039) {
            // 敏感词校验失败, 新开会话
            openNewChat();
            return;
        }
        console.log('handle error------', msg);
        setChatIsOver(true);
        initPageState();
    };

    const startEventSource = () => {
        console.log('start event--------');
        if (qaList?.length > 4) {
            setNewChatTip(true);
            message.warning('对话数已达上限，请在新对话中聊天');
            keepScrollTop();
            return;
        }
        setFormatted({ ...formatted, question });
        setQuestion('');
        setChatIsOver(false);
        const ctrl = new AbortController();
        const url = '/solve';
        // const queryData = {
        //     cancel: true,
        //     prompt: question,
        // };
        const postData = {
            inputs: question
        }
        fetchEventSource(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
            openWhenHidden: true,
            signal: ctrl.signal,
            onmessage(ev) {
                try {
                    const res = (ev?.data && JSON.parse(ev.data)) || null;
                    if (res?.response?.stream_state === 0) {
                        setChatIsOver(true);
                        setFormatted((pre: IFormattedData) => {
                            return {
                                ...pre,
                                chatIsOver: true,
                            };
                        });
                    } else {
                        formatData(res);
                        setSingleObj(res);
                    }
                } catch (err) {
                    console.log('error on sse---', err);
                    handleError(0, '请求出错了，请稍后再试！');
                }
            },
            onerror(err) {
                console.log('error on sse---', err);
                handleError(0, '');
                ctrl.abort();
                if (err instanceof FatalError) {
                    throw err;
                }
            },
            onclose() {
                // params?.id && handleUpdateHistoryItem(params?.id);
            }
        });
    };

    // 点击节点
    const handleNodeClick = (node: string, idx: number) => {
        if (isEnd && !chatIsOver) return; // 当节点输出完成，最终response进行中，不允许点击按钮，点击无效
        const isFromHistory = qaList?.[idx]?.nodes?.[node];
        setShowRight(true);
        setActiveNode(node);

        if (isFromHistory) {
            const info = qaList?.[idx]?.nodes?.[node];

            if (!info) {
                message.error('没有读取到节点信息');
            }
            setHistoryNode(info);
        } else {
            setCurrentNodeName(node);
        }
    };

    // 解析历史记录或者搜索返回的数据
    const formatHistoryNode = (originNodeInfo: any) => {
        // console.log('format history node--------', originNodeInfo);
        const searchContent = JSON.parse(originNodeInfo?.memory?.[1]?.content || '{}') || {};
        const searchListStashed: any = Object.keys(searchContent).map((item) => {
            return { id: item, ...searchContent[item] };
        });

        const nodeInfo: INodeInfo = {
            current_node: originNodeInfo?.current_node || String(Date.now()),
            thinkingData: originNodeInfo?.memory?.[0]?.formatted?.thought || '', // step1 思考
            queries: originNodeInfo?.memory?.[0]?.formatted?.action?.parameters?.query || [],
            readingData: originNodeInfo?.memory?.[2]?.formatted?.thought || '', // step2 思考
            searchList: searchListStashed,
            conclusionRef: searchContent,
            conclusion: originNodeInfo?.memory?.[4]?.formatted?.thought || '', // 节点的结论
            selectedIds: originNodeInfo?.memory?.[2]?.formatted?.action?.parameters?.select_ids || [],
            subQuestion: originNodeInfo?.content, // 节点的标题
            isEnd: true,
            outputing: false
        };
        return nodeInfo;
    };

    const createSseChat = () => {
        if (submitDisabled) {
            return;
        }
        setQuestion(stashedQuestion);
        setStashedQuestion('');
        setCurrentNodeName('customer-0');
    };

    const checkNodesOutputFinish = () => {
        const adjListStr = JSON.stringify(adjList);
        // 服务端没有能准确描述所有节点输出完成的状态，前端从邻接表信息中寻找response信息，不保证完全准确，因为也可能不返回
        if (adjListStr.includes('"name":"response"')) {
            setIsEnd(true);
        }
    };

    useEffect(() => {
        if (!adjList) return;
        if (isEnd) {
            // 所有节点输出完成时收起右侧
            setShowRight(false);
        } else {
            checkNodesOutputFinish();
        }
        setFormatted((pre: IFormattedData) => {
            return {
                ...pre,
                adjacency_list: adjList,
            };
        });
    }, [adjList, isEnd]);

    useEffect(() => {
        const findStashNode = localStorage?.stashedNodes && JSON.parse(localStorage?.stashedNodes || '{}');
        if (!findStashNode || !currentNodeName) return;
        currentNodeName === 'customer-0' ? setCurrentNode(null) : setCurrentNode(findStashNode?.[currentNodeName]);
        currentNodeName !== 'customer-0' && setShowRight(true);
    }, [currentNodeName, localStorage?.stashedNodes]);

    useEffect(() => {
        if (!singleObj) return;
        if ((!currentNodeName || currentNodeName === 'customer-0') && singleObj?.current_node) {
            setCurrentNodeName(singleObj?.current_node);
        }
    }, [singleObj, currentNodeName]);

    useEffect(() => {
        if (question) {
            startEventSource();
        }
    }, [question]);

    useEffect(() => {
        if (!showRight) {
            setActiveNode('');
        }
    }, [showRight]);

    useEffect(() => {
        localStorage.stashedNodes = '';
        localStorage.reformatStashedNodes = '';

        return () => {
            // 返回清理函数，确保组件卸载时清除定时器  
            if (responseTimer.current) {
                clearInterval(responseTimer.current);
                responseTimer.current = null;
            }
        };
    }, []);

    const submitDisabled = useMemo(() => {
        return newChatTip || !stashedQuestion || !chatIsOver;
    }, [newChatTip, stashedQuestion, chatIsOver]);

    return (
        <MindsearchContext.Provider value={{
            isEnd,
            chatIsOver,
            activeNode: activeNode
        }}>
            <div className={styles.mainPage} style={!showRight ? { maxWidth: '840px' } : {}}>
                <div className={styles.chatContent}>
                    <div className={classNames(
                        styles.top,
                        (isEnd && !chatIsOver) ? styles.mb12 : ''
                    )} id="chatArea">
                        <div id="messageWindowId">
                            {qaList.length > 0 &&
                                qaList.map((item: IFormattedData, idx) => {
                                    return (
                                        <div key={`qa-item-${idx}`} className={styles.qaItem}>
                                            {
                                                item.question && <SessionItem
                                                    item={item}
                                                    handleNodeClick={handleNodeClick}
                                                    idx={idx}
                                                    key={`session-item-${idx}`}
                                                />
                                            }
                                        </div>
                                    );
                                })
                            }
                            {
                                formatted?.question &&
                                <SessionItem
                                    item={{ ...formatted, chatIsOver, isEnd, adjacency_list: adjList }}
                                    handleNodeClick={handleNodeClick}
                                    idx={qaList.length}
                                />
                            }
                        </div>
                        {newChatTip && (
                            <div className={styles.newChatTip}>
                                <span>
                                    对话数已达上限，请在 <a onClick={openNewChat}>新对话</a> 中聊天
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={classNames(
                        styles.input,
                        inputFocused ? styles.focus : ''
                    )}>
                        <div className={styles.inputMain}>
                            <div className={styles.inputMainBox}>
                                <Input
                                    className={styles.textarea}
                                    variant="borderless"
                                    value={stashedQuestion}
                                    placeholder={'开始提问吧'}
                                    onChange={(e) => {
                                        setStashedQuestion(e.target.value);
                                    }}
                                    onPressEnter={createSseChat}
                                    onFocus={() => { setFocused(true) }}
                                    onBlur={() => { setFocused(false) }}
                                />
                                <div className={classNames(styles.send, submitDisabled && styles.disabled)} onClick={createSseChat}>
                                    <i className="iconfont icon-Frame1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Notice />
                </div>
                {showRight ? (
                    <ChatRight
                        nodeInfo={currentNodeInfo}
                        historyNode={historyNode}
                        toggleRight={toggleRight}
                        key={currentNodeName}
                        chatIsOver={chatIsOver}
                    />
                ) : (
                    <div className={styles.showRight}>
                        <div className={classNames(
                            styles.actionIcon,
                            isEnd && !chatIsOver ? styles.forbidden : ''
                        )} onClick={toggleRight}>
                            <Tooltip placement="leftTop" title="思考过程">
                                <img src={ShowRightIcon} />
                            </Tooltip>
                        </div>
                    </div>
                )}
            </div>
        </MindsearchContext.Provider>
    );
};

export default MindSearchCon;
