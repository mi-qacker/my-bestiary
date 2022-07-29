import {RegistrationForm} from 'features/auth';
import {Layout} from 'shared/ui/layout';
import {Header} from 'widgets/header';
import styles from './SignUpPage.module.scss';

export const SignUpPage = () => {
    return (
        <Layout>
            <Header page="sign-up"/>
            <div className={styles.page}>
                <div className={styles.wrapper}>
                    <RegistrationForm/>
                </div>
            </div>
        </Layout>
    );
};