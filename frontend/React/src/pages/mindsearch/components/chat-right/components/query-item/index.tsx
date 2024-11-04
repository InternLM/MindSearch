import classNames from 'classnames';
import styles from './index.module.less';

interface IQueryItemProps {
    item: string;
}
const QueryItem = ({ item }: IQueryItemProps) => {
    return <div className={classNames(styles.queryItem, styles.fadeIn)}>{item}</div>;
};

export default QueryItem;
