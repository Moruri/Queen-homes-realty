/* ============================================
   FIREBASE PUBLIC — Reads data for the public site
   Submits contact form inquiries to Firestore
   ============================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, orderBy, limit, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── PASTE THE SAME FIREBASE CONFIG FROM admin/js/firebase-config.js ───
const firebaseConfig = {
  apiKey: "AIzaSyDEN-xrw4YGw7mmtwsiJB4j_TcezhQM8Pc",
  authDomain: "real-estate-6da55.firebaseapp.com",
  projectId: "real-estate-6da55",
  storageBucket: "real-estate-6da55.firebasestorage.app",
  messagingSenderId: "825451144867",
  appId: "1:825451144867:web:82ce25da4f3bb4abac0116"
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
