import styles from "./ListPage.module.scss";

import {ListObjects} from "features/list-objects";
import {ObjectImage} from "features/object-image";
import {ObjectInfo} from "features/object-info";
import classNames from "classnames";

export const ListPage = () => {
    return (
        <div className={styles.page}>
            <div className={classNames(styles.item, styles.list)}>
                <ListObjects/>
            </div>
            <div className={classNames(styles.item, styles.image)}>
                <ObjectImage/>
            </div>
            <div className={classNames(styles.item, styles.info)}>
                <ObjectInfo/>
            </div>
        </div>
    );
};
