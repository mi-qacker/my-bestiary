import {Header} from 'widgets/header';
import styles from './Layout.module.scss';

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Header />
            {props.children}
        </div>
    );
};
