'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.scss';

export function ExamplesNavbar() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Link href='/' className={`${pathname === '/' ? styles.active : ''}`}>
        Examples
      </Link>
      <Link
        href='/examples/mail'
        className={`${pathname === '/examples/mail' ? styles.active : ''}`}
      >
        Mailbox
      </Link>
    </div>
  );
}
