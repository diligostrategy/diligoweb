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

  // Lead capture modal for resources
  const leadModal = document.getElementById('leadModal');
  const leadClose = document.getElementById('leadClose');
  const leadForm = document.getElementById('leadForm');
  const leadResource = document.getElementById('leadResource');

  document.querySelectorAll('.dl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      leadResource.value = btn.dataset.resource;
      leadModal.classList.add('show');
      if (I18N) I18N.apply(); // re-apply i18n to modal
    });
  });

  leadClose.addEventListener('click', () => leadModal.classList.remove('show'));
  leadModal.addEventListener('click', e => { if (e.target === leadModal) leadModal.classList.remove('show'); });

  leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = leadForm.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = '...';
    btn.disabled = true;

    const data = {
      name: leadForm.name.value,
      email: leadForm.email.value,
      resource: leadResource.value,
      date: new Date().toISOString(),
    };

    // Subscribe to Mailchimp via hidden form POST (most reliable, no CORS)
    try {
      const mcForm = document.createElement('iframe');
      mcForm.name = 'mc_iframe_' + Date.now();
      mcForm.style.display = 'none';
      document.body.appendChild(mcForm);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://diligostrategy.us19.list-manage.com/subscribe/post?u=7626df4e69bf6c5255724817a&id=57ea000f96';
      form.target = mcForm.name;

      const lang = I18N ? I18N.current : 'en';
      const resourcePath = lang === 'es' ? 'es/' + data.resource : data.resource;
      const fields = { EMAIL: data.email, FNAME: data.name, RESOURCE: resourcePath };
      for (const [k, v] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden'; input.name = k; input.value = v;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => { form.remove(); mcForm.remove(); }, 5000);
    } catch (err) { /* fail silently */ }

    // Show success — tell user to check email
    const lang = I18N ? I18N.current : 'en';
    const thankMsg = lang === 'es'
      ? '¡Gracias! Revisa tu email para descargar el recurso.'
      : 'Thank you! Check your email for the download link.';
    leadForm.innerHTML = '<div style="text-align:center;padding:20px 0"><div style="font-size:3rem;margin-bottom:12px">&#9993;</div><p style="font-weight:600;font-size:16px">' + thankMsg + '</p></div>';
    setTimeout(() => {
      leadModal.classList.remove('show');
      setTimeout(() => {
        leadForm.innerHTML = '<input type="text" name="name" placeholder="Your Name" required><input type="email" name="email" placeholder="Your Email" required><input type="hidden" name="resource" id="leadResource"><button type="submit" class="btn btn-primary btn-full">Download Free</button>';
        if (I18N) I18N.apply();
      }, 300);
    }, 3000);
  });

  // Footer newsletter subscription
  const nlForm = document.getElementById('footerNlForm');
  nlForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = nlForm.email.value;
    const btn = nlForm.querySelector('button');
    const origText = btn.textContent;
    btn.textContent = '...';
    btn.disabled = true;

    try {
      const mcFrame = document.createElement('iframe');
      mcFrame.name = 'mc_nl_' + Date.now();
      mcFrame.style.display = 'none';
      document.body.appendChild(mcFrame);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://diligostrategy.us19.list-manage.com/subscribe/post?u=7626df4e69bf6c5255724817a&id=57ea000f96';
      form.target = mcFrame.name;

      const fields = { EMAIL: email, RESOURCE: 'newsletter' };
      for (const [k, v] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden'; input.name = k; input.value = v;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => { form.remove(); mcFrame.remove(); }, 5000);
    } catch (e) {}

    const lang = I18N ? I18N.current : 'en';
    nlForm.innerHTML = '<p style="color:#26c6da;font-weight:600;text-align:center">' + (lang === 'es' ? '¡Suscrito! Revisa tu email.' : 'Subscribed! Check your email.') + '</p>';
  });

});
