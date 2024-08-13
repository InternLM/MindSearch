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
  // 一组节点的思考草稿
  const [draft, setDraft] = useState('');
  // 一轮完整对话结束
  const [chatIsOver, setChatIsOver] = useState(true);
  // 整体的渲染树
  const [renderData, setRenderData] = useState<any[]>([]);
  const [currentNode, setCurrentNode] = useState<any>(null);
  const [response, setResponse] = useState("");
  // 是否展示右侧内容
  const [showRight, setShowRight] = useState(true);
  const [nodeName, setNodeName] = useState('');
  const [obj, setObj] = useState<any>(null);
  const [adjList, setAdjList] = useState([]);
  const [historyNode, setHistoryNode] = useState<any>(null);
  let checkTimeoutId: any = useRef(null);

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
    console.log('graph render data changed-----', renderData);
  }, [renderData]);

  useEffect(() => {
    if (obj?.current_node && obj?.response?.state === 3) {
      // 当node节点的数据可以开始渲染时，给currentnode赋值
      if (obj.current_node &&
        (obj.response.nodes[obj.current_node]?.detail?.state === 1) &&
        obj.response.nodes[obj.current_node]?.detail?.actions?.length &&
        currentNode?.current_node !== obj?.current_node
      ) {
        // 更新当前渲染节点
        // console.log('update current node----');
        setCurrentNode({ ...obj.response.nodes[obj.current_node]?.detail, current_node: obj.current_node });
      }
    }
  }, [obj]);

  useEffect(() => {
    // 当前节点渲染结束
    if (nodeName && nodeName !== currentNode?.current_node && !isEnd) {
      resetNode(nodeName);
    }
  }, [nodeName, currentNode, isEnd]);

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
    // const newData = findAndUpdateStatus(renderData, targetNode);
    console.log('reset node------', targetNode, renderData);
    setCurrentNode(null);
  };

  const formatData = (data: any) => {
    try {
      setIsWaiting(false);
      const obj = JSON.parse(data);
      if (!obj.current_node && obj.response.state === 0) {
        console.log('chat is over end-------');
        clearInterval(checkTimeoutId.current);
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
      if (!obj.current_node && obj.response.state === 1) {
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
      console.log('format error-----', err, 'received data is-------', data);
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
        checkTimeoutId.current = setInterval(checkTimeout, 6000);
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

    const checkTimeout = () => {
      const currentTime = new Date().getTime();
      const diff = currentTime - lastReceivedTime;
      // 如果超过10秒没有接收到新消息，则关闭连接  
      if (diff > 10000) {
        console.warn("-----No new data received over 10 seconds-----");
        // eventSource.close();
        // message.warning('超过10s未收到新的返回数据，继续等待或刷新再试');
        lastReceivedTime = new Date().getTime();
        // setTimeout(() => {
        //   location.reload();
        // }, 2000);
        // 清除定时器  
        // clearInterval(checkTimeoutId.current);
      }
    }
  };

  const handleHistory = (node: string) => {
    if (!chatIsOver) {
      message.warning('思考中，请稍后');
      return;
    }
    const stashedObj = window.localStorage.getItem('nodesInfo') && JSON.parse(window.localStorage.getItem('nodesInfo') || '{}') || {};
    const info = stashedObj[node];
    console.log('handleHistory---------------', info);
    if (!info) {
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