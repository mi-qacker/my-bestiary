import {yupResolver} from '@hookform/resolvers/yup';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {auth} from 'shared/lib/firebase';
import {Button} from 'shared/ui/button';
import {FormField} from 'shared/ui/form-field';
import * as Yup from 'yup';
import styles from '../Form.module.scss';

interface LoginFormValues {
    email: string;
    password: string;
}

const schema = Yup.object({
    email: Yup.string()
        .email('Email имеет неверный формат')
        .required('Обязательно для заполнения'),
    password: Yup.string()
        .required('Обязательно для заполнения')
        .min(8, 'Минимальная длина пароля 8 символов'),
});

export const LoginForm = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<LoginFormValues>({resolver: yupResolver(schema)});
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<LoginFormValues> = ({email, password}) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password).then(user => {
            // TODO реализовать логику сохранения пользователя
            console.log(user);
            navigate('/', {replace: true});
        }).catch(error => {
            setError(error.code);
            setLoading(false);
        });
    };

    const showRegistrationError = () => {
        if (!error)
            return null;
        switch (error) {
            case 'auth/user-not-found':
                return 'Пользователя с таким Email не существует';
            case 'auth/wrong-password':
                return 'Неверный пароль';
            default:
                return `Неизвестная ошибка ${error}`;
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>Вход в мой бестиарий</h2>
            </div>
            <div className={styles.error}>{showRegistrationError()}</div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.fields}>
                    <FormField label="Email" id="email" type="text" register={register} error={errors.email}/>
                    <FormField label="Пароль" id="password" type="password" register={register}
                               error={errors.password}/>
                </div>
                <div className={styles.button}>
                    <Button text="Войти" size="big" disabled={loading}/>
                </div>
            </form>
        </div>
    );
};