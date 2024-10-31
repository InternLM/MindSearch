import styles from './index.module.less';
import MindMapGraph from '../mind-map';
import { MindsearchContext } from '../../provider/context';
import MindSearchAvatar from '../../assets/mindsearch-avatar.svg';
import CustomMarkdown from '../custom-markdown';
import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';

interface IProps {
    adjList: any;
    isEnd: boolean;
    response: string;
    refList: any;
    listId: number;
    question: string;
    handleNodeClick: (info: any, idx: number) => void;
}

const Answer = ({ refList = null, adjList, isEnd, response = '', listId, handleNodeClick, question = '' }: IProps) => {
    const { chatIsOver } = useContext(MindsearchContext);
    const [showGraph, setShowGraph] = useState(true);
    // 整体的渲染树
    const [renderData, setRenderData] = useState<any[]>([]);

    const toggleGraph = () => {
        setShowGraph(!showGraph);
    };

    const handleClick = (node: string) => {
        handleNodeClick(node, listId);
    };

    const generateMapData = (arr: []) => {
        const tempArr: any[] = arr.map((item: { name: string; id: number; state: number }) => {
            if (item.name && adjList[item.name]) {
                return {
                    ...item,
                    children: generateMapData(adjList?.[item.name]),
                };
            }
        });
        return tempArr;
    };

    const convertTreeData = () => {
        const root: any = {
            id: 0,
            name: '原始问题',
            state: 3,
            children: generateMapData(adjList?.root || []),
        };

        // 返回包含根节点的数组
        // console.log('renderData-----------', [root]);
        setRenderData([root]);
    };

    useEffect(() => {
        if (!adjList || Object.keys(adjList)?.length < 2) {
            setRenderData([]);
            return;
        };
        convertTreeData();
    }, [adjList]);

    return <div className={styles.answer}>
        <div className={styles.avatar}>
            <img src={MindSearchAvatar} alt="mindsearch-avatar" />
        </div>
        <div className={styles.reaponseAarea}>
            {
                showGraph ? <>
                    {
                        (renderData?.length > 0) && <div className={styles.inner}>
                            <MindMapGraph
                                listId={listId}
                                isEnd={isEnd}
                                renderData={renderData}
                                handleNodeClick={handleClick}
                                key={`graph-${question}`}
                            />
                            <div className={classNames(styles.graphIcon, styles.closeGraph)} onClick={toggleGraph}>
                                收起
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66667 2C2.29848 2 2 2.29848 2 2.66667V6C2 6.36819 2.29848 6.66667 2.66667 6.66667C3.03486 6.66667 3.33333 6.36819 3.33333 6V3.33333H6C6.36819 3.33333 6.66667 3.03486 6.66667 2.66667C6.66667 2.29848 6.36819 2 6 2H2.66667ZM13.3333 14C13.7015 14 14 13.7015 14 13.3333V10C14 9.63181 13.7015 9.33333 13.3333 9.33333C12.9651 9.33333 12.6667 9.63181 12.6667 10V12.6667H10C9.63181 12.6667 9.33333 12.9651 9.33333 13.3333C9.33333 13.7015 9.63181 14 10 14H13.3333ZM6.25519 9.38392C6.17658 9.35132 6.09039 9.33333 6 9.33333H2.66667C2.29848 9.33333 2 9.63181 2 10C2 10.3682 2.29848 10.6667 2.66667 10.6667H4.39052L2.19526 12.8619C1.93491 13.1223 1.93491 13.5444 2.19526 13.8047C2.45561 14.0651 2.87772 14.0651 3.13807 13.8047L5.33333 11.6095L5.33333 13.3333C5.33333 13.7015 5.63181 14 6 14C6.36819 14 6.66667 13.7015 6.66667 13.3333V10C6.66667 9.81812 6.59383 9.65325 6.47574 9.53297L6.46703 9.52426C6.40414 9.46249 6.33203 9.41571 6.25519 9.38392ZM10.6667 2.66667C10.6667 2.29848 10.3682 2 10 2C9.63181 2 9.33333 2.29848 9.33333 2.66667V6C9.33333 6.36819 9.63181 6.66667 10 6.66667L13.3333 6.66667C13.7015 6.66667 14 6.36819 14 6C14 5.63181 13.7015 5.33333 13.3333 5.33333L11.6095 5.33333L13.8047 3.13807C14.0651 2.87772 14.0651 2.45561 13.8047 2.19526C13.5444 1.93491 13.1223 1.93491 12.8619 2.19526L10.6667 4.39053V2.66667Z" fill="#121316" fillOpacity="0.8" />
                                </svg>
                            </div>
                        </div>
                    }
                </>
                    : <div className={classNames(styles.graphIcon, styles.showGraph)} onClick={toggleGraph}>
                        查看思考节点
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.66667 2C2.29848 2 2 2.29848 2 2.66667V6C2 6.36819 2.29848 6.66667 2.66667 6.66667C3.03486 6.66667 3.33333 6.36819 3.33333 6V3.33333H6C6.36819 3.33333 6.66667 3.03486 6.66667 2.66667C6.66667 2.29848 6.36819 2 6 2H2.66667ZM13.3333 14C13.7015 14 14 13.7015 14 13.3333V10C14 9.63181 13.7015 9.33333 13.3333 9.33333C12.9651 9.33333 12.6667 9.63181 12.6667 10V12.6667H10C9.63181 12.6667 9.33333 12.9651 9.33333 13.3333C9.33333 13.7015 9.63181 14 10 14H13.3333ZM6.25519 9.38392C6.17658 9.35132 6.09039 9.33333 6 9.33333H2.66667C2.29848 9.33333 2 9.63181 2 10C2 10.3682 2.29848 10.6667 2.66667 10.6667H4.39052L2.19526 12.8619C1.93491 13.1223 1.93491 13.5444 2.19526 13.8047C2.45561 14.0651 2.87772 14.0651 3.13807 13.8047L5.33333 11.6095L5.33333 13.3333C5.33333 13.7015 5.63181 14 6 14C6.36819 14 6.66667 13.7015 6.66667 13.3333V10C6.66667 9.81812 6.59383 9.65325 6.47574 9.53297L6.46703 9.52426C6.40414 9.46249 6.33203 9.41571 6.25519 9.38392ZM10.6667 2.66667C10.6667 2.29848 10.3682 2 10 2C9.63181 2 9.33333 2.29848 9.33333 2.66667V6C9.33333 6.36819 9.63181 6.66667 10 6.66667L13.3333 6.66667C13.7015 6.66667 14 6.36819 14 6C14 5.63181 13.7015 5.33333 13.3333 5.33333L11.6095 5.33333L13.8047 3.13807C14.0651 2.87772 14.0651 2.45561 13.8047 2.19526C13.5444 1.93491 13.1223 1.93491 12.8619 2.19526L10.6667 4.39053V2.66667Z" fill="#121316" fillOpacity="0.8" />
                        </svg>
                    </div>
            }

            {response && (
                <div className={styles.response}>
                    <CustomMarkdown source={response} refList={chatIsOver ? refList : null} quoType="merge" />
                </div>
            )}
        </div>
    </div>
};

export default Answer;
