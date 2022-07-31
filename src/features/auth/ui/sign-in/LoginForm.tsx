import {SubmitHandler, useForm} from 'react-hook-form';
import {Button} from 'shared/ui/button';
import {FormField} from 'shared/ui/form-field';
import styles from '../Form.module.scss';

interface LoginFormValues {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<LoginFormValues>();
    const onSubmit: SubmitHandler<LoginFormValues> = data => console.log(data);

    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>Вход в мой бестиарий</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.fields}>
                    <FormField label="Email" id="email" type="text" register={register} error={errors.email} required/>
                    <FormField label="Пароль" id="password" type="password" register={register}
                               error={errors.password} required/>
                </div>
                <div className={styles.button}>
                    <Button text="Войти" size="big"/>
                </div>
            </form>
        </div>
    );
};