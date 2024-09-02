'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronDownIcon } from '@arctic-kit/icons/solid';
import styles from './SideNav.module.scss';
import { Route } from '@/types';

interface NavItemProps {
  route: Route;
  isOpen: boolean;
  toggleRoute: (path: string) => void;
  handleLinkClick: (route: Route) => void;
  pathname: string;
}

const NavItem: React.FC<NavItemProps> = ({
  route,
  isOpen,
  toggleRoute,
  handleLinkClick,
  pathname,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    toggleRoute(route.path);
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={styles.navItem}>
      <div
        className={`${styles.navLinkContainer} ${styles.navLink} ${pathname === route.path ? styles.active : ''}`}
      >
        {route.path && route.clickable ? (
          <Link
            href={route.path}
            className={styles.navBar}
            onClick={() => handleLinkClick(route)}
          >
            {route.label}
          </Link>
        ) : (
          <div className={styles.navBar} onClick={handleToggle}>
            {route.label}
          </div>
        )}
        {route.children && route.children.length > 0 && (
          <button className={styles.caretButton} onClick={handleToggle}>
            {isExpanded ? (
              <ChevronDownIcon className={styles.caretIcon} />
            ) : (
              <ChevronRightIcon className={styles.caretIcon} />
            )}
          </button>
        )}
      </div>
      {route.children && isExpanded && (
        <ul
          className={`${styles.navList} ${styles.subMenu} ${styles.expanded}`}
        >
          {route.children.map((child) => (
            <NavItem
              key={child.path}
              route={child}
              isOpen={isOpen}
              toggleRoute={toggleRoute}
              handleLinkClick={handleLinkClick}
              pathname={pathname}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
