import styles from './index.module.less';
import classNames from 'classnames';
import { useEffect, useContext } from 'react';
import { MindsearchContext } from '../../provider/context';

// 递归组件用于渲染mindMap中的节点
const MindMapItem = ({ item, isEnd, selectNode }: any) => {
  const { activeNode, chatIsOver } = useContext(MindsearchContext);
  // console.log('[ms item------]', item, isEnd, currentNodeName)
  // 递归渲染子节点
  const renderChildren = () => {
    if (item?.children?.length > 0) {
      return (
        <ul className={item.children.length === 1 ? styles.onlyone : ''}>
          {item.children.map((child: any, idx: number) => (
            <MindMapItem key={`${child?.name}-${idx}`} item={child} isEnd={isEnd} selectNode={selectNode} />
          ))}
        </ul>
      );
    }
    return null;
  };

  const handleClick = () => {
    if (item?.state === 0 || (item?.name === '原始问题' || item?.name === '最终回复')) {
      return;
    }
    selectNode(item?.name);
  };

  return (
    <li>
      <article
        onClick={handleClick}
        className={classNames(
          item?.state === 1 ? styles.loading : item?.state === 2 ? styles.disabled : item?.state === 3 ? styles.finished : '',
          item?.id === 0 ? styles.init : '',
          !item?.name ? styles.emptyNode : '',
          item?.name && item?.name === activeNode ? styles.active : '',
          (isEnd && !chatIsOver) ? styles.forbidden : ''
        )}
      >
        <span>{item?.name}</span>
        {item?.state === 1 && <div className={styles.looping} />}
        {item?.id !== 0 && <div className={styles.finishDot} />}
        {item?.name && item?.name === activeNode ? <div className={styles.dot} /> : ''}
      </article>
      {item?.children?.length > 0 && renderChildren()}
      {isEnd && (item?.children?.length === 0 || !item?.children) && <div className={classNames(styles.endLine, 'endline')} />}
    </li>
  );
};

export default MindMapItem;
