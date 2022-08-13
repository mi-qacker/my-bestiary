import {ObjectModel} from 'entities/object';
import styles from 'pages/bestiary-list/ui/objects-list/ObjectList.module.scss';
import {Link} from 'react-router-dom';
import {ListItem} from '../list-item/ListItem';
import {ListToolbar} from '../list-toolbar/ListToolbar';

interface ObjectListProps {
    objects: ObjectModel[];
}

export const ObjectList = ({objects}: ObjectListProps) => {
    const renderList = () => {
        return objects.map((object) => (
            <Link to={object.id} key={object.id}>
                <ListItem name={object.name} />
            </Link>
        ));
    };
    return (
        <>
            <ListToolbar />
            <div className={styles.list}>{renderList()}</div>
        </>
    );
};
