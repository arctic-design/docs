'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/analytics/firebase';
import { logEvent } from 'firebase/analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
  category: string;
}

export const AnalyticsProvider = ({
  children,
  category,
}: AnalyticsProviderProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (analytics && process.env.NODE_ENV === 'production') {
      logEvent(analytics, 'screen_view', {
        firebase_screen: pathname,
        firebase_screen_class: category,
      });
    }
  }, [pathname, category]);

  return <>{children}</>;
};
