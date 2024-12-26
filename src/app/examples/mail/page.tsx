import styles from './page.module.scss';

import { Mailbox } from './Mailbox';

export default function Page() {
  return (
    <div className={styles.container}>
      <Mailbox />
    </div>
  );
}
