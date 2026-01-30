// One-time script to import all projects to Firestore
// Navigate to /import-projects in your dev server to run this

import { useEffect, useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { projects } from '@/data/projects';

export default function ImportProjects() {
    const [status, setStatus] = useState<string[]>([]);
    const [isImporting, setIsImporting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const importAllProjects = async () => {
        setIsImporting(true);
        setStatus([]);

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];

            try {
                const projectRef = doc(collection(db, 'projects'), project.id);

                const projectData = {
                    ...project,
                    order: i + 1,
                };

                await setDoc(projectRef, projectData);
                setStatus(prev => [...prev, `✅ ${project.title.en}`]);
            } catch (error) {
                setStatus(prev => [...prev, `❌ ${project.title.en}: ${error}`]);
            }
        }

        setIsImporting(false);
        setIsDone(true);
    };

    return (
        <div style={{
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'system-ui, sans-serif',
            backgroundColor: '#1a1a2e',
            minHeight: '100vh',
            color: '#eee'
        }}>
            <h1 style={{ color: '#4ade80' }}>🚀 Import Projects to Firestore</h1>

            <p style={{ color: '#999', marginBottom: '1rem' }}>
                This will import all {projects.length} projects from your static file to Firestore.
            </p>

            {!isDone && (
                <button
                    onClick={importAllProjects}
                    disabled={isImporting}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        backgroundColor: isImporting ? '#666' : '#4ade80',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: isImporting ? 'not-allowed' : 'pointer',
                        marginBottom: '1.5rem'
                    }}
                >
                    {isImporting ? '⏳ Importing...' : '📤 Import All Projects'}
                </button>
            )}

            {isDone && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#065f46',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                }}>
                    <strong>🎉 Import Complete!</strong>
                    <p style={{ margin: '0.5rem 0 0' }}>
                        You can now delete this page and the route. Your projects are in Firestore!
                    </p>
                </div>
            )}

            <div style={{
                backgroundColor: '#0f0f1a',
                padding: '1rem',
                borderRadius: '8px',
                maxHeight: '400px',
                overflow: 'auto'
            }}>
                <h3 style={{ marginTop: 0 }}>Import Log:</h3>
                {status.length === 0 && <p style={{ color: '#666' }}>Click the button to start...</p>}
                {status.map((msg, i) => (
                    <div key={i} style={{
                        padding: '0.5rem',
                        borderBottom: '1px solid #333'
                    }}>
                        {msg}
                    </div>
                ))}
            </div>
        </div>
    );
}
