# Firestore Projects Setup Guide

## Overview
Your portfolio now fetches projects from **Firestore** with automatic fallback to the static `projects.ts` data.

---

## 1️⃣ Enable Firestore in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **ahmedsaied-portfolio**
3. Click **Firestore Database** in the sidebar
4. Click **Create database**
5. Choose **Start in production mode** (we'll set rules next)
6. Select a location closest to your users

---

## 2️⃣ Set Firestore Security Rules

In Firebase Console → Firestore → **Rules**, use these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to projects
    match /projects/{projectId} {
      allow read: if true;
      allow write: if false; // Only you can write via Firebase Console
    }
  }
}
```

---

## 3️⃣ Add Firebase Config to Your Project

1. Go to Firebase Console → **Project Settings** (gear icon)
2. Scroll to "Your apps" → Select your web app (or create one)
3. Copy the Firebase config values
4. Create `.env.local` file in your project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=ahmedsaied-portfolio.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ahmedsaied-portfolio
VITE_FIREBASE_STORAGE_BUCKET=ahmedsaied-portfolio.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 4️⃣ Add Projects to Firestore

In Firebase Console → Firestore → **projects** collection:

### Create a new document with this structure:

```json
{
  "order": 1,  // For ordering projects (1 = first)
  "title": {
    "en": "Project Name",
    "ar": "اسم المشروع"
  },
  "description": {
    "en": "English description",
    "ar": "الوصف بالعربية"
  },
  "highlights": {
    "en": ["Feature 1", "Feature 2"],
    "ar": ["ميزة 1", "ميزة 2"]
  },
  "techTags": ["Flutter", "Firebase", "REST API"],
  "images": ["/projects/image1.jpg", "/projects/image2.jpg"],
  "category": "featured",  // or "practice"
  "badge": {
    "en": "Coming Soon",
    "ar": "قريباً"
  },
  "storeStatus": "comingSoon",  // or "internal" or omit
  "googlePlayUrl": "https://play.google.com/...",
  "appStoreUrl": "https://apps.apple.com/...",
  "caseStudy": {
    "problem": {
      "en": "Problem description",
      "ar": "وصف المشكلة"
    },
    "role": {
      "en": "Your role",
      "ar": "دورك"
    },
    "challenge": {
      "en": "Challenge description",
      "ar": "وصف التحدي"
    },
    "solution": {
      "en": "Solution description",
      "ar": "وصف الحل"
    },
    "results": {
      "en": ["Result 1", "Result 2"],
      "ar": ["نتيجة 1", "نتيجة 2"]
    }
  }
}
```

---

## 5️⃣ Quick Add Example

To add a new project quickly:

1. Go to Firestore Console
2. Click **projects** collection (create if doesn't exist)
3. Click **Add document**
4. Use **Auto-ID** for document ID
5. Add fields as shown above

### Required Fields:
- `order` (number) - For sorting
- `title` (map with `en` and `ar`)
- `description` (map with `en` and `ar`)
- `highlights` (map with `en` and `ar` arrays)
- `techTags` (array of strings)
- `images` (array of strings - image paths)
- `category` (string: "featured" or "practice")
- `caseStudy` (map with problem, role, challenge, solution, results)

### Optional Fields:
- `badge` (map with `en` and `ar`)
- `storeStatus` ("internal" or "comingSoon")
- `googlePlayUrl` (string)
- `appStoreUrl` (string)

---

## 6️⃣ How It Works

- The app tries to fetch from Firestore first
- If Firestore is empty or fails, it uses `src/data/projects.ts` as fallback
- Projects are sorted by the `order` field
- No code changes needed to add/update projects!

---

## Tips

✅ **Images**: Upload images to `public/projects/` folder and use paths like `/projects/myimage.jpg`

✅ **Reordering**: Just change the `order` number in Firestore

✅ **Instant Updates**: Changes in Firestore appear immediately on page refresh

✅ **Safe Fallback**: If Firestore fails, your static projects still show
