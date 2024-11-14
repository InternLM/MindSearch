import { useEffect, useState, useRef, useMemo, useContext } from 'react';
import styles from './index.module.less';
import Answer from '../answer';

const SessionItem = ({ item, handleNodeClick, idx }: any) => {
    return <>
        <div className={styles.questionArea}>
            <div className={styles.avatar}></div>
            <div className={styles.question}>
                <span>{item.question}</span>
            </div>
        </div>
        <Answer
            key={`answer-item-${idx}`}
            listId={idx}
            response={item?.response || ''}
            refList={item?.responseRefList}
            isEnd={item?.isEnd || item?.chatIsOver || false}
            adjList={item.adjacency_list}
            handleNodeClick={handleNodeClick}
            question={item?.question}
        />
    </>
};

export default SessionItem;