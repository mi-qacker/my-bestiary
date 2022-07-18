import { ReactNode } from 'react';

import styles from './Wrapper.module.scss';

import { Navbar } from 'widgets/navbar';

interface IProps {
	children: ReactNode;
}

export const Wrapper = ({ children }: IProps) => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</div>
	);
};
