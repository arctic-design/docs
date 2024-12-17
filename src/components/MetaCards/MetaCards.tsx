import { MetaType } from '@/types';
import Link from 'next/link';
import styles from './MetaCards.module.scss';
import { MagicBox } from '../MagicBox';

export function MetaCards({
  metaInfo,
  itemMaxWidth,
}: {
  metaInfo: (MetaType | undefined)[];
  itemMaxWidth?: number | string;
}) {
  return (
    <div className={styles.container}>
      {metaInfo.map((meta) => (
        <Link key={meta?.title} href={`/${meta?.slug}`}>
          <MagicBox className={styles.item} style={{ maxWidth: itemMaxWidth }}>
            <div className={styles.title}>{meta?.title}</div>
            <div className={styles.subTitle}>{meta?.subTitle}</div>
          </MagicBox>
        </Link>
      ))}
    </div>
  );
}
