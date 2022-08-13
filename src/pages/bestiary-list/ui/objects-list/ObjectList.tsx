import {ObjectModel} from 'entities/object';
import styles from 'pages/bestiary-list/ui/objects-list/ObjectList.module.scss';
import {ListItem} from '../list-item/ListItem';
import {ListToolbar} from '../list-toolbar/ListToolbar';

interface ObjectListProps {
    objects: ObjectModel[];
}

export const ObjectList = ({objects}: ObjectListProps) => {
    const renderList = () => {
        return objects.map((object) => <ListItem name={object.name} key={object.id} />);
    };
    return (
        <>
            <ListToolbar />
            <div className={styles.list}>{renderList()}</div>
        </>
    );
};
