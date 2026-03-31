/* ═══════════════════════════════════════
   Main JS — Diligo Strategy
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // i18n
  I18N.init();

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile menu
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Hamburger animation
  const style = document.createElement('style');
  style.textContent = `
    .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav-hamburger.open span:nth-child(2) { opacity: 0; }
    .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `;
  document.head.appendChild(style);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + (target > 100 ? '+' : '+');
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Scroll animations (AOS-like)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counter animation
        if (entry.target.querySelector('.stat-num[data-count]')) {
          entry.target.querySelectorAll('.stat-num[data-count]').forEach(animateCounter);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-aos], .hero-stats, .about-card, .process-step').forEach(el => {
    observer.observe(el);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Cookie banner
  const cookieBanner = document.getElementById('cookieBanner');
  if (!localStorage.getItem('diligo_cookies')) {
    setTimeout(() => cookieBanner.classList.add('show'), 1500);
  }
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('diligo_cookies', '1');
    cookieBanner.classList.remove('show');
  });

  // Form submission feedback
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
  });

});
