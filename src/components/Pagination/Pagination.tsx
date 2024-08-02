'use client';
import Link from 'next/link';
import styles from './Pagination.module.scss';
import { FlatRoute } from '@/types';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { SnowLink } from '@/components/SnowLink';
import { useMemo } from 'react';
import { Box } from '@arctic-kit/snow';

interface PaginationProps {
  routes: FlatRoute[];
}

export const Pagination: React.FC<PaginationProps> = ({ routes }) => {
  const currentPath = usePathname();
  // Filter out routes with empty paths
  const validRoutes = useMemo(
    () => routes.filter((route) => route.path),
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
          <ChevronLeftIcon /> {prevRoute.label}
        </SnowLink>
      ) : (
        <span className={styles.hidden}></span>
      )}
      {nextRoute && (
        <SnowLink href={nextRoute.path}>
          {nextRoute.label}
          <ChevronRightIcon />
        </SnowLink>
      )}
    </div>
  );
};
