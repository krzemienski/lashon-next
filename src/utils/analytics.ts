// Google Analytics utility functions

// Define interface for event parameters
interface EventParams {
  [key: string]: any;
}

/**
 * Track a custom event in Google Analytics
 * @param eventName The name of the event to track
 * @param params Optional event parameters
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
  // Make sure gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  } else {
    console.warn('Google Analytics not initialized. Event not tracked:', eventName);
  }
};

/**
 * Track a page view in Google Analytics
 * @param url The URL of the page
 * @param title The title of the page
 */
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-15KPGZEEFT', {
      page_path: url,
      page_title: title || document.title
    });
  } else {
    console.warn('Google Analytics not initialized. Page view not tracked:', url);
  }
};
