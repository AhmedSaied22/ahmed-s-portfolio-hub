/**
 * AnalyticsTracker — render inside <BrowserRouter> to auto-track route changes.
 *
 * Fires a `page_view` on:
 *   1. Initial page load
 *   2. Every subsequent navigation (react-router location change)
 *
 * Also fires a one-time `test_visit` event on mount for verification.
 */
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, sendTestVisit } from '@/lib/analytics';

export default function AnalyticsTracker() {
    const location = useLocation();
    const hasSentTestVisit = useRef(false);

    // Track page view on every route change (including initial load)
    useEffect(() => {
        trackPageView(location.pathname + location.search);
    }, [location]);

    // Fire a one-time test_visit event for verification
    useEffect(() => {
        if (!hasSentTestVisit.current) {
            hasSentTestVisit.current = true;
            sendTestVisit();
        }
    }, []);

    // This component renders nothing — it's a side-effect-only component
    return null;
}
