import {LoginForm} from 'features/auth';
import {Layout} from 'shared/ui/layout';
import {Header} from 'widgets/header';
import styles from './SignInPage.module.scss';

export const SignInPage = () => {
    return (
        <Layout>
            <Header page="sign-in"/>
            <div className={styles.page}>
                <div className={styles.wrapper}>
                    <LoginForm/>
                </div>
            </div>
        </Layout>
    );
};