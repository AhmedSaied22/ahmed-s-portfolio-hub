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
                    if (firestoreProjects && firestoreProjects.length > 0) {
                        setProjects(firestoreProjects);
                        setIsFromFirestore(true);
                        setError(null);
                        console.log('✅ Fetched projects from Firestore successfully');
                    } else {
                        throw new Error('No projects found in Firestore, falling back to static');
                    }
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
