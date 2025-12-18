document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
  initActiveNavLinks();
  initScrollAnimations();
});

function initMobileMenu() {
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const nav = document.querySelector('.header__nav');
  
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('header__nav--active');
      const isActive = nav.classList.contains('header__nav--active');
      mobileToggle.setAttribute('aria-expanded', isActive);
      mobileToggle.innerHTML = isActive ? '✕' : '☰';
    });
    
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.header__nav') && !e.target.closest('.header__mobile-toggle')) {
        nav.classList.remove('header__nav--active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '☰';
      }
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'var(--primary-coral)';
        } else {
          input.style.borderColor = '#e0e0e0';
        }
      });
      
      const emailInputs = form.querySelectorAll('input[type="email"]');
      emailInputs.forEach(input => {
        if (input.value && !isValidEmail(input.value)) {
          isValid = false;
          input.style.borderColor = 'var(--primary-coral)';
        }
      });
      
      if (isValid) {
        showFormSuccess(form);
      } else {
        showFormError('Please fill in all required fields correctly.');
      }
    });
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showFormSuccess(form) {
  const successMessage = document.createElement('div');
  successMessage.className = 'form-message form-message--success';
  successMessage.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 8px;
    text-align: center;
  `;
  successMessage.textContent = 'Thank you! Your message has been received. We will get back to you soon.';
  
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  form.appendChild(successMessage);
  form.reset();
  
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
}

function showFormError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-message form-message--error';
  errorDiv.style.cssText = `
    padding: 1rem;
    margin: 1rem 0;
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    text-align: center;
  `;
  errorDiv.textContent = message;
  
  const form = document.querySelector('form');
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  form.insertBefore(errorDiv, form.firstChild);
  
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

function initActiveNavLinks() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('header__nav-link--active');
    }
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.card, .testimonial, .stat');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

function animateStats() {
  const stats = document.querySelectorAll('.stat__number');
  
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target;
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(stat);
  });
}

if (document.querySelector('.stat__number[data-target]')) {
  animateStats();
}
