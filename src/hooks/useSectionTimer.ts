import { useEffect, useRef, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Tracks time spent viewing a section.
 * Fires `section_time_spent` when the section leaves the viewport or the page unloads.
 * Ignores sessions shorter than 2 seconds to filter accidental scrolls.
 *
 * @param sectionId - The id of the section element (e.g., 'about')
 */
export function useSectionTimer(sectionId: string) {
    const enterTime = useRef<number | null>(null);
    const totalTime = useRef(0);
    const hasSent = useRef(false);

    const sendTimeEvent = useCallback(() => {
        if (enterTime.current) {
            totalTime.current += Date.now() - enterTime.current;
            enterTime.current = null;
        }

        const seconds = Math.round(totalTime.current / 1000);
        if (seconds >= 2 && !hasSent.current) {
            hasSent.current = true;
            trackEvent('section_time_spent', {
                section_id: sectionId,
                time_seconds: seconds,
            });
        }
    }, [sectionId]);

    useEffect(() => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    enterTime.current = Date.now();
                } else if (enterTime.current) {
                    totalTime.current += Date.now() - enterTime.current;
                    enterTime.current = null;
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);

        const handleUnload = () => sendTimeEvent();
        window.addEventListener('beforeunload', handleUnload);

        return () => {
            observer.disconnect();
            window.removeEventListener('beforeunload', handleUnload);
            sendTimeEvent();
        };
    }, [sectionId, sendTimeEvent]);
}
