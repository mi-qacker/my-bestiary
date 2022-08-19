import classNames from 'classnames/bind';
import {ObjectModel} from 'entities/object';
import {onValue, ref} from 'firebase/database';
import {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {db} from 'shared/lib/firebase';
import styles from './BestiaryListPage.module.scss';
import {ObjectList} from './ui/objects-list/ObjectList';

export const BestiaryListPage = () => {
    const {userId, objectId} = useParams();
    const [objects, setObjects] = useState<ObjectModel[]>([]);

    useEffect(() => {
        const objectListRef = ref(db, `objects/${userId}`);
        onValue(objectListRef, (snapshot) => {
            const objects: ObjectModel[] = [];
            snapshot.forEach((childSnapshot) => {
                objects.push({...childSnapshot.val(), id: childSnapshot.key});
            });
            setObjects(objects);
        });
    }, [userId]);

    return (
        <div className={styles.page}>
            <div className={classNames(styles.list, styles.block)}>
                <ObjectList objects={objects} />
            </div>
            <div className={classNames(styles.info, styles.block)}>{objectId ? <Outlet /> : <NonSelect />}</div>
        </div>
    );
};

const NonSelect = () => {
    return (
        <div className={styles.nonSelect}>
            <span>Выбери героя из списка</span>
        </div>
    );
};