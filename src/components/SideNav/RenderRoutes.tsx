import { useMemo } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import styles from './SideNav.module.scss';

interface Route {
  path: string;
  label: string;
  children?: Route[];
}

interface RenderRoutesProps {
  routes: Route[];
  openRoutes: string[];
  pathname: string;
  toggleRoute: (path: string) => void;
  handleLinkClick: (route: Route) => void;
}

const RenderRoutes: React.FC<RenderRoutesProps> = ({
  routes,
  openRoutes,
  pathname,
  toggleRoute,
  handleLinkClick,
}) => {
  // const isAnyChildOpen = useCallback(
  //   (children: Route[]): boolean => {
  //     return children.some(
  //       (child) =>
  //         openRoutes.includes(child.path) ||
  //         (child.children && isAnyChildOpen(child.children)),
  //     );
  //   },
  //   [openRoutes],
  // );

  const renderRoutes = useMemo(() => {
    const render = (routes: Route[], level = 0) => {
      return (
        <ul className={`${styles.navList} ${level > 0 ? styles.subMenu : ''}`}>
          {routes.map((route, index) => {
            const isOpen = openRoutes.includes(route.path);

            return (
              <li key={index} className={styles.navItem}>
                <div
                  className={`${styles.navLinkContainer} ${styles.navLink} ${pathname === route.path ? styles.active : ''}`}
                >
                  {route.path ? (
                    <Link
                      href={route.path}
                      onClick={() => handleLinkClick(route)}
                      className={styles.navBar}
                    >
                      {route.label}
                    </Link>
                  ) : (
                    <div
                      className={styles.navBar}
                      // style={{ fontWeight: isBold ? 'bold' : 'normal' }}
                      onClick={() => toggleRoute(route.path)}
                    >
                      {route.label}
                    </div>
                  )}

                  {route.children && route.children.length > 0 && (
                    <button
                      className={styles.caretButton}
                      onClick={() => toggleRoute(route.path)}
                    >
                      {isOpen ? (
                        <ChevronDownIcon className={styles.caretIcon} />
                      ) : (
                        <ChevronRightIcon className={styles.caretIcon} />
                      )}
                    </button>
                  )}
                </div>
                {route.children && isOpen && render(route.children, level + 1)}
              </li>
            );
          })}
        </ul>
      );
    };
    return render(routes);
  }, [routes, openRoutes, pathname, toggleRoute, handleLinkClick]);

  return <>{renderRoutes}</>;
};

export default RenderRoutes;
