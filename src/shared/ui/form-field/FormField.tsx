import {HTMLInputTypeAttribute} from 'react';
import {FieldError, RegisterOptions, UseFormRegister} from 'react-hook-form';
import styles from './FormField.module.scss';

interface FormFieldProps {
    id: string;
    label: string;
    required?: boolean;
    email?: boolean;
    minLength?: number;
    register: UseFormRegister<any>;
    error?: FieldError;
    type: HTMLInputTypeAttribute;
}

export const FormField = (props: FormFieldProps) => {
    const {type, id, label, register, required, email, minLength, error} = props;

    const showError = (error: FieldError) => {
        switch (error.type) {
            case 'required':
                return 'Поля обязательно для заполнения';
            case 'minLength':
                return `Минимальная длина ${minLength} символов`;
            case 'pattern':
                return 'Введенное значение невалидно';
        }
    };

    const options: RegisterOptions = {
        required,
        pattern: email ? /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i : undefined,
        minLength: minLength,
    };
    return (
        <div className={styles.field}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={label} {...register(id, options)}/>
            <div className={styles.error}>{error ? showError(error) : null}</div>
        </div>
    );
};