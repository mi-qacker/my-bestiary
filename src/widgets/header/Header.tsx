import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <span className={styles.link}>Бестиарий</span>
            <span className={styles.link}>Профиль</span>
        </div>
    );
};