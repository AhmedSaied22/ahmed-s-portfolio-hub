// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

// Your Firebase configuration
// Get these values from Firebase Console > Project Settings > Your Apps
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ahmedsaied-portfolio.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahmedsaied-portfolio",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ahmedsaied-portfolio.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (with browser-support guard)
// isSupported() returns false in SSR / test environments, preventing crashes
let analyticsInstance: Analytics | null = null;

export const analyticsReady: Promise<Analytics | null> = isSupported()
    .then((supported) => {
        if (supported) {
            analyticsInstance = getAnalytics(app);
            console.log('[Analytics] Firebase Analytics initialized ✅');
            return analyticsInstance;
        }
        console.warn('[Analytics] Firebase Analytics is not supported in this environment');
        return null;
    })
    .catch((err) => {
        console.warn('[Analytics] Failed to initialize Analytics:', err);
        return null;
    });

export { analyticsInstance };
export default app;
