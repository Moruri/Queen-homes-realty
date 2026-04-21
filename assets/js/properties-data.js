/* ============================================
   Queen Homes Realty - Property Database
   Properties are now managed via the admin dashboard (Firebase).
   This file is kept for fallback compatibility only.
   ============================================ */

var PROPERTIES = [];

// Helper to find property by ID
function getPropertyById(id) {
  for (var i = 0; i < PROPERTIES.length; i++) {
    if (PROPERTIES[i].id === id) return PROPERTIES[i];
  }
  return null;
}
