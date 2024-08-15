import NavItem from './NavItem';
import styles from './SideNav.module.scss';

interface Route {
  path: string;
  label: string;
  children?: Route[];
}

interface RenderRoutesProps {
  routes: Route[];
  openRoutes: string[];
  toggleRoute: (path: string) => void;
  handleLinkClick: (route: Route) => void;
  pathname: string;
}

const RenderRoutes: React.FC<RenderRoutesProps> = ({
  routes,
  openRoutes,
  toggleRoute,
  handleLinkClick,
  pathname,
}) => {
  return (
    <ul className={styles.navList}>
      {routes.map((route, index) => {
        const isOpen = openRoutes.includes(route.path);
        return (
          <NavItem
            key={index}
            route={route}
            isOpen={isOpen}
            toggleRoute={toggleRoute}
            handleLinkClick={handleLinkClick}
            pathname={pathname}
          />
        );
      })}
    </ul>
  );
};

export default RenderRoutes;
