import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import GithubLogo from '@/assets/icons/github.svg';
import { SnowLink } from '@/components/SnowLink';

const basePath = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export function Header() {
  return (
    <header className={styles.container}>
      <section className={styles.left}>
        <Image
          alt='logo'
          src={`${basePath}/images/apple-touch-icon.png`}
          width={40}
          height={40}
          priority
          // placeholder='blur'
          // blurDataURL='/images/logo-16x16.png'
        />

        <SnowLink href='/' className={styles.title}>
          Arctic Design
        </SnowLink>
      </section>
      <section className={styles.center}>
        <SnowLink href='/getting-started/overview'>Get Started</SnowLink>
        <SnowLink href='#'>Guides</SnowLink>
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
