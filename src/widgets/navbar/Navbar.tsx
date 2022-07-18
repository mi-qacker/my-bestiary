import styles from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<a href='/' className={styles.link}>
				БЕСТИАРИЙ
			</a>

			<a href='/' className={styles.link}>
				ПРОФИЛЬ
			</a>
		</nav>
	);
};
