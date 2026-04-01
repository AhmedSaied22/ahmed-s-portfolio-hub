import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Tracks when a section enters the viewport.
 * Fires a `section_view` event ONCE per section per page load.
 *
 * @param sectionId - The id of the section (e.g., 'about', 'skills')
 * @param threshold - Percentage visible to trigger (default: 0.5 = 50%)
 */
export function useSectionTracker(sectionId: string, threshold = 0.5) {
    const hasFired = useRef(false);

    useEffect(() => {
        const element = document.getElementById(sectionId);
        if (!element || hasFired.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasFired.current) {
                    hasFired.current = true;
                    trackEvent('section_view', {
                        section_id: sectionId,
                        timestamp: new Date().toISOString(),
                    });
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [sectionId, threshold]);
}
