/* ============================================
   AUTH MODULE — Login / Logout / Route Guard
   ============================================ */

import { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from './firebase-config.js';

// ── Login ──
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// ── Logout ──
export async function logout() {
  await signOut(auth);
  window.location.href = 'index.html';
}

// ── Route guard: redirect to login if not authenticated ──
export function requireAuth(callback) {
  onAuthStateChanged(auth, function(user) {
    if (user) {
      callback(user);
    } else {
      window.location.href = 'index.html';
    }
  });
}

// ── Get current user ──
export function getCurrentUser() {
  return auth.currentUser;
}
