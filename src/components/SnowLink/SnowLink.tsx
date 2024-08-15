import { forwardRef, PropsWithChildren } from 'react';
import styles from './SnowLink.module.scss';
import Link from 'next/link';

type SnowLinkProps = {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  href: string;
  target?: string;
};
export const SnowLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<SnowLinkProps>
>(({ onClick, href, children, className, ...otherProps }, ref) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      ref={ref}
      className={`${styles.container} ${className}`}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

SnowLink.displayName = 'SnowLink';
