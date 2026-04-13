/* ============================================
   FIREBASE PUBLIC — Reads data for the public site
   Submits contact form inquiries to Firestore
   ============================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, orderBy, limit, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── PASTE THE SAME FIREBASE CONFIG FROM admin/js/firebase-config.js ───
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ── Fetch all properties ──
export async function fetchProperties() {
  var q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'));
  var snap = await getDocs(q);
  var list = [];
  snap.forEach(function(d) { list.push({ id: d.id, ...d.data() }); });
  return list;
}

// ── Fetch single property by Firestore doc ID ──
export async function fetchPropertyById(id) {
  var docSnap = await getDoc(doc(db, 'properties', id));
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  return null;
}

// ── Fetch all blog posts ──
export async function fetchBlogs() {
  var q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
  var snap = await getDocs(q);
  var list = [];
  snap.forEach(function(d) { list.push({ id: d.id, ...d.data() }); });
  return list;
}

// ── Fetch single blog post by Firestore doc ID ──
export async function fetchBlogById(id) {
  var docSnap = await getDoc(doc(db, 'blogs', id));
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  return null;
}

// ── Submit a contact form inquiry ──
export async function submitInquiry(data) {
  data.createdAt = serverTimestamp();
  data.read = false;
  return addDoc(collection(db, 'inquiries'), data);
}
