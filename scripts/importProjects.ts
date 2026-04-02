// Script to import all projects from projects.ts to Firestore
// Run with: npx ts-node scripts/importProjects.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { projects } from '../src/data/projects';

// Firebase configuration - replace with your actual values
const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
    authDomain: "ahmedsaied-portfolio.firebaseapp.com",
    projectId: "ahmedsaied-portfolio",
    storageBucket: "ahmedsaied-portfolio.appspot.com",
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID",
    appId: process.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function importProjects() {
    console.log('🚀 Starting import of projects to Firestore...\n');

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        try {
            // Use project.id as document ID for easy reference
            const projectRef = doc(collection(db, 'projects'), project.id);

            // Add order field for sorting
            const projectData = {
                ...project,
                order: project.order !== undefined ? project.order : (i + 1),
            };

            await setDoc(projectRef, projectData);
            console.log(`✅ Imported: ${project.title.en} (order: ${i + 1})`);
        } catch (error) {
            console.error(`❌ Failed to import ${project.title.en}:`, error);
        }
    }

    console.log('\n🎉 Import complete!');
    console.log(`📊 Total projects imported: ${projects.length}`);
}

importProjects().catch(console.error);
