import { message } from 'antd';
import styles from './index.module.less';
import classNames from 'classnames';

// 递归组件用于渲染mindMap中的节点  
const MindMapItem = ({ item, isEnd, selectNode }: any) => {
  // 递归渲染子节点  
  const renderChildren = () => {
    if (item.children && item.children.length > 0) {
      return (
        <ul className={item.children.length === 1 ? styles.onlyone : ''}>
          {item.children.map((child: any) => (
            <MindMapItem key={child.name} item={child} isEnd={isEnd} selectNode={selectNode} />
          ))}
        </ul>
      );
    }
    return null;
  };

  const handleClick = () => {
    if (item.state !== 3) {
      message.warning('思考中，请稍后');
      return;
    }
    selectNode(item.name);
  };

  return (
    <li>
      <article
        onClick={handleClick}
        className={
          classNames(
            item.state === 1 ? styles.loading : item.state === 2 ? styles.disabled : item.state === 3 ? styles.finished : "",
            item.id === 0 ? styles.init : ''
          )}>
        <span>{item.name}</span>
        {item.state === 1 && <div className={styles.looping}></div>}
        {item.id !== 0 && <div className={styles.finishDot}></div>}
      </article>
      {item.children.length > 0 && renderChildren()}
      {
        isEnd && item.children?.length === 0 && <div className={classNames(styles.endLine, "endline")}></div>
      }
    </li>
  );
};

export default MindMapItem;