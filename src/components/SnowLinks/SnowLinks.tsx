import { forwardRef, PropsWithChildren } from 'react';
import styles from './SnowLinks.module.scss';
import Link from 'next/link';

type SnowLinksProps = {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  href: string;
};
export const SnowLinks = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<SnowLinksProps>
>(({ onClick, href, children }, ref) => {
  return (
    <Link href={href} onClick={onClick} ref={ref} className={styles.container}>
      {children}
    </Link>
  );
});

SnowLinks.displayName = 'SnowLinks';
