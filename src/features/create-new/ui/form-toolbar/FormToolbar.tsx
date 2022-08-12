import {Button} from 'shared/ui/button';
import styles from 'features/create-new/ui/form-toolbar/FormToolbar.module.scss';

export const FormToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <span>Создание нового существа</span>
            <Button text="Создать" type="submit" />
        </div>
    );
};