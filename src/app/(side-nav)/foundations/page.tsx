import styles from '@/styles/markdown.module.scss';
import Content from './content.md';

import { MetaCards } from '@/components/MetaCards';
import { fetchDirectoryMeta } from '../action';

export default async function Index() {
  const metaInfo = await fetchDirectoryMeta('foundations');

  return (
    <div className={styles.container}>
      <Content />
      <div className={styles.codeBlocks}>
        <MetaCards metaInfo={metaInfo} itemMaxWidth='100%' />
      </div>
    </div>
  );
}
