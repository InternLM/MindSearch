import styles from './index.module.less';
import { useEffect, useState, useRef } from 'react';
import SendIcon from '@/assets/sendIcon.svg';
import { Input, message } from 'antd';
import IconFont from '@/components/iconfont';
import ShowRightIcon from "@/assets/show-right-icon.png";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { GET_SSE_DATA } from '@/config/cgi';
import { replaceStr } from '@/utils/tools';
import ChatRight from '@/components/chat-right';
import Answer from '@/components/answer';
import Loading from '@/components/loading';

const RenderTest = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [question, setQuestion] = useState("");
  const [stashQuestion, setStashQuestion] = useState("");
  const [isEnd, setIsEnd] = useState(false);
  // 一组节点的渲染草稿
  const [draft, setDraft] = useState('');
  // 一轮完整对话结束
  const [chatIsOver, setChatIsOver] = useState(true);
  // 一组节点的思考草稿是不是打印结束
  const [progressEnd, setProgressEnd] = useState(false);

  const [query, setQuery] = useState([]);
  const [searchList, setSearchList] = useState([]);
  // 整体的渲染树
  const [renderData, setRenderData] = useState<any[]>([]);
  const [currentNode, setCurrentNode] = useState<any>(null);
  const [response, setResponse] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [mapWidth, setMapWidth] = useState(0);
  // 是否展示右侧内容
  const [showRight, setShowRight] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  const [nodeName, setNodeName] = useState('');
  const hasHighlight = useRef(false);
  const conclusionRender = useRef(false);
  const nodeDraftRender = useRef(false);
  const [obj, setObj] = useState<any>(null);
  const [adjList, setAdjList] = useState([]);
  const [historyNode, setHistoryNode] = useState<any>(null);

  const TEXT_INTERVAL = 20;

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
  // const renderDraft = (str: string, type: string, endCallback: () => void) => {
  //   // 已经输出的字符数量  
  //   let outputIndex = 0;

  //   // 输出字符的函数  
  //   const outputText = () => {
  //     // 给出高亮后draft输出的结束标志
  //     if (type === 'stepDraft-1' && outputIndex + 3 > str?.length) {
  //       nodeDraftRender.current = true;
  //     }
  //     // 如果还有字符未输出  
  //     if (outputIndex < str?.length) {
  //       // 获取接下来要输出的1个字符（或剩余字符，如果不足3个）  
  //       let chunk = str.slice(outputIndex, Math.min(outputIndex + 10, str.length));
  //       // 更新已输出字符的索引  
  //       outputIndex += chunk.length;
  //       if (type === 'thought') {
  //         setDraft(str.slice(0, outputIndex));
  //       }
  //     } else {
  //       // 如果没有更多字符需要输出，则清除定时器  
  //       clearInterval(intervalId);
  //       endCallback && endCallback()
  //     }
  //   }

  //   // 设定定时器ID  
  //   let intervalId = setInterval(outputText, TEXT_INTERVAL);
  // }

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
    // 当前节点渲染结束
    if (nodeName && nodeName !== currentNode?.current_node && progressEnd && !isEnd) {
      resetNode(nodeName);
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
    setHistoryNode(null);
    setShowRight(true);
    window.localStorage.setItem('nodesInfo', '');
    window.localStorage.setItem('nodeRes', '');
    window.localStorage.setItem('finishedNodes', '');
  }, [question]);

  useEffect(() => {
    // 设置beforeunload事件监听器  
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {  
      // message.warning('离开可能导致SSE重连，确认离开吗？'); 
      const msg = "离开可能导致SSE重连，确认离开吗？";  
      event.preventDefault(); // 大多数现代浏览器会忽略这一行  
      (event as any).returnValue = msg;
    };  
  
    // 添加事件监听器  
    window.addEventListener('beforeunload', handleBeforeUnload);  
  
    // 清理函数，确保组件卸载时移除事件监听器  
    return () => {  
      window.removeEventListener('beforeunload', handleBeforeUnload);  
    };
  }, []);

  const resetNode = (targetNode: string) => {
    if (targetNode === 'response') return; // 如果开始response了，所有节点都渲染完了，不需要reset
    // 渲染下一个节点前，初始化状态
    const newData = findAndUpdateStatus(renderData, targetNode);
    console.log('reset node------', targetNode, renderData);
    setCurrentStep(0);
    setQuery([]);
    setSearchList([]);
    setProgressEnd(false);
    setCurrentNode(null);
    setSelectedIds([]);
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
        // setDraftEnd(false);
        setDraft(obj.response.response);
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
    setIsWaiting(true);
    // 用来记录最后一次接收消息的时间  
    let lastReceivedTime = new Date().getTime();
    let checkTimeoutId: any = null;

    const postData = {
      inputs: [
        {
          role: 'user',
          content: stashQuestion
        }
      ]
    }
    const eventSource = fetchEventSource(GET_SSE_DATA, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
      async onopen(res) {
        // 开始检查超时  
        // checkTimeoutId = setInterval(checkTimeout, 5000);
      },
      onmessage(ev) {
        if (stashQuestion) {
          setStashQuestion('');
        }
        // 更新最后接收时间  
        lastReceivedTime = new Date().getTime();
        formatData(ev.data);
      },
      onerror(err) {
        console.log('sse error------', err);
      },
      // signal: ctrl.signal,
    });

    // const checkTimeout = () => {
    //   const currentTime = new Date().getTime();
    //   const diff = currentTime - lastReceivedTime;
    //   // 如果超过10秒没有接收到新消息，则关闭连接  
    //   if (diff > 10000) {
    //     console.log("No new data received for 10 seconds, closing connection.");
    //     // eventSource.close();
    //     message.error('已有10s未收到新的返回数据，继续等待或刷新再试');
    //     lastReceivedTime = new Date().getTime();
    //     // setTimeout(() => {
    //     //   location.reload();
    //     // }, 2000);
    //     // 清除定时器  
    //     // clearInterval(checkTimeoutId);
    //   }
    // }
  };

  const handleHistory = (node: string) => {
    if (!chatIsOver) {
      message.warning('思考中，请稍后');
      return;
    }
    const stashedObj = window.localStorage.getItem('nodesInfo') && JSON.parse(window.localStorage.getItem('nodesInfo') || '{}') || {};
    const info = stashedObj[node];
    console.log('handleHistory---------------', info);
    if(!info) {
      message.error('没有读取到节点的历史记录信息');
    }
    setHistoryNode(info);
    setShowRight(true);
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
          {isWaiting && <Loading />}
          {
            (draft || response || renderData?.length > 0) &&
            <Answer
              response={response}
              draft={draft}
              isEnd={isEnd}
              renderData={renderData}
              chatIsOver={chatIsOver}
              mapWidth={mapWidth}
              handleHistory={handleHistory}
            />
          }
        </div>
      </div>
      <div className={styles.sendArea}>
        <Input type="text" placeholder='说点什么吧~  Shift+Enter 换行 ； Enter 发送'
          value={stashQuestion}
          onChange={(e) => { setStashQuestion(e.target.value) }}
          onPressEnter={startEventSource} />
        <button onClick={startEventSource}>
          <img src={SendIcon} />
          发送
        </button>
      </div>
      <div className={styles.notice}>如果想要更丝滑的体验，请在本地搭建-<a href='https://github.com/internLM/mindsearch' target='_blank'>Mind Search <IconFont type='icon-GithubFilled' /></a></div>
      <div className={styles.notice}>Powered by InternLM2.5, this service has been specifically optimized for Chinese. For a better experience in English, you can build it locally.</div>
    </div>
    {
      showRight && <ChatRight nodeInfo={obj} historyNode={historyNode} toggleRight={toggleRight} />
    }
    {
      !showRight && <div className={styles.showRight} onClick={toggleRight}>
        <img src={ShowRightIcon} />
      </div>
    }

  </div>
};

export default RenderTest;