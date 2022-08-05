import {RegistrationForm} from 'features/auth';
import styles from './SignUpPage.module.scss';

export const SignUpPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <RegistrationForm/>
            </div>
        </div>
    );
};