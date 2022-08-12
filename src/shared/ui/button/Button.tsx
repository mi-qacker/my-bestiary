import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    size?: 'normal' | 'big';
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    onButtonClick?: () => void;
}

export const Button = ({text, onButtonClick, size = 'normal', disabled = false, type}: ButtonProps) => {
    const buttonClass = classNames(styles.button, {[styles.big]: size === 'big'}, {[styles.normal]: size === 'normal'});
    const handleClick = () => {
        if (onButtonClick) onButtonClick();
    };

    return (
        <button onClick={handleClick} className={buttonClass} disabled={disabled} type={type}>
            {text}
        </button>
    );
};
