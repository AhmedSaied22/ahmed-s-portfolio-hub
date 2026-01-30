// Service for fetching projects from Firestore
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project } from '@/data/projects';

const PROJECTS_COLLECTION = 'projects';

/**
 * Fetch all projects from Firestore
 * Projects are ordered by their 'order' field (ascending)
 */
export async function getProjectsFromFirestore(): Promise<Project[]> {
    try {
        const projectsRef = collection(db, PROJECTS_COLLECTION);
        const q = query(projectsRef, orderBy('order', 'asc'));
        const snapshot = await getDocs(q);

        const projects: Project[] = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title || { en: '', ar: '' },
                description: data.description || { en: '', ar: '' },
                highlights: data.highlights || { en: [], ar: [] },
                techTags: data.techTags || [],
                images: data.images || [],
                category: data.category || 'featured',
                badge: data.badge,
                storeStatus: data.storeStatus,
                googlePlayUrl: data.googlePlayUrl,
                appStoreUrl: data.appStoreUrl,
                caseStudy: {
                    problem: data.caseStudy?.problem || { en: '', ar: '' },
                    role: data.caseStudy?.role || { en: '', ar: '' },
                    challenge: data.caseStudy?.challenge || { en: '', ar: '' },
                    solution: data.caseStudy?.solution || { en: '', ar: '' },
                    results: data.caseStudy?.results || { en: [], ar: [] },
                },
            } as Project;
        });

        return projects;
    } catch (error) {
        console.error('Error fetching projects from Firestore:', error);
        throw error;
    }
}
