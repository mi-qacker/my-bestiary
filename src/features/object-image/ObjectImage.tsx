import styles from './ObjectImage.module.scss';

export const ObjectImage = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image}
                 src='/object.jpg'
                 alt='test'/>
        </div>
    );
};
