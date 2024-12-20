import { MetaType } from '@/types';
import Link from 'next/link';
import styles from './MetaCards.module.scss';

export async function MetaCards({
  metaInfo,
  itemMaxWidth,
}: {
  metaInfo: (MetaType | undefined)[];
  itemMaxWidth?: number | string;
}) {
  return (
    <div className={styles.container}>
      {metaInfo
        .filter((item) => item?.component)
        .map((meta) => {
          const DemoComponent = meta?.component;

          return (
            <div
              className={styles.item}
              style={{ maxWidth: itemMaxWidth }}
              key={meta?.title}
            >
              <div className={styles.componentDisplay}>
                {DemoComponent && <DemoComponent />}
              </div>

              <div className={styles.title}>{meta?.title}</div>
              <div className={styles.subTitle}>{meta?.subTitle}</div>

              <Link key={meta?.title} href={`/${meta?.slug}`}>
                See live examples
              </Link>
            </div>
          );
        })}
      <div className={styles.item} style={{ maxWidth: itemMaxWidth }}>
        <div
          className={styles.componentDisplay}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            textAlign: 'center',
          }}
        >
          <div className={styles.subTitle} style={{ fontSize: 18 }}>
            View component docs to see more live examples
          </div>
          <Link
            href={`/components/accordion`}
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            View docs
          </Link>
        </div>
      </div>
    </div>
  );
}
