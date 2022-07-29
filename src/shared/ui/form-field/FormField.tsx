import {HTMLInputTypeAttribute} from 'react';
import styles from './FormField.module.scss';

interface FormFieldProps {
    label: string;
    id: string;
    type: HTMLInputTypeAttribute;
}

export const FormField = (props: FormFieldProps) => {
    const {type, id, label} = props;
    return (
        <div className={styles.field}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={label}></input>
        </div>
    );
};