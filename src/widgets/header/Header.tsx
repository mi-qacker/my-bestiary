import {signOut} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Link, useLocation} from 'react-router-dom';
import {auth} from 'shared/lib/firebase';
import {Button} from 'shared/ui/button';
import styles from './Header.module.scss';

export const Header = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    const handleLogout = async () => {
        await signOut(auth);
    };

    const renderLastLink = () => {
        switch (location.pathname) {
            case '/sign-in':
                return (
                    <Link to="/sign-up" className={styles.link}>
                        Регистрация
                    </Link>
                );
            case '/sign-up':
                return (
                    <Link to="/sign-in" className={styles.link}>
                        Войти
                    </Link>
                );
        }
        if (user)
            return (
                <div className={styles.user}>
                    <span>{user.email}</span>
                    <Button text="Выйти" onButtonClick={handleLogout} />
                </div>
            );
        return null;
    };

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.link}>
                Бестиарий
            </Link>
            {renderLastLink()}
        </div>
    );
};
