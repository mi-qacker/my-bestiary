import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button} from 'shared/ui/button';
import {FormField} from 'shared/ui/form-field';
import * as Yup from 'yup';
import styles from '../Form.module.scss';

interface RegistrationFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = Yup.object({
    email: Yup.string()
        .email('Email имеет неверный формат')
        .required('Обязательно для заполнения'),
    password: Yup.string()
        .required('Обязательно для заполнения')
        .min(8, 'Минимальная длина пароля 8 символов'),
    confirmPassword: Yup.string()
        .required('Обязательно для заполнения')
        .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
});

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<RegistrationFormValues>({resolver: yupResolver(schema)});
    const onSubmit: SubmitHandler<RegistrationFormValues> = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>Регистрация бестиария</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.fields}>
                    <FormField label="Email" id="email" type="text" register={register} error={errors.email}/>
                    <FormField label="Пароль" id="password" type="password" register={register}
                               error={errors.password}/>
                    <FormField label="Повторите пароль" id="confirmPassword" type="password" register={register}
                               error={errors.confirmPassword}/>
                </div>
                <div className={styles.button}>
                    <Button text="Регистрация" size="big"/>
                </div>
            </form>
        </div>
    );
};