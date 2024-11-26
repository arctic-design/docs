import { SnowLink } from '../SnowLink';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with ❤️ and a few ☕ of coffee</p>
      <div className={styles.builtBy}>
        <span>Built by</span>
        <SnowLink
          href='https://www.barunprasad.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          Barun Prasad
        </SnowLink>
      </div>
    </footer>
  );
};
