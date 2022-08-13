import classNames from 'classnames/bind';
import {ObjectInfo, ObjectModel} from 'entities/object';
import {onValue, ref} from 'firebase/database';
import {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from 'shared/lib/firebase';
import styles from './BestiaryListPage.module.scss';
import {ObjectList} from './ui/objects-list/ObjectList';

export const BestiaryListPage = () => {
    const [user] = useAuthState(auth);
    const [objects, setObjects] = useState<ObjectModel[]>([]);
    useEffect(() => {
        if (!user) return;
        const objectListRef = ref(db, `objects/${user.uid}`);
        onValue(objectListRef, (snapshot) => {
            const objects: ObjectModel[] = [];
            snapshot.forEach((childSnapshot) => {
                objects.push({...childSnapshot.val(), id: childSnapshot.key});
            });
            console.log(objects);
            setObjects(objects);
        });
    }, [user]);

    return (
        <div className={styles.page}>
            <div className={classNames(styles.list, styles.block)}>
                <ObjectList objects={objects} />
            </div>
            <div className={classNames(styles.info, styles.block)}>
                <ObjectInfo />
            </div>
        </div>
    );
};
