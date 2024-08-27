import styles from './Header.module.scss';
import Link from 'next/link';
import GithubLogo from '@/assets/icons/github.svg';
import { SnowLink } from '@/components/SnowLink';
import { Logo } from './Logo';
import { Suspense } from 'react';
import { LogoSkeleton } from './LogoSkeleton';

export function Header() {
  return (
    <header className={styles.container}>
      <section className={styles.left}>
        <Suspense fallback={<LogoSkeleton />}>
          <Logo />
        </Suspense>

        <SnowLink href='/' className={styles.title}>
          Arctic Design
        </SnowLink>
      </section>
      <section className={styles.center}>
        <SnowLink href='/getting-started/overview'>Get Started</SnowLink>
        <SnowLink href='/foundations'>Foundations</SnowLink>
        <SnowLink href='/components'>Components</SnowLink>
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
