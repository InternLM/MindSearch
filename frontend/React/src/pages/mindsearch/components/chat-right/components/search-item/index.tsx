import classNames from 'classnames';
import styles from './index.module.less';

interface ISearchItemProps {
    item: any;
}

const SearchItem = ({ item }: ISearchItemProps) => {
    const openLink = (url: string) => {
        window.open(url);
    };
    return (
        <div
            className={classNames(styles.searchItem, item.highLight ? styles.highLight : '')}
            key={`search-item-${item.url}`}
            onClick={() => {
                openLink(item.url);
            }}
        >
            <div className={styles.num}>{item.id}</div>
            <div className={styles.inner}>
                <p className={styles.url}>{item?.url}</p>
                <p className={styles.title}>{item?.title}</p>
                <p className={styles.summ}>{item?.summ}</p>
            </div>
        </div>
    );
};

export default SearchItem;
