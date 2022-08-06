import styles from 'pages/bestiary-list/ui/list-item/ListItem.module.scss';

interface ListItemProps {
    name: string;
}

export const ListItem = (props: ListItemProps) => {
    return (
        <div className={styles.item}>
            <span>{props.name}</span>
        </div>
    );
};