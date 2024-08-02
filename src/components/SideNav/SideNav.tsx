'use client';
import styles from './SideNav.module.scss';

import { usePathname } from 'next/navigation';

import { useCallback, useEffect, useState } from 'react';
import RenderRoutes from './RenderRoutes';

interface Route {
  path: string;
  label: string;
  children?: Route[];
}

type SideNavProps = {
  routes: { path: string; label: string }[];
};

const SideNav: React.FC<SideNavProps> = ({ routes }: SideNavProps) => {
  const [openRoutes, setOpenRoutes] = useState<string[]>([]);
  const pathname = usePathname();

  // Initialize open routes based on the current pathname
  useEffect(() => {
    const initOpenRoutes = (routes: Route[], currentPath: string): string[] => {
      for (const route of routes) {
        if (route.children) {
          if (currentPath.startsWith(route.path)) {
            return [route.path, ...initOpenRoutes(route.children, currentPath)];
          }
        }
      }
      return [];
    };
    setOpenRoutes(initOpenRoutes(routes, pathname));
  }, [pathname, routes]);

  const toggleRoute = useCallback((path: string) => {
    setOpenRoutes((prevOpenRoutes) =>
      prevOpenRoutes.includes(path)
        ? prevOpenRoutes.filter((route) => route !== path)
        : [...prevOpenRoutes, path],
    );
  }, []);

  const handleLinkClick = useCallback(
    (route: Route) => {
      if (route.children && !openRoutes.includes(route.path)) {
        setOpenRoutes((prevOpenRoutes) => [...prevOpenRoutes, route.path]);
      }
    },
    [openRoutes],
  );

  return (
    <div className={styles.sideNav}>
      <input type='checkbox' id='menuToggle' className={styles.menuToggle} />
      <label htmlFor='menuToggle' className={styles.toggleBtn}>
        ☰
      </label>
      <nav className={styles.navLinks}>
        <RenderRoutes
          routes={routes}
          openRoutes={openRoutes}
          pathname={pathname}
          toggleRoute={toggleRoute}
          handleLinkClick={handleLinkClick}
        />
      </nav>
    </div>
  );
};

export { SideNav };
