// Hook for fetching projects with fallback to static data
import { useState, useEffect } from 'react';
import { Project, projects as staticProjects } from '@/data/projects';
import { getProjectsFromFirestore } from '@/services/projectsService';

interface UseProjectsResult {
    projects: Project[];
    loading: boolean;
    error: Error | null;
    isFromFirestore: boolean;
}

/**
 * Hook to fetch projects from Firestore with fallback to static data
 * - First tries to fetch from Firestore
 * - Falls back to static projects.ts data if Firestore fails
 * - Provides loading and error states
 */
export function useProjects(): UseProjectsResult {
    const [projects, setProjects] = useState<Project[]>(staticProjects);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [isFromFirestore, setIsFromFirestore] = useState(false);

    useEffect(() => {
        let mounted = true;

        async function fetchProjects() {
            try {
                setLoading(true);
                const firestoreProjects = await getProjectsFromFirestore();

                if (mounted) {
                    // Only use Firestore data if we got results
                    if (firestoreProjects.length > 0) {
                        console.log('✅ Projects loaded from Firestore:', firestoreProjects.length);
                        setProjects(firestoreProjects);
                        setIsFromFirestore(true);
                    } else {
                        console.log('⚠️ Firestore empty, using static data');
                        // Fallback to static data if Firestore is empty
                        setProjects(staticProjects);
                        setIsFromFirestore(false);
                    }
                    setError(null);
                }
            } catch (err) {
                console.warn('Failed to fetch from Firestore, using static data:', err);
                if (mounted) {
                    // Fallback to static data on error
                    setProjects(staticProjects);
                    setIsFromFirestore(false);
                    setError(err instanceof Error ? err : new Error('Unknown error'));
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchProjects();

        return () => {
            mounted = false;
        };
    }, []);

    return { projects, loading, error, isFromFirestore };
}
