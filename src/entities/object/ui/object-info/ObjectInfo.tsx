import {Button} from 'shared/ui/button';
import styles from './ObjectInfo.module.scss';

export const ObjectInfo = () => {
    return (
        <div className={styles.page}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.toolbar}>
                    <span>Черт</span>
                    <Button text={'Редактировать'}/>
                </div>
                <div className={styles.describe}>
                    <p>
                        Является родственным с бесами видом и очень похож на него: огромное существо, передвигающееся на
                        четырех конечностях, имеет огромные рога, третий глаз во лбу. Передние лапы черта четырехпалые и
                        заканчиваются короткими когтями, а один из пальцев является прибылым, задние же конечности
                        оканчиваются копытами. Голова вытянутая, большой рот, полный острых зубов с длинными выдающимися
                        клыками на обеих челюстях. Покрытая пятнами кожа и недлинная шерсть, растущая вокруг головы, в
                        паху и на задних лапах, может носить разный окрас: от бурого и желтоватого до серого и светлых
                        оттенков.
                        Черт меньше беса по размерам, а также отличается формой рогов — они у него не ветвистые, оленьи,
                        а завитые, бараньи. Эти существа предпочитают обитать в лесных чащобах или неглубоких пещерах,
                        яростно охраняют свою территорию и свирепо расправляются с любым конкурентом. Черты всеядны и не
                        брезгуют ни мясом, ни растительной пищей.
                    </p>
                </div>
            </div>
        </div>
    );
};