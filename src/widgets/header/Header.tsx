import {Link} from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
    page?: 'sign-in' | 'sign-up' | 'user';
}

export const Header = ({page = 'user'}: HeaderProps) => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.link}>Бестиарий</Link>
            {page === 'user' ? <Link to="/user" className={styles.link}>Профиль</Link> : null}
            {page === 'sign-in' ? <Link to="/sign-up" className={styles.link}>Регистрация</Link> : null}
            {page === 'sign-up' ? <Link to="/sign-in" className={styles.link}>Войти</Link> : null}
        </div>
    );
};