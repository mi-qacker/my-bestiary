import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    size?: 'normal' | 'big';
    disabled?: boolean;
    onButtonClick?: () => void;
}

export const Button = ({text, onButtonClick, size = 'normal', disabled = false}: ButtonProps) => {
    const buttonClass = classNames(styles.button, {[styles.big]: size === 'big'}, {[styles.normal]: size === 'normal'});
    const handleClick = () => {
        if (onButtonClick) onButtonClick();
    };

    return (
        <button onClick={handleClick} className={buttonClass} disabled={disabled}>
            {text}
        </button>
    );
};
