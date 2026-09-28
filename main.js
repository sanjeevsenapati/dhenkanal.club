import { translations } from './translations.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- EXISTING CODE ---
  const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stagger-container');
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  animatedElements.forEach(el => observer.observe(el));

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });
  }

  // --- I18N LOGIC ---
  let currentLang = 'en';
  const langToggleBtn = document.getElementById('lang-toggle');
  const i18nElements = document.querySelectorAll('[data-i18n]');

  const updateLanguage = () => {
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
    langToggleBtn.textContent = currentLang === 'en' ? 'ଓଡ଼ିଆ' : 'English';
  };

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'or' : 'en';
    updateLanguage();
    
    // Refresh the currently active timeline step text manually if needed
    const activeStep = document.querySelector('.interactive-step.active');
    if (activeStep) {
      activeStep.click(); // Trigger click to refresh the displayed desc/title
    }
  });

  // --- TIMELINE LOGIC ---
  const timelineSteps = document.querySelectorAll('.interactive-step');
  const timelineTitle = document.getElementById('timeline-title');
  const timelineDesc = document.getElementById('timeline-desc');

  if (timelineSteps.length > 0 && timelineTitle && timelineDesc) {
    timelineSteps.forEach(step => {
      step.addEventListener('click', () => {
        timelineSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        
        timelineTitle.style.opacity = 0;
        timelineDesc.style.opacity = 0;
        
        setTimeout(() => {
          // Use translation keys if available, otherwise fallback to data attributes
          const titleKey = step.getAttribute('data-title-key');
          const descKey = step.getAttribute('data-desc-key');
          
          if (titleKey && translations[currentLang][titleKey]) {
            timelineTitle.innerHTML = translations[currentLang][titleKey];
            timelineDesc.innerHTML = translations[currentLang][descKey];
          } else {
            timelineTitle.textContent = step.getAttribute('data-title');
            timelineDesc.textContent = step.getAttribute('data-desc');
          }
          
          timelineTitle.style.opacity = 1;
          timelineDesc.style.opacity = 1;
        }, 300);
      });
    });
  }
});
