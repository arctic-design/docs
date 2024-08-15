'use client';

import styles from './SideNav.module.scss';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import RenderRoutes from './RenderRoutes';
import { Toggler } from './Toggler';

const initOpenRoutes = (routes: Route[], currentPath: string): string[] => {
  let openPaths: string[] = [];

  for (const route of routes) {
    if (route.children) {
      const childOpenRoutes = initOpenRoutes(route.children, currentPath);

      // If the currentPath matches the route or any of its children are open, include this route
      if (currentPath.startsWith(route.path) || childOpenRoutes.length > 0) {
        openPaths = [...openPaths, route.path, ...childOpenRoutes];
      }
    } else if (currentPath.startsWith(route.path)) {
      openPaths.push(route.path);
    }
  }

  return openPaths;
};

interface Route {
  path: string;
  label: string;
  children?: Route[];
}

type SideNavProps = {
  routes: Route[];
};

const SideNav: React.FC<SideNavProps> = ({ routes }) => {
  const [openRoutes, setOpenRoutes] = useState<string[]>([]);
  const [isToggled, setIsToggled] = useState(false);
  const pathname = usePathname();

  // Initialize open routes based on the current pathname
  useEffect(() => {
    const initialOpenRoutes = initOpenRoutes(routes, pathname).filter(Boolean); // Filter out any empty strings
    setOpenRoutes(initialOpenRoutes);
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

      setIsToggled(false);
    },
    [openRoutes],
  );

  return (
    <div className={styles.container}>
      <Toggler isToggled={isToggled} onToggle={setIsToggled} />
      <div className={`${styles.overlay} ${isToggled ? styles.toggled : ''}`}>
        <div className={styles.sideNav}>
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
      </div>
    </div>
  );
};

export { SideNav };
