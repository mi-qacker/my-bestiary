import {ListItem} from 'features/objects-list/ui/list-item/ListItem';
import {ListToolbar} from 'features/objects-list/ui/list-toolbar/ListToolbar';
import styles from './ObjectList.module.scss';

export const ObjectList = () => {
    return (
        <>
            <ListToolbar/>
            <div className={styles.list}>
                <ListItem name={'Черт'}/>
                <ListItem name={'Циклоп'}/>
                <ListItem name={'Леший'}/>
            </div>
        </>
    );
};