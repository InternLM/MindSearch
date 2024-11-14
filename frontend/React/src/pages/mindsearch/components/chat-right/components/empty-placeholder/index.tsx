import styles from './index.module.less';
import EmptyRightChatImg from '../../../../assets/empty-chat-right.svg';

const EmptyPlaceHolder = () => {
    return <>
        <div className={styles.emptyDiv}>
            <div className={styles.pic}>
                <img src={EmptyRightChatImg} />
            </div>
            <p>
                请在节点图中选择节点后查看哦~
            </p>
        </div>
    </>
};

export default EmptyPlaceHolder;