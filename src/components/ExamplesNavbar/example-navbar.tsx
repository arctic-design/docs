'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './example-navbar.module.scss';

export function ExamplesNavbar({ isRootLayout }: { isRootLayout?: boolean }) {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      {isRootLayout ? (
        <>
          <Link href='/' className={`${pathname === '/' ? styles.active : ''}`}>
            Examples
          </Link>
          <Link href='/examples'>See more examples</Link>
        </>
      ) : (
        <>
          <Link
            href='/examples'
            className={`${pathname === '/examples' ? styles.active : ''}`}
          >
            Examples
          </Link>
          <Link
            href='/examples/mail'
            className={`${pathname === '/examples/mail' ? styles.active : ''}`}
          >
            Mailbox
          </Link>
        </>
      )}
    </div>
  );
}
