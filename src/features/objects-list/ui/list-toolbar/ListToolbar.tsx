import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'shared/ui/button';
import styles from './ListToolbar.module.scss';

export const ListToolbar = () => {
    let navigate = useNavigate();
    const handleClick = useCallback(() => {
        navigate('/new');
    }, [navigate]);

    return (
        <div className={styles.toolbar}>
            <span>Список существ</span>
            <Button text={'Добавить'} onButtonClick={handleClick}/>
        </div>
    );
};