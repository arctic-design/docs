'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import styles from './Breadcrumb.module.scss';
import { usePathname } from 'next/navigation';
import { Route } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface BreadcrumbProps {
  routes: Route[];
}

const findBreadcrumbPath = (
  routes: Route[],
  currentPath: string,
  path: Route[] = [],
): Route[] | null => {
  for (const route of routes) {
    if (route.path === currentPath) {
      return [...path, route];
    }

    if (route.children) {
      const childPath = findBreadcrumbPath(route.children, currentPath, [
        ...path,
        route,
      ]);
      if (childPath) {
        return childPath;
      }
    }
  }
  return null;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ routes }) => {
  const currentPath = usePathname(); // Hook to get current path

  const breadcrumbPath = useMemo(() => {
    const path = findBreadcrumbPath(routes, currentPath);
    return path
      ? [{ path: '/', label: 'Home', clickable: true }, ...path]
      : null;
  }, [routes, currentPath]);

  if (!breadcrumbPath) {
    return null;
  }

  return (
    <nav className={styles.breadcrumb}>
      {breadcrumbPath.map((route, index) => (
        <span key={route.path} className={styles.routePath}>
          {route.path && route.clickable ? (
            <Link href={route.path} className={styles.breadcrumbLink}>
              {route.label}
            </Link>
          ) : (
            <span className={styles.breadcrumbLabel}>{route.label}</span>
          )}
          {index < breadcrumbPath.length - 1 && (
            <span className={styles.separator}>
              <ChevronRightIcon />
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
