'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './Logo.module.scss';
import { LogoIcon } from './LogoIcon';
import Link from 'next/link';

export function Logo() {
  const pathname = usePathname();

  const shift =
    pathname.replaceAll('/', '') !== '' && !pathname.startsWith('/examples');

  return (
    <Link href='/'>
      <LogoIcon
        width={36}
        height={36}
        className={clsx(styles.container, {
          [styles.shift]: shift,
        })}
      />
    </Link>
  );
}
