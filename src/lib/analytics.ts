/**
 * Analytics utility – thin wrapper around Firebase Analytics.
 *
 * Usage:
 *   import { trackPageView, trackEvent, sendTestVisit } from '@/lib/analytics';
 *
 *   trackPageView('/about', 'About Page');
 *   trackEvent('button_click', { label: 'cta_hero' });
 *   sendTestVisit();  // fires the custom "test_visit" event for verification
 */
import { logEvent } from 'firebase/analytics';
import { analyticsReady } from './firebase';

const isDev = import.meta.env.DEV;

// ─── Page View ───────────────────────────────────────────────
/**
 * Log a `page_view` event.
 * Call on initial load and on every route change.
 */
export async function trackPageView(path?: string, title?: string): Promise<void> {
    const pagePath = path ?? window.location.pathname;
    const pageTitle = title ?? document.title;

    if (isDev) {
        console.log(`[Analytics] page_view → ${pagePath}  (${pageTitle})`);
    }

    const analytics = await analyticsReady;
    if (!analytics) return;

    logEvent(analytics, 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.href,
    });
}

// ─── Generic Event ───────────────────────────────────────────
/**
 * Log any custom event.
 */
export async function trackEvent(
    eventName: string,
    params?: Record<string, unknown>,
): Promise<void> {
    if (isDev) {
        console.log(`[Analytics] event: ${eventName}`, params ?? '');
    }

    const analytics = await analyticsReady;
    if (!analytics) return;

    logEvent(analytics, eventName, params);
}

// ─── Test Visit ──────────────────────────────────────────────
/**
 * Fire a `test_visit` custom event.
 * Use this to verify analytics is working in GA4 DebugView / Realtime.
 */
export async function sendTestVisit(): Promise<void> {
    await trackEvent('test_visit', {
        timestamp: new Date().toISOString(),
        source: 'manual_verification',
    });

    if (isDev) {
        console.log('[Analytics] 🧪 test_visit event sent — check GA4 DebugView');
    }
}

// ─── Button / CTA Click ──────────────────────────────────────
/**
 * Track a CTA or button click.
 * @param buttonName - Identifier for the button (e.g., 'testing_cv', 'whatsapp_hero')
 * @param destination - Where the click leads (e.g., 'google_drive', 'whatsapp')
 */
export async function trackButtonClick(
    buttonName: string,
    destination?: string,
): Promise<void> {
    await trackEvent('cta_click', {
        button_name: buttonName,
        destination: destination ?? 'unknown',
        page_path: window.location.pathname,
    });
}
