import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Tracks scroll depth milestones: 25%, 50%, 75%, 100%.
 * Each milestone fires ONCE per page load.
 * Uses requestAnimationFrame throttling for zero jank.
 *
 * Place this hook in your main page component (Index.tsx).
 */
export function useScrollDepthTracker() {
    const milestonesFired = useRef(new Set<number>());

    useEffect(() => {
        const milestones = [25, 50, 75, 100];

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;

            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            for (const milestone of milestones) {
                if (scrollPercent >= milestone && !milestonesFired.current.has(milestone)) {
                    milestonesFired.current.add(milestone);
                    trackEvent('scroll_depth', {
                        depth_percent: milestone,
                        page_path: window.location.pathname,
                    });
                }
            }
        };

        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledScroll);
    }, []);
}
