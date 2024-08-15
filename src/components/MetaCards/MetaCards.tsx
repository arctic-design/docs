import { MetaType } from '@/types';
import Link from 'next/link';
import styles from './MetaCards.module.scss';

export function MetaCards({
  metaInfo,
}: {
  metaInfo: (MetaType | undefined)[];
}) {
  return (
    <div className={styles.container}>
      {metaInfo.map((meta) => (
        <Link key={meta?.title} href={`/components/${meta?.slug}`}>
          <div className={styles.item}>
            <div className={styles.title}>{meta?.title}</div>
            <div className={styles.subTitle}>{meta?.subTitle}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
