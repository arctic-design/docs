import { ReactNode } from 'react';
import { AnalyticsProvider } from './AnalyticsProvider';

interface ClientLayoutProps {
  children: ReactNode;
  category: string;
}

export const ClientLayout = ({ children, category }: ClientLayoutProps) => {
  return <AnalyticsProvider category={category}>{children}</AnalyticsProvider>;
};
