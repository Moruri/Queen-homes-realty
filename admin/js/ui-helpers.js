/* ============================================
   UI HELPERS — Toast, Modal, Sidebar, Confirm
   ============================================ */

// ── Toast notifications ──
export function showToast(message, type) {
  type = type || 'success';
  var container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  var icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };

  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML =
    '<i class="fas ' + (icons[type] || icons.info) + '"></i>' +
    '<p>' + message + '</p>' +
    '<button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>';

  container.appendChild(toast);

  setTimeout(function() {
    if (toast.parentElement) toast.remove();
  }, 4000);
}

// ── Mobile sidebar toggle ──
export function initSidebar() {
  var toggle = document.querySelector('.menu-toggle-admin');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }
}

// ── Confirm dialog ──
export function showConfirm(title, message) {
  return new Promise(function(resolve) {
    var overlay = document.getElementById('confirm-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'confirm-overlay';
      overlay.className = 'modal-overlay';
      overlay.innerHTML =
        '<div class="modal" style="max-width:420px;">' +
          '<div class="modal-body">' +
            '<div class="confirm-dialog">' +
              '<i class="fas fa-exclamation-triangle"></i>' +
              '<h3 id="confirm-title"></h3>' +
              '<p id="confirm-message"></p>' +
              '<div class="btn-group">' +
                '<button class="btn btn-secondary" id="confirm-cancel">Cancel</button>' +
                '<button class="btn btn-danger" id="confirm-ok">Delete</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      document.body.appendChild(overlay);
    }

    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    overlay.classList.add('active');

    var cancel = document.getElementById('confirm-cancel');
    var ok = document.getElementById('confirm-ok');

    function cleanup() {
      overlay.classList.remove('active');
      cancel.removeEventListener('click', onCancel);
      ok.removeEventListener('click', onOk);
    }

    function onCancel() { cleanup(); resolve(false); }
    function onOk() { cleanup(); resolve(true); }

    cancel.addEventListener('click', onCancel);
    ok.addEventListener('click', onOk);
  });
}

// ── Set user initial in header ──
export function setUserInitial(user) {
  var el = document.querySelector('.admin-user-avatar');
  var nameEl = document.querySelector('.admin-user span');
  if (el && user && user.email) {
    el.textContent = user.email.charAt(0).toUpperCase();
    if (nameEl) nameEl.textContent = user.email.split('@')[0];
  }
}

// ── Format date ──
export function formatDate(timestamp) {
  if (!timestamp) return '—';
  var d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Truncate text ──
export function truncate(str, len) {
  len = len || 50;
  if (!str) return '';
  return str.length > len ? str.substring(0, len) + '...' : str;
}
