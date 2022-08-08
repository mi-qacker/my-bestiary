import styles from 'pages/bestiary-list/ui/objects-list/ObjectList.module.scss';
import {ListItem} from '../list-item/ListItem';
import {ListToolbar} from '../list-toolbar/ListToolbar';

export const ObjectList = () => {
    return (
        <>
            <ListToolbar />
            <div className={styles.list}>
                <ListItem name={'Черт'} />
                <ListItem name={'Циклоп'} />
                <ListItem name={'Леший'} />
            </div>
        </>
    );
};
