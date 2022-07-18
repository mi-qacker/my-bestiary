import styles from './ListObjects.module.scss';
import { ListItem } from './ui/list-item';

export const ListObjects = () => {
	return (
		<ul className={styles.list}>
			<ListItem />
			<ListItem />
			<ListItem />
		</ul>
	);
};
