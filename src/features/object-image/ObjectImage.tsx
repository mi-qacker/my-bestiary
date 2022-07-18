import styles from './ObjectImage.module.scss';

export const ObjectImage = () => {
	return (
		<div className={styles.image}>
			<img src='/object.jpg' alt='object' />
		</div>
	);
};
