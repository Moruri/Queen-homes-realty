/* ============================================
   FIREBASE CONFIGURATION
   ============================================

   SETUP INSTRUCTIONS:
   1. Go to https://firebase.google.com and sign in
   2. Click "Create a project" → name it "queen-homes-realty"
   3. Go to Project Settings → General → scroll to "Your apps"
   4. Click the </> (Web) icon to register a web app
   5. Copy the firebaseConfig values and paste them below
   6. Enable Authentication → Email/Password in Firebase Console
   7. Create a Firestore Database (start in test mode)
   8. Enable Storage in Firebase Console
   ============================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc, query, orderBy, where, limit, onSnapshot, serverTimestamp, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ─── PASTE YOUR FIREBASE CONFIG HERE ───
const firebaseConfig = {
  apiKey: "AIzaSyDEN-xrw4YGw7mmtwsiJB4j_TcezhQM8Pc",
  authDomain: "real-estate-6da55.firebaseapp.com",
  projectId: "real-estate-6da55",
  storageBucket: "real-estate-6da55.firebasestorage.app",
  messagingSenderId: "825451144867",
  appId: "1:825451144867:web:82ce25da4f3bb4abac0116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export everything needed
export {
  auth, db, storage,
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
  collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc,
  query, orderBy, where, limit, onSnapshot, serverTimestamp, Timestamp,
  ref, uploadBytes, getDownloadURL, deleteObject
};
