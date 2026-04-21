/* ============================================
   AUTH MODULE — Login / Logout / Route Guard + Roles
   ============================================ */

import {
  auth, db,
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
  doc, getDoc, setDoc, serverTimestamp
} from './firebase-config.js';

// Super admin is hardcoded — auto-promoted on first login.
export var SUPER_ADMIN_EMAIL = 'moruricharles63@gmail.com';

// ── Login ──
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// ── Logout ──
export async function logout() {
  await signOut(auth);
  window.location.href = 'index.html';
}

// ── Check role for a given user ──
export async function getUserRole(user) {
  if (!user || !user.email) return null;
  var emailLower = user.email.toLowerCase();
  if (emailLower === SUPER_ADMIN_EMAIL) return 'super';
  try {
    var snap = await getDoc(doc(db, 'admins', emailLower));
    if (snap.exists() && snap.data().status !== 'revoked') return 'admin';
  } catch (err) {
    console.error('Failed to check admin role:', err);
  }
  return null;
}

// ── Route guard: redirect to login if not authenticated OR not an admin ──
export function requireAuth(callback) {
  onAuthStateChanged(auth, async function(user) {
    if (!user) {
      window.location.href = 'index.html';
      return;
    }
    var role = await getUserRole(user);
    if (!role) {
      // Logged in, but not on admin list — kick them out.
      await signOut(auth);
      window.location.href = 'index.html?denied=1';
      return;
    }
    // Ensure super admin has a self-record in admins collection (for listing purposes)
    if (role === 'super') {
      try {
        var emailLower = user.email.toLowerCase();
        var selfRef = doc(db, 'admins', emailLower);
        var selfSnap = await getDoc(selfRef);
        if (!selfSnap.exists()) {
          await setDoc(selfRef, {
            email: emailLower,
            name: 'Moruri Charles',
            role: 'super',
            status: 'active',
            approvedAt: serverTimestamp(),
            approvedBy: 'system'
          });
        }
      } catch (err) { /* silent */ }
    }
    // Expose role globally for pages that want to toggle UI
    window.currentAdminRole = role;
    document.body.setAttribute('data-role', role);
    callback(user, role);
  });
}

// ── Get current user ──
export function getCurrentUser() {
  return auth.currentUser;
}

// ── Convenience: is current user super admin? ──
export function isSuperAdmin() {
  return window.currentAdminRole === 'super';
}
