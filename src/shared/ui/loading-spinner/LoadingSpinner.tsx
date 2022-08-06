import {ReactComponent as Spinner} from './spinner.svg';
import styles from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => {
    return <div className={styles.spinner}><Spinner/></div>;
};