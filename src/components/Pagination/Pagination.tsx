'use client';

import styles from './Pagination.module.scss';
import { FlatRoute } from '@/types';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@arctic-kit/icons/solid';
import { SnowLink } from '@/components/SnowLink';
import { useMemo } from 'react';

interface PaginationProps {
  routes: FlatRoute[];
}

export const Pagination: React.FC<PaginationProps> = ({ routes }) => {
  const currentPath = usePathname();

  // Filter out routes with empty paths
  const validRoutes = useMemo(
    () => routes.filter((route) => route.path && route.clickable),
    [routes],
  );

  const currentIndex = validRoutes.findIndex(
    (route) => route.path === currentPath,
  );

  if (currentIndex === -1) {
    return null;
  }

  const prevRoute = validRoutes[currentIndex - 1];
  const nextRoute = validRoutes[currentIndex + 1];

  return (
    <div className={styles.paginationFooter}>
      {prevRoute ? (
        <SnowLink href={prevRoute.path}>
          <ChevronLeftIcon className={styles.icon} /> {prevRoute.label}
        </SnowLink>
      ) : (
        <span className={styles.hidden}></span>
      )}
      {nextRoute && (
        <SnowLink href={nextRoute.path}>
          {nextRoute.label}
          <ChevronRightIcon className={styles.icon} />
        </SnowLink>
      )}
    </div>
  );
};
