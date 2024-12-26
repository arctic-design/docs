import styles from './page.module.scss';
import { Examples } from '@/components/Examples/Examples';

export default function Page() {
  return (
    <div className={styles.container}>
      <Examples />
    </div>
  );
}
