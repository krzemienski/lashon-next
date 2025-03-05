# Google Analytics Implementation

This document outlines how Google Analytics 4 (GA4) has been implemented in the Lashon Music website.

## Overview

Google Analytics has been integrated using the recommended Next.js approach with the `next/script` component. The implementation includes:

1. Core GA4 tracking script in the root layout
2. Custom analytics utility functions
3. Automatic page view tracking
4. Custom event tracking for user interactions

## Files Modified/Created

- `src/app/layout.tsx` - Added GA4 tracking script
- `src/utils/analytics.ts` - Created utility functions for tracking
- `src/hooks/useAnalytics.ts` - Custom hook for automatic page view tracking
- `src/components/layout/MainLayout.tsx` - Integrated analytics hook and navigation tracking
- `src/app/global-components/ContactForm/ContactForm.js` - Added form submission tracking

## Using the Analytics Utility

### Track Page Views

Page views are automatically tracked using the `useAnalytics` hook, which is implemented in `MainLayout.tsx`.

### Track Custom Events

To track custom events, import the `trackEvent` function from the analytics utility:

```jsx
import { trackEvent } from '@/utils/analytics';

// Then track an event
trackEvent('event_name', { 
  parameter_key: 'parameter_value' 
});
```

### Currently Tracked Events

The following events are currently being tracked:

1. **Page Views** - Automatic tracking for all page changes
2. **Navigation Clicks** - When users click on navigation links
3. **Menu Toggle** - When users open/close the mobile menu
4. **Contact Form Interactions** - When users interact with form fields
5. **Contact Form Submissions** - When users submit the contact form

## Google Analytics Configuration

- **Measurement ID**: G-15KPGZEEFT
- **Property Name**: Lashon Music Website

## Best Practices

When adding new features that should be tracked:

1. Use the `trackEvent` function for custom events
2. Use descriptive event names (e.g., `button_click`, `video_play`)
3. Include relevant parameters that provide context without PII (Personally Identifiable Information)
4. Ensure tracking respects user privacy and complies with data protection regulations

## Privacy Considerations

- The current implementation doesn't include a cookie consent banner
- Consider adding a privacy policy page and cookie consent mechanism if required by regulations (GDPR, CCPA, etc.)
