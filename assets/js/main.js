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

  // ─── Make Entire Property Card Clickable ───
  document.querySelectorAll('.property-card').forEach(function (card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      // Don't navigate if clicking the favorite button
      if (e.target.closest('.property-favorite')) return;
      var link = card.querySelector('.property-info h3 a');
      if (link && link.href) {
        window.location.href = link.href;
      }
    });
  });

  // ─── Properties Page: Pagination + Filters + Sort ───
  var propGrid = document.getElementById('property-grid');
  var paginationEl = document.getElementById('pagination');

  if (propGrid && paginationEl) {
    var PER_PAGE = 6;
    var currentPage = 1;
    var allCards = Array.from(propGrid.querySelectorAll('.property-card'));
    var filteredCards = allCards.slice();

    function showPage(page) {
      currentPage = page;
      var start = (page - 1) * PER_PAGE;
      var end = start + PER_PAGE;

      allCards.forEach(function (c) { c.style.display = 'none'; });
      filteredCards.slice(start, end).forEach(function (c) { c.style.display = ''; });

      var resultsCount = document.getElementById('results-count');
      if (resultsCount) resultsCount.textContent = filteredCards.length;

      renderPagination();
      // Scroll to top of grid
      propGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderPagination() {
      var totalPages = Math.ceil(filteredCards.length / PER_PAGE);
      paginationEl.innerHTML = '';

      if (totalPages <= 1) return;

      // Previous button
      if (currentPage > 1) {
        var prev = document.createElement('a');
        prev.href = '#';
        prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prev.addEventListener('click', function (e) { e.preventDefault(); showPage(currentPage - 1); });
        paginationEl.appendChild(prev);
      }

      // Page numbers
      for (var i = 1; i <= totalPages; i++) {
        (function (pg) {
          if (pg === currentPage) {
            var span = document.createElement('span');
            span.className = 'active';
            span.textContent = pg;
            paginationEl.appendChild(span);
          } else {
            var a = document.createElement('a');
            a.href = '#';
            a.textContent = pg;
            a.addEventListener('click', function (e) { e.preventDefault(); showPage(pg); });
            paginationEl.appendChild(a);
          }
        })(i);
      }

      // Next button
      if (currentPage < totalPages) {
        var next = document.createElement('a');
        next.href = '#';
        next.innerHTML = '<i class="fas fa-chevron-right"></i>';
        next.addEventListener('click', function (e) { e.preventDefault(); showPage(currentPage + 1); });
        paginationEl.appendChild(next);
      }
    }

    function applyAllFilters() {
      var type = document.getElementById('filter-type').value;
      var location = document.getElementById('filter-location').value;
      var status = document.getElementById('filter-status').value;
      var sortVal = document.getElementById('sort-select') ? document.getElementById('sort-select').value : 'newest';

      // Filter
      filteredCards = allCards.filter(function (card) {
        if (type && card.getAttribute('data-type') !== type) return false;
        if (location && card.getAttribute('data-location') !== location) return false;
        if (status && card.getAttribute('data-status') !== status) return false;
        return true;
      });

      // Sort
      if (sortVal === 'price-low') {
        filteredCards.sort(function (a, b) { return (parseInt(a.getAttribute('data-price')) || 0) - (parseInt(b.getAttribute('data-price')) || 0); });
      } else if (sortVal === 'price-high') {
        filteredCards.sort(function (a, b) { return (parseInt(b.getAttribute('data-price')) || 0) - (parseInt(a.getAttribute('data-price')) || 0); });
      }

      // Re-order in DOM
      filteredCards.forEach(function (card) { propGrid.appendChild(card); });

      showPage(1);
    }

    // Bind filter button
    var applyBtn = document.getElementById('apply-filters');
    if (applyBtn) {
      applyBtn.addEventListener('click', applyAllFilters);
    }

    // Bind sort
    var sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', applyAllFilters);
    }

    // Initial render
    showPage(1);
  }

  // ─── View Toggle (Grid/List) ───
  var viewBtns = document.querySelectorAll('.view-toggle button');
  viewBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      viewBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var grid = document.getElementById('property-grid');
      if (!grid) return;
      grid.style.gridTemplateColumns = btn.getAttribute('data-view') === 'list' ? '1fr' : '';
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
