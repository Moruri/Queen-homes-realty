# Queen Homes Realty — Admin Dashboard Setup Guide

## Step 1: Create a Firebase Project

1. Go to **https://console.firebase.google.com**
2. Click **"Create a project"** (or "Add project")
3. Name it: `queen-homes-realty`
4. Disable Google Analytics (optional, not needed)
5. Click **"Create project"** and wait for it to finish

## Step 2: Register a Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`)
2. Give it a nickname: `Queen Homes Web`
3. **Don't** check "Firebase Hosting" (you're using Hostinger)
4. Click **"Register app"**
5. You'll see a `firebaseConfig` object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "queen-homes-realty.firebaseapp.com",
  projectId: "queen-homes-realty",
  storageBucket: "queen-homes-realty.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

6. **Copy these values** into TWO files:
   - `admin/js/firebase-config.js` (line 20-27)
   - `assets/js/firebase-public.js` (line 11-18)

## Step 3: Enable Authentication

1. In Firebase console, go to **Build → Authentication**
2. Click **"Get started"**
3. Under "Sign-in providers", enable **Email/Password**
4. Go to the **"Users"** tab
5. Click **"Add user"**
6. Enter your email and a strong password (e.g., `admin@queenhomesrealty.com`)
7. This is your admin login for the dashboard

## Step 4: Create Firestore Database

1. Go to **Build → Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (we'll secure it later)
4. Select the closest location (e.g., `europe-west1` or `us-central1`)
5. Click **"Enable"**

## Step 5: Enable Storage (for image uploads)

1. Go to **Build → Storage**
2. Click **"Get started"**
3. Choose **"Start in test mode"**
4. Click **"Next"** → **"Done"**

## Step 6: Import Your Existing Data

1. Open the admin dashboard: `your-site.com/admin/`
2. Log in with the email/password you created in Step 3
3. Go to **Settings** page
4. Click **"Import Properties"** — this imports your 17 existing properties
5. Click **"Import Blog Posts"** — this imports your 6 existing blog posts
6. Go to **Properties** and **Blog Posts** to verify everything imported

## Step 7: Secure Firestore (important for production!)

After testing, go to **Firestore Database → Rules** and paste these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Properties & blogs: anyone can read, only authenticated users can write
    match /properties/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /blogs/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Inquiries: anyone can create, only authenticated users can read/update/delete
    match /inquiries/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Settings: anyone can read, only authenticated users can write
    match /settings/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Click **"Publish"** to save.

## Step 8: Secure Storage Rules

Go to **Storage → Rules** and paste:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /properties/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## File Structure

```
admin/
├── index.html          ← Login page
├── dashboard.html      ← Dashboard overview (stats, recent items)
├── properties.html     ← Properties list (search, filter, delete)
├── property-form.html  ← Add/edit property (with image upload)
├── blog.html           ← Blog posts list
├── blog-form.html      ← Add/edit blog post
├── inquiries.html      ← Inbox (view, mark read, reply)
├── settings.html       ← Site settings + data migration
├── SETUP.md            ← This file
├── css/
│   └── admin.css       ← Dashboard styles (gold/black theme)
└── js/
    ├── firebase-config.js  ← Firebase SDK imports + config
    ├── auth.js             ← Login/logout/route guard
    └── ui-helpers.js       ← Toast, sidebar, confirm dialog helpers
```

## Accessing the Dashboard

- **Local**: Open `admin/index.html` in a browser (needs a local server for ES modules)
  - Use VS Code Live Server extension, or run `npx serve .` in the project root
- **Production**: Go to `yourdomain.com/admin/`

## Troubleshooting

- **"Cannot use import statement"** → You need a local server (not `file://`). Use VS Code Live Server.
- **Login fails** → Check that Email/Password auth is enabled and you created a user in Firebase.
- **Data not loading** → Verify your `firebaseConfig` values are correct in both config files.
- **Import buttons don't work** → Make sure `properties-data.js` and `blog-data.js` exist in `assets/js/`.
