import classNames from 'classnames';
import {CreateNewForm} from 'features/create-new';
import styles from './CreateNewPage.module.scss';

export const CreateNewPage = () => {
    return (
        <div className={styles.page}>
            <div className={classNames(styles.form, styles.block)}>
                <CreateNewForm />
            </div>
            <div className={classNames(styles.image, styles.block)}>
                <span>Image</span>
            </div>
        </div>
    );
};
