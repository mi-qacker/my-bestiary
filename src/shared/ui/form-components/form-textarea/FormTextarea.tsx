import classNames from 'classnames';
import {FieldError, UseFormRegister} from 'react-hook-form';
import styles from '../Forms.module.scss';

interface FormTextareaProps {
    id: string;
    label: string;
    register: UseFormRegister<any>;
    error?: FieldError;
}

export const FormTextarea = (props: FormTextareaProps) => {
    const {id, label, register, error} = props;
    const textareaClass = classNames(styles.field, styles.textarea);
    return (
        <div className={textareaClass}>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} placeholder={label} {...register(id)} />
            <div className={styles.error}>{error ? error.message : null}</div>
        </div>
    );
};