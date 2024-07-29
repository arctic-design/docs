import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import GithubLogo from '@/assets/icons/github.svg';
import { SnowLinks } from '@/components/SnowLinks';

export function Header() {
  return (
    <header className={styles.container}>
      <section className={styles.left}>
        <Image alt='logo' src='/images/logo.png' width={40} height={40} />
        <span className={styles.title}>Arctic Design</span>
      </section>
      <section className={styles.center}>
        <SnowLinks href='#'>Get Started</SnowLinks>
        <SnowLinks href='#'>Guides</SnowLinks>
      </section>
      <section className={styles.right}>
        <Link
          href='https://github.com/arctic-design/arctic-kit'
          target='_blank'
        >
          <GithubLogo />
        </Link>
      </section>
    </header>
  );
}
