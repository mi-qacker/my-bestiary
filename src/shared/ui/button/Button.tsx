import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    onButtonClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    const handleClick = () => {
        if (props.onButtonClick)
            props.onButtonClick();
    };
    
    return (
        <button onClick={handleClick} className={styles.button}>
            {props.text}
        </button>
    );
};