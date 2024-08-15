import { SnowLink } from '../SnowLink';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with ❤️ and a few ☕ of coffee</p>
      <div className={styles.builtBy}>
        <span>Built by</span>
        <SnowLink href='https://github.com/barunprasad'>Barun Prasad</SnowLink>
      </div>
    </footer>
  );
};
