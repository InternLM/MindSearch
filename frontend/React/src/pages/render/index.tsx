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
  // A group of nodes rendering draft
  const [draft, setDraft] = useState('');
  // A complete round of conversation ends
  const [chatIsOver, setChatIsOver] = useState(true);
  // Whether the draft of a group of nodes is finished printing
  const [draftEnd, setDraftEnd] = useState(false);

  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');
  const [progressEnd, setProgressEnd] = useState(false);

  const [conclusion, setConclusion] = useState('');
  const [stashConclusion, setstashConclusion] = useState('');

  const [query, setQuery] = useState([]);
  const [searchList, setSearchList] = useState([]);
  // Overall rendering tree
  const [renderData, setRenderData] = useState<any[]>([]);
  const [currentNode, setCurrentNode] = useState<any>(null);
  // Rendering the nth item in minddata
  const [renderIndex, setRenderIndex] = useState<number>(0);
  const [response, setResponse] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  // Information about steps expanding and collapsing
  const [collapseInfo, setCollapseInfo] = useState([true, true]);
  const [mapWidth, setMapWidth] = useState(0);
  // Whether to show the right content
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
        // Recursively find in child nodes
        node.children = findAndUpdateStatus(node.children, targetNode);
      }

      return node;
    });
  }

  const generateEndStyle = () => {
    // Get all div elements with class 'endline'
    const endlineDivs = document.getElementsByClassName('endline');
    const mindMap = document.getElementById("mindMap");
    // Ensure there are at least two elements
    if (endlineDivs.length >= 2 && mindMap) {
      // Get the bounding rectangle of the first and last elements
      const firstRect = endlineDivs[0].getBoundingClientRect();
      const lastRect = endlineDivs[endlineDivs.length - 1].getBoundingClientRect();
      const mindMapRect = mindMap?.getBoundingClientRect();
      // Calculate the difference in y values
      const yDiff = lastRect.top - firstRect.top;
      // If you need to include the full height of the element (not just the top position), you can add the height of the element
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
    // Ensure there are at least two elements
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

  // Render text character by character
  const renderDraft = (str: string, type: string, endCallback: () => void) => {
    // Number of characters already output
    let outputIndex = 0;

    // Function to output characters
    const outputText = () => {
      // Give the end flag for draft output after highlighting
      if (type === 'stepDraft-1' && outputIndex + 3 > str?.length) {
        nodeDraftRender.current = true;
      }
      // If there are still characters not output
      if (outputIndex < str?.length) {
        // Get the next 1 character to output (or remaining characters if less than 3)
        let chunk = str.slice(outputIndex, Math.min(outputIndex + 10, str.length));
        // Update the index of the output characters
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
        // If there are no more characters to output, clear the timer
        clearInterval(intervalId);
        endCallback && endCallback()
      }
    }

    // Set timer ID
    let intervalId = setInterval(outputText, TEXT_INTERVAL);
  }

  // Render search results renderSearchList
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
    // Set timer ID
    let intervalId = setInterval(outputText, SEARCHLIST_INTERVAL);
  };

  // Highlight searchList
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
      // If item1 is highlighted, put it in front
      if (item1.highLight) {
        return -1;
      }
      // If item2 is highlighted, put it behind
      return 1;
    })
    setSearchList(highlightArr);
    renderDraft(currentNode.actions[1].thought, `stepDraft-1`, () => { });
    hasHighlight.current = true; // Mark as highlight executed
  };

  // Render conclusion
  const renderConclusion = () => {
    const res = window.localStorage.getItem('nodeRes') || '';
    const replaced = replaceStr(res);
    // setTimeout(() => { setCollapseInfo([false, false]); }, 2000);
    setCollapseInfo([false, false]);
    setConclusion(replaced);
    setstashConclusion(res);
    // Give the condition for the end of conclusion
    if (stashConclusion.length + 5 > res.length) {
      conclusionRender.current = true;
      setProgressEnd(true);
    }
  };

  // Render query
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

  // Expand and collapse
  const toggleCard = (index: number) => {
    const arr = [...collapseInfo];
    arr[index] = !arr[index];
    setCollapseInfo(arr);
  };

  // Keep the rendered text visible during rendering
  const keepScrollTop = (divA: any, divB: any) => {
    // Get the current height of divB
    const bHeight = divB.offsetHeight;

    // Check if divA needs to scroll (i.e., if the height of divB is greater than the visible height of divA)
    if (bHeight > divA.offsetHeight) {
      // Scroll to the bottom of divB in the visible area of divA
      divA.scrollTop = bHeight - divA.offsetHeight;
    }
  };

  useEffect(() => {
    setRenderData([
      {
        id: 0,
        state: 3,
        name: 'Original Question',
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
      // If the node output is finished, but the response is not finished, consider the node rendering finished
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
      // When the node data can start rendering, assign currentnode
      // Update conclusion
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
        // Update the current rendering node
        console.log('update current node----');
        setIsWaiting(false);
        setCurrentNode({ ...obj.response.nodes[obj.current_node]?.detail, current_node: obj.current_node });
      }

      // Set highlight
      if (!selectedIds.length &&
        obj.response.nodes[obj.current_node]?.detail?.actions?.[1]?.type === 'BingBrowser.select' &&
        (obj.response.nodes[obj.current_node]?.detail?.state === 1)) {
        setSelectedIds(obj.response.nodes[obj.current_node]?.detail?.actions?.[1]?.args?.select_ids || []);
        setCurrentNode({ ...obj.response.nodes[obj.current_node]?.detail, current_node: obj.current_node });
      }
    }
  }, [obj]);

  useEffect(() => {
    // Output the thinking process
    if (!currentNode || currentNodeRendering) { return; }
    renderSteps();
  }, [currentNode, currentNodeRendering, selectedIds]);

  useEffect(() => {
    if (!hasHighlight.current && selectedIds.length && currentNode?.actions.length === 2) {
      // Render highlighted search information
      highLightSearchList(selectedIds);
    }
  }, [selectedIds, currentNode]);

  useEffect(() => {
    // Current node rendering ends
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
      // If isEnd becomes false, clear the timer
      clearInterval(responseTimer.current);
      responseTimer.current = null;
    }

    // Return a cleanup function to ensure the timer is cleared when the component is unmounted
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
    if (targetNode === 'response') return; // If response starts, all nodes are rendered, no need to reset
    // Initialize state before rendering the next node
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
        // If there is a thought, but no node
        setDraftEnd(false);
        setDraft(obj.response.response);
      }
      if (!obj.current_node && (obj.response.state !== 1 || obj.response.state !== 0 || obj.response.state !== 9)) {
        // If there is a thought, but no node, no need to handle rendering
        //console.log('loading-------------', obj);
        setDraftEnd(true);
        setIsWaiting(true);
      }
      if (obj.current_node && obj.response.state === 3) {
        setNodeName(obj.current_node);
        // If there is a node
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
      message.warning('There is an ongoing conversation!');
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
      eventSource.close(); // Or use other methods to close the connection, depending on the library's API
      eventSource = null;
      console.log('EventSource connection aborted due to timeout.');
      message.error('Connection interrupted, refreshing page in 2s---');
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
                            <article>Final Reply</article>
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
        <Input type="text" placeholder='Say something~  Shift+Enter for new line ； Enter to send' onChange={(e) => { setStashQuestion(e.target.value) }}
          onPressEnter={startEventSource} />
        <button onClick={startEventSource}>
          <img src={SendIcon} />
          Send
        </button>
      </div>
      <div className={styles.notice}>For a smoother experience, please set up locally-<a href='https://github.com/InternLM/MindSearch' target='_blank'>MindSearch <IconFont type='icon-GithubFilled' /></a></div>
    </div>
    {showRight && <div className={styles.progressContent}>
      {
        currentNode && <>
          <div className={styles.toggleIcon} onClick={toggleRight}>
            <Tooltip placement="top" title="Collapse">
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
                      <i></i>{item.type === "BingBrowser.search" ? "Thinking" : item.type === "BingBrowser.select" ? "Information Source" : "Information Integration"}
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
                          <div className={styles.subTitle}><IconFont type="icon-SearchOutlined" />Search Keywords</div>
                          {
                            query.map((item, index) => (<div key={`query-item-${item}`} className={classNames(styles.queryItem, styles.fadeIn)}>
                              {item}
                            </div>))
                          }
                        </div>
                      }
                      {
                        currentStep === idx && searchList.length > 0 && <div className={styles.searchList}>
                          {item.type === "BingBrowser.search" && <div className={styles.subTitle}><IconFont type="icon-DocOutlined" />Information Source</div>}
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
            <i></i>Information Integration
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
