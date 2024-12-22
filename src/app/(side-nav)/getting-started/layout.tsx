import { ClientLayout } from '@/analytics/ClientLayout';
import { PageCategory } from '@/types';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout category={PageCategory.GettingStarted}>
      {children}
    </ClientLayout>
  );
}
