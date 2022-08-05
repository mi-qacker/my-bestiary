import {LoginForm} from 'features/auth';
import styles from './SignInPage.module.scss';

export const SignInPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <LoginForm/>
            </div>
        </div>
    );
};