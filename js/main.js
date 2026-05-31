/* ============================================================
   MALUTI PEAK SOLUTIONS — Main JavaScript
   Handles: navigation, mobile menu, smooth scroll, form
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Sticky Nav + Scroll Behaviour ─────────────────────── */
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 24px rgba(13,31,60,0.35)';
    } else {
      nav.style.boxShadow = '0 2px 16px rgba(13,31,60,0.3)';
    }
    /* ── Portfolio & Blog Filter Buttons ────────────────────── */
document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Update active button
    const allBtns = btn.closest('[data-aos]') 
      ? btn.parentElement.querySelectorAll('.filter-btn')
      : document.querySelectorAll('.filter-btn');
    btn.parentElement.querySelectorAll('.filter-btn').forEach(function (b) {
      b.classList.remove('filter-btn--active');
    });
    btn.classList.add('filter-btn--active');

    const filter = btn.getAttribute('data-filter');

    // Find the cards grid (next sibling .row)
    const grid = btn.closest('.d-flex').nextElementSibling;
    if (!grid) return;

    grid.querySelectorAll('[data-category]').forEach(function (card) {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
  });

  /* ── Mobile Hamburger Menu ──────────────────────────────── */
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks  = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav__link, .nav__dropdown-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Mobile Dropdown Toggle ─────────────────────────────── */
  // On mobile, tap the "Services" link to expand/collapse the dropdown
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.nav__link--has-dropdown').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdown = link.nextElementSibling;
        if (dropdown) {
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  }

  /* ── Active Nav Link Highlighting ──────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href.endsWith(currentPath))) {
      link.classList.add('nav__link--active');
    }
  });

  /* ── Smooth Scroll for Anchor Links ────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* ── Intersection Observer: Fade-in Animations ──────────── */
  const fadeEls = document.querySelectorAll('.service-card, .blog-card, .portfolio-card, .value-card, .team-card, .why-list__item');

  if ('IntersectionObserver' in window && fadeEls.length) {
    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          // Slight stagger delay based on position in parent
          const siblings = Array.from(entry.target.parentNode.children);
          const delay = siblings.indexOf(entry.target) * 80;
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  /* ── Contact Form Handling (Formspree) ──────────────────── */
  const contactForm = document.querySelector('.contact-form form');
  const successMsg  = document.querySelector('.alert--success');
  const errorMsg    = document.querySelector('.alert--error');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          if (successMsg) { successMsg.style.display = 'block'; }
          if (errorMsg)   { errorMsg.style.display   = 'none';  }
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        if (errorMsg)   { errorMsg.style.display   = 'block'; }
        if (successMsg) { successMsg.style.display = 'none';  }
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  /* ── Logo image fallback ────────────────────────────────── */
  // If logo image fails to load, show text fallback
  document.querySelectorAll('.nav__logo-img, .footer__logo').forEach(function (img) {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      const fallback = this.nextElementSibling;
      if (fallback) fallback.style.display = 'block';
    });
  });

});
