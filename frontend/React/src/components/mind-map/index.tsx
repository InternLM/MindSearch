import styles from './index.module.less';
import { useState, useEffect } from 'react';
import MindMapItem from '../mind-map-item';

const MindMapGraph = (props: any) => {
  const { isEnd, renderData, handleHistory } = props;
  const [showEndNode, setShowEndNode] = useState(false);
  const [mapWidth, setMapWidth] = useState(0);
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
  const generateEndStyle = () => {
    // 获取所有class为endline的div元素  
    const endlineDivs = document.getElementsByClassName('endline');
    const mindMap = document.getElementById("mindMap");
    // 确保至少有两个元素  
    if (endlineDivs.length >= 2 && mindMap) {
      // 获取第一个和最后一个元素的边界框（bounding rectangle）  
      const firstRect = endlineDivs[0].getBoundingClientRect();
      const lastRect = endlineDivs[endlineDivs.length - 1].getBoundingClientRect();
      const mindMapRect = mindMap?.getBoundingClientRect();
      // 计算y值的差值  
      const yDiff = lastRect.top - firstRect.top;
      // const top = firstRect.top - mindMapRect.top;
      // 如果需要包含元素的完整高度（不仅仅是顶部位置），可以加上元素的高度  
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

  useEffect(() => {
    setMapWidth(generateWidth());
  }, [renderData]);

  useEffect(() => {
    if (!isEnd) return;
    setTimeout(() => {
      setShowEndNode(true);
    }, 300);
  }, [isEnd]);

  return <div className={styles.mapArea}>
    <ul className={styles.mindmap} id="mindMap" style={isEnd ? { width: mapWidth, overflow: "hidden" } : {}}>
      {renderData.map((item: any) => (
        <MindMapItem key={item.name} item={item} isEnd={isEnd} selectNode={handleHistory} />
      ))}
      {showEndNode &&
        <div className={styles.end} style={generateEndStyle()}>
          <div className={styles.node}>
            <article>最终回复</article>
          </div>
        </div>
      }
    </ul>
  </div>
};

export default MindMapGraph;