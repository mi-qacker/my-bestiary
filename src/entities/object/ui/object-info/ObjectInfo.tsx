import {ObjectModel} from 'entities/object/model/Object.model';
import {onValue, ref} from 'firebase/database';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {db} from 'shared/lib/firebase';
import {Button} from 'shared/ui/button';
import {LoadingSpinner} from 'shared/ui/loading-spinner';
import styles from './ObjectInfo.module.scss';

export const ObjectInfo = () => {
    const {userId, objectId} = useParams();

    const [object, setObject] = useState<ObjectModel | null>(null);

    useEffect(() => {
        const objectListRef = ref(db, `objects/${userId}/${objectId}`);
        onValue(objectListRef, (snapshot) => {
            const object: ObjectModel = snapshot.val();
            setObject(object);
        });
    }, [userId, objectId]);

    if (!object) return <LoadingSpinner />;

    return (
        <div className={styles.page}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.toolbar}>
                    <span>{object.name}</span>
                    <Button text={'Редактировать'} />
                </div>
                <div className={styles.describe}>
                    <p>{object.description}</p>
                </div>
            </div>
        </div>
    );
};
