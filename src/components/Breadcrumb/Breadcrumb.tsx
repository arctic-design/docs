'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Route } from '@/types';

import { Breadcrumbs } from '@arctic-kit/snow';

import { css } from '@pigment-css/react';

interface BreadcrumbProps {
  routes: Route[];
}

const anchorStyles = css({
  color: 'var(--snow-colors-grey-900)',
  textDecoration: 'none',
  transition: 'color 0.3s',
  '&:hover': {
    color: 'var(--snow-colors-primary-main)',
  },
});

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

  const breadcrumbPaths = useMemo(() => {
    const paths = findBreadcrumbPath(routes, currentPath);
    const foundPaths = paths
      ? [{ path: '/', label: 'Home', clickable: true }, ...paths]
      : [];
    return foundPaths.map((item) => ({
      title: item.label,
      href: item.path,
      clickable: item.clickable,
    }));
  }, [routes, currentPath]);

  if (!breadcrumbPaths) {
    return null;
  }

  return (
    <Breadcrumbs
      items={breadcrumbPaths}
      renderAnchor={(title, href) => (
        <Link href={href} className={anchorStyles}>
          {title}
        </Link>
      )}
    />
  );
};

export default Breadcrumb;
