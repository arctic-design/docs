'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './Logo.module.scss';
const basePath = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export function Logo() {
  const pathname = usePathname();

  const shift = pathname.replaceAll('/', '') !== '';

  return (
    <Image
      alt='logo'
      src={`${basePath}/images/apple-touch-icon.png`}
      width={40}
      height={40}
      priority
      className={clsx(styles.container, {
        [styles.shift]: shift,
      })}
      // placeholder='blur'
      // blurDataURL='/images/logo-16x16.png'
    />
  );
}
