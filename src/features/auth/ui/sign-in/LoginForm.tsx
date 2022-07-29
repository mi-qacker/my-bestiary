import {Button} from 'shared/ui/button';
import {FormField} from 'shared/ui/form-field';
import styles from '../Form.module.scss';

export const LoginForm = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>Вход в мой бестиарий</h2>
            </div>
            <form className={styles.form}>
                <FormField label="Email" id="email" type="text"/>
                <FormField label="Пароль" id="password" type="password"/>
            </form>
            <div className={styles.button}>
                <Button text="Войти" size="big"/>
            </div>
        </div>
    );
};