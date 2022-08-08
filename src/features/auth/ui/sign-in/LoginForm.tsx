import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import {useLoginUser} from 'shared/api/firebase';
import {Button} from 'shared/ui/button';
import {FormField} from 'shared/ui/form-field';
import * as Yup from 'yup';
import styles from '../Form.module.scss';

interface LoginFormValues {
    email: string;
    password: string;
}

const schema = Yup.object({
    email: Yup.string().email('Email имеет неверный формат').required('Обязательно для заполнения'),
    password: Yup.string().required('Обязательно для заполнения').min(8, 'Минимальная длина пароля 8 символов'),
});

export const LoginForm = () => {
    const {login, getErrorMessage, loading, user} = useLoginUser();
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<LoginFormValues>({resolver: yupResolver(schema)});

    const onSubmit: SubmitHandler<LoginFormValues> = async ({email, password}) => {
        await login(email, password);
    };

    if (user) return <Navigate to="/" />;

    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>Вход в мой бестиарий</h2>
            </div>
            <div className={styles.error}>{getErrorMessage()}</div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.fields}>
                    <FormField label="Email" id="email" type="text" register={register} error={errors.email} />
                    <FormField
                        label="Пароль"
                        id="password"
                        type="password"
                        register={register}
                        error={errors.password}
                    />
                </div>
                <div className={styles.button}>
                    <Button text="Войти" size="big" disabled={loading} />
                </div>
            </form>
        </div>
    );
};
