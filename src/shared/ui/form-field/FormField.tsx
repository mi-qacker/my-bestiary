import {HTMLInputTypeAttribute} from 'react';
import {FieldError, UseFormRegister} from 'react-hook-form';
import styles from './FormField.module.scss';

interface FormFieldProps {
    id: string;
    label: string;
    register: UseFormRegister<any>;
    error?: FieldError;
    type: HTMLInputTypeAttribute;
}

export const FormField = (props: FormFieldProps) => {
    const {type, id, label, register, error} = props;
    return (
        <div className={styles.field}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={label} {...register(id)}/>
            <div className={styles.error}>{error ? error.message : null}</div>
        </div>
    );
};