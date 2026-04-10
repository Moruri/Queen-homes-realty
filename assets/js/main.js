/* ============================================
   Queen Homes Realty - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ─── Mobile Menu Toggle ───
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      const spans = menuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('open');
          menuToggle.querySelectorAll('span').forEach(function (s) {
            s.style.transform = '';
            s.style.opacity = '';
          });
        }
      });
    });
  }

  // ─── Back to Top Button ───
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Sticky Header Shadow ───
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 5px 30px rgba(0,0,0,0.2)'
        : '0 5px 30px rgba(0,0,0,0.1)';
    });
  }

  // ─── Search Bar Select Styling ───
  document.querySelectorAll('.search-bar-field select').forEach(function (sel) {
    sel.addEventListener('change', function () {
      sel.style.color = sel.value ? '#0F0F0F' : '#7A7A7A';
    });
  });

  // ─── Scroll Fade-In Animations ───
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ─── Favorite Heart Toggle ───
  document.querySelectorAll('.property-favorite').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('active');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
      }
    });
  });

  // ─── Property Filters (Properties Page) ───
  const applyFilters = document.getElementById('apply-filters');
  if (applyFilters) {
    applyFilters.addEventListener('click', function () {
      const type = document.getElementById('filter-type').value;
      const location = document.getElementById('filter-location').value;
      const status = document.getElementById('filter-status').value;
      const cards = document.querySelectorAll('#property-grid .property-card');
      let count = 0;

      cards.forEach(function (card) {
        const cardType = card.getAttribute('data-type');
        const cardLoc = card.getAttribute('data-location');
        const cardStatus = card.getAttribute('data-status');
        let show = true;

        if (type && cardType !== type) show = false;
        if (location && cardLoc !== location) show = false;
        if (status && cardStatus !== status) show = false;

        card.style.display = show ? '' : 'none';
        if (show) count++;
      });

      const resultsCount = document.getElementById('results-count');
      if (resultsCount) resultsCount.textContent = count;
    });
  }

  // ─── Sort Properties ───
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      const grid = document.getElementById('property-grid');
      if (!grid) return;

      const cards = Array.from(grid.querySelectorAll('.property-card'));
      const sortVal = sortSelect.value;

      cards.sort(function (a, b) {
        const priceA = parseInt(a.getAttribute('data-price')) || 0;
        const priceB = parseInt(b.getAttribute('data-price')) || 0;

        if (sortVal === 'price-low') return priceA - priceB;
        if (sortVal === 'price-high') return priceB - priceA;
        return 0; // newest — keep original order
      });

      cards.forEach(function (card) { grid.appendChild(card); });
    });
  }

  // ─── View Toggle (Grid/List) ───
  const viewBtns = document.querySelectorAll('.view-toggle button');
  viewBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      viewBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const grid = document.getElementById('property-grid');
      if (!grid) return;

      if (btn.getAttribute('data-view') === 'list') {
        grid.style.gridTemplateColumns = '1fr';
      } else {
        grid.style.gridTemplateColumns = '';
      }
    });
  });

  // ─── Mortgage Calculator ───
  const calcBtn = document.getElementById('calc-mortgage');
  if (calcBtn) {
    calcBtn.addEventListener('click', function () {
      const price = parseFloat(document.getElementById('mort-price').value) || 0;
      const down = parseFloat(document.getElementById('mort-down').value) || 0;
      const rate = parseFloat(document.getElementById('mort-rate').value) || 0;
      const years = parseFloat(document.getElementById('mort-years').value) || 0;

      const principal = price - down;
      const monthlyRate = rate / 100 / 12;
      const numPayments = years * 12;

      if (principal <= 0 || monthlyRate <= 0 || numPayments <= 0) return;

      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))
        / (Math.pow(1 + monthlyRate, numPayments) - 1);

      const resultEl = document.getElementById('mort-result');
      const paymentEl = document.getElementById('mort-payment');

      if (resultEl && paymentEl) {
        paymentEl.textContent = 'KES ' + Math.round(payment).toLocaleString();
        resultEl.style.display = 'block';
      }
    });
  }

  // ─── Contact Form Submission ───
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const origText = btn ? btn.innerHTML : '';

      if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
      }

      // Simulate send delay
      setTimeout(function () {
        if (btn) {
          btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          btn.style.background = '#61CE70';
        }

        setTimeout(function () {
          form.reset();
          if (btn) {
            btn.innerHTML = origText;
            btn.style.background = '';
            btn.disabled = false;
          }
        }, 2500);
      }, 1500);
    });
  });

  // ─── Smooth Scroll for Anchor Links ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = header ? header.offsetHeight + 20 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

});
