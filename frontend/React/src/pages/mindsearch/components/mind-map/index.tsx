import styles from './index.module.less';
import { useState, useEffect } from 'react';
import MindMapItem from '../mind-map-item';

interface IEndStyle {
  top: string;
  height: number;
}
const MindMapGraph = (props: any) => {
  const { isEnd, renderData, handleNodeClick } = props;
  const [mapId] = useState(Date.now());
  const [showEndNode, setShowEndNode] = useState(false);
  const [mapWidth, setMapWidth] = useState(0);
  const [endStyle, setEndStyle] = useState<IEndStyle>({
    top: '50%',
    height: 0,
  });
  const generateWidth = () => {
    const articles = document.getElementById(`mindMap-${mapId}`)?.querySelectorAll('article');
    // 确保至少有两个元素
    if (articles?.length) {
      let maxRight = 0;
      articles.forEach((item, index) => {
        if (item.getBoundingClientRect().right > maxRight) {
          maxRight = item.getBoundingClientRect().right;
        }
      });
      const firstArticle = articles[0].getBoundingClientRect();
      if (maxRight - firstArticle.left + 200 > mapWidth) {
        return maxRight - firstArticle.left + 200;
      } else {
        return mapWidth;
      }
    } else {
      return 100;
    }
  };

  const generateEndStyle = () => {
    // 获取所有class为endline的div元素
    const mindMap = document.getElementById(`mindMap-${mapId}`);
    const endlineDivs = document.getElementById(`mindMap-${mapId}`)?.querySelectorAll('.endline') || [];
    // console.log('generateEndStyle-----', mapId, `mindMap-${mapId}`, document.getElementById(`mindMap-${mapId}`), mindMap, endlineDivs, endlineDivs?.length);
    // 确保至少有两个元素
    if (endlineDivs?.length >= 2 && mindMap) {
      // 获取第一个和最后一个元素的边界框（bounding rectangle）
      const firstRect = endlineDivs?.[0].getBoundingClientRect();
      const lastRect = endlineDivs?.[endlineDivs.length - 1].getBoundingClientRect();
      const mindMapRect = mindMap?.getBoundingClientRect();
      // 计算y值的差值
      const yDiff = lastRect.top - firstRect.top;
      // const top = firstRect.top - mindMapRect.top;
      // 如果需要包含元素的完整高度（不仅仅是顶部位置），可以加上元素的高度
      // const yDiffWithHeight = yDiff + (lastRect.height - firstRect.height);
      return {
        top: firstRect.top - mindMapRect.top,
        height: yDiff + 1,
      };
    } else {
      return {
        top: '50%',
        height: 0,
      };
    }
  };

  useEffect(() => {
    setMapWidth(generateWidth());
  }, [renderData.length]);

  useEffect(() => {
    if (!isEnd) return;
    setMapWidth(generateWidth());
    setTimeout(() => {
      setEndStyle(generateEndStyle() as IEndStyle);
      setShowEndNode(true);
    }, 200);
  }, [isEnd]);

  return (
    <div className={styles.mapArea}>
      <ul className={styles.mindmap} id={`mindMap-${mapId}`} style={isEnd ? { width: mapWidth, overflow: 'hidden' } : {}}>
        {renderData.map((item: any) => (
          <MindMapItem
            key={item.name}
            item={item}
            isEnd={isEnd}
            selectNode={handleNodeClick}
          />
        ))}
        {showEndNode && (
          <div className={styles.end} style={endStyle}>
            <div className={styles.node}>
              <article>最终回复</article>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MindMapGraph;
