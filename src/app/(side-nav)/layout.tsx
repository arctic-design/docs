import { SideNav } from '@/components/SideNav/SideNav';
import { fetchRoutes } from './action';
import { Suspense } from 'react';
import styles from './layout.module.scss';
import { Pagination } from '@/components/Pagination';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Footer } from '@/components/Footer';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { tree: routes, flat: flatRoutes } = await fetchRoutes();

  return (
    <>
      <div className={styles.app}>
        <Suspense fallback={<div style={{ height: '100%', width: 250 }}></div>}>
          <SideNav routes={routes} />
        </Suspense>

        <div className={styles.content}>
          <Breadcrumb routes={routes} />
          {children}
          <Pagination routes={flatRoutes} />
          <div style={{ margin: '-1.5rem', marginTop: '2rem' }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
