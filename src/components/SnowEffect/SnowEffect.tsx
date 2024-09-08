import styles from './SnowEffect.module.scss';
export function SnowEffect({ id = 'snow-effect' }: { id?: string }) {
  return <div id={id} className={styles.snow}></div>;
}
