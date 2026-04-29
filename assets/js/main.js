// ===================================
// We Are Auctions - Website JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const contactForm = document.getElementById('contact-form');

  function updateNavbarState() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  }

  function openMenu() {
    if (!navMenu || !mobileMenuToggle) return;
    navMenu.classList.add('active');
    document.body.classList.add('menu-open');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    if (!navMenu || !mobileMenuToggle) return;
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }

  updateNavbarState();
  window.addEventListener('scroll', updateNavbarState, { passive: true });

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function(event) {
    if (!navMenu || !mobileMenuToggle) return;

    const clickInsideMenu = navMenu.contains(event.target);
    const clickOnToggle = mobileMenuToggle.contains(event.target);

    if (!clickInsideMenu && !clickOnToggle && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      const href = this.getAttribute('href');

      if (href === '#') {
        event.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 86;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const revealElements = document.querySelectorAll('.reveal, .value-card, .feature-card, .pricing-card, .team-card, .stat-item');
  revealElements.forEach(element => element.classList.add('will-reveal'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('visible'));
  }

  function animateCounter(element) {
    const target = Number.parseInt(element.getAttribute('data-count'), 10);
    const prefix = element.getAttribute('data-prefix') || '';
    const suffix = element.getAttribute('data-suffix') || '';

    if (Number.isNaN(target)) return;

    const duration = 1300;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);

      element.textContent = prefix + value + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    }

    window.requestAnimationFrame(tick);
  }

  const statItems = document.querySelectorAll('.stat-item');

  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const number = entry.target.querySelector('.stat-number');
        if (number && !number.classList.contains('counted')) {
          number.classList.add('counted');
          animateCounter(number);
        }

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    statItems.forEach(item => statObserver.observe(item));
  } else {
    document.querySelectorAll('.stat-number').forEach(animateCounter);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      clearFormErrors(contactForm);

      const formData = {
        name: document.getElementById('name')?.value.trim(),
        email: document.getElementById('email')?.value.trim(),
        phone: document.getElementById('phone')?.value.trim(),
        company: document.getElementById('company')?.value.trim(),
        message: document.getElementById('message')?.value.trim()
      };

      let isValid = true;

      if (!formData.name) {
        showError('name', 'Please enter your name.');
        isValid = false;
      }

      if (!formData.email || !isValidEmail(formData.email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
      }

      if (!formData.message) {
        showError('message', 'Please add a short message.');
        isValid = false;
      }

      if (!isValid) return;

      const submitButton = contactForm.querySelector('.submit-button');

      if (submitButton) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
      }

      try {
        await simulateFormSubmission(formData);
        showSuccessMessage('Thank you. We will be in touch soon.');
        contactForm.reset();
      } catch (error) {
        console.error('Form submission error:', error);
        showSuccessMessage('Sorry, something went wrong. Please email info@weareauctions.com.');
      } finally {
        if (submitButton) {
          submitButton.classList.remove('loading');
          submitButton.disabled = false;
        }
      }
    });
  }

  function clearFormErrors(form) {
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error');
      const field = group.querySelector('input, textarea');
      const error = group.querySelector('.form-error');

      if (field) {
        field.removeAttribute('aria-invalid');
      }

      if (error) {
        error.textContent = '';
      }
    });
  }

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    const formGroup = field.closest('.form-group');
    const errorElement = formGroup?.querySelector('.form-error');

    field.setAttribute('aria-invalid', 'true');
    formGroup?.classList.add('error');

    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showSuccessMessage(message) {
    const successDiv = document.querySelector('.success-message');
    if (!successDiv) return;

    successDiv.textContent = message;
    successDiv.classList.add('show');

    window.setTimeout(() => {
      successDiv.classList.remove('show');
    }, 6000);
  }

  function simulateFormSubmission(data) {
    console.log('Form submission payload:', data);

    return new Promise(resolve => {
      window.setTimeout(() => resolve({ success: true }), 900);
    });
  }
});
