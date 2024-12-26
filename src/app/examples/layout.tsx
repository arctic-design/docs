import { ExamplesNavbar } from '@/components/ExamplesNavbar';
import styles from './layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.examples}>
      <ExamplesNavbar />
      <div className={styles.examplesWrapper}>{children}</div>
    </section>
  );
}
