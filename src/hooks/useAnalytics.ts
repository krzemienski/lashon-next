import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/utils/analytics';

/**
 * Custom hook to track page views in Google Analytics
 * This hook should be used in a top-level component to track all page views
 */
const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (pathname) {
      // Create full URL with search parameters
      const queryString = searchParams?.toString();
      const url = queryString ? `${pathname}?${queryString}` : pathname;
      
      // Track the page view
      trackPageView(url);
    }
  }, [pathname, searchParams]);
};

export default useAnalytics;
