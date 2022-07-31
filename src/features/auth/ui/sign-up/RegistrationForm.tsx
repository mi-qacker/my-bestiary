import {SubmitHandler, useForm} from 'react-hook-form';
import {Button} from 'shared/ui/button';
import {FormField} from 'shared/ui/form-field';
import styles from '../Form.module.scss';

interface RegistrationFormValues {
    email: string;
    password: string;
    repeatPassword: string;
}

export const RegistrationForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<RegistrationFormValues>();
    const onSubmit: SubmitHandler<RegistrationFormValues> = data => console.log(data);

    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>Регистрация бестиария</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.fields}>
                    <FormField label="Email" id="email" type="text" register={register} required email
                               error={errors.email}/>
                    <FormField label="Пароль" id="password" type="password" register={register} error={errors.password}
                               required minLength={8}/>
                    <FormField label="Повторите пароль" id="repeatPassword" type="password" register={register}
                               error={errors.repeatPassword} required minLength={8}/>
                </div>
                <div className={styles.button}>
                    <Button text="Регистрация" size="big"/>
                </div>
            </form>
        </div>
    );
};