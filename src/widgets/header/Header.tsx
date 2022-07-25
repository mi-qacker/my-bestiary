import {Link} from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.link}>Бестиарий</Link>
            <Link to="/sign-in" className={styles.link}>Профиль</Link>
        </div>
    );
};