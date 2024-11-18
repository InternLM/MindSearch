import styles from './index.module.less';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import { replaceStr } from '@/utils/tools';
import MindMapGraph from '../mind-map';

interface IProps {
  renderData: any;
  isEnd: boolean;
  response: string;
  draft: string;
  chatIsOver: boolean;
  handleHistory: (info: any) => void;
};

const Answer = ({ renderData, isEnd, chatIsOver, response = '', draft = '', handleHistory }: IProps) => {
  return <div className={styles.answer}>
    {
      renderData?.length > 0 ? <div className={styles.inner}>
        <MindMapGraph isEnd={isEnd} renderData={renderData} handleHistory={handleHistory} />
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
};

export default Answer;