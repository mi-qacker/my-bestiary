import classNames from 'classnames/bind';
import {ObjectInfo} from 'entities/object';
import {Layout} from 'shared/ui/layout';
import {Header} from 'widgets/header';
import styles from './BestiaryListPage.module.scss';
import {ObjectList} from './ui/objects-list/ObjectList';

export const BestiaryListPage = () => {
    return (
        <Layout>
            <Header/>
            <div className={styles.page}>
                <div className={classNames(styles.list, styles.block)}>
                    <ObjectList/>
                </div>
                <div className={classNames(styles.info, styles.block)}>
                    <ObjectInfo/>
                </div>
            </div>
        </Layout>
    );
};