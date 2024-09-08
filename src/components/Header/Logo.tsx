'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './Logo.module.scss';
import { LogoIcon } from './LogoIcon';

export function Logo() {
  const pathname = usePathname();

  const shift = pathname.replaceAll('/', '') !== '';

  return (
    <LogoIcon
      width={40}
      height={40}
      className={clsx(styles.container, {
        [styles.shift]: shift,
      })}
    />
  );
}
