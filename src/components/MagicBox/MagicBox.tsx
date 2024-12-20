import { CSSProperties } from 'react';
import styles from './MagicBox.module.scss';

export function MagicBox({
  children,
  clickable = true,
  className,
  style,
}: {
  children: React.ReactNode;
  clickable?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`${styles.container} ${clickable ? styles.clickable : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
