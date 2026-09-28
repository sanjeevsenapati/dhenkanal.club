document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stagger-container');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      
      if (isVisible) {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-color)';
        navLinks.style.padding = '2rem';
        navLinks.style.border = '1px solid var(--glass-border)';
      }
    });
  }

  // Interactive Timeline Logic
  const timelineSteps = document.querySelectorAll('.interactive-step');
  const timelineTitle = document.getElementById('timeline-title');
  const timelineDesc = document.getElementById('timeline-desc');

  if (timelineSteps.length > 0 && timelineTitle && timelineDesc) {
    timelineSteps.forEach(step => {
      step.addEventListener('click', () => {
        // Remove active class from all
        timelineSteps.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked
        step.classList.add('active');
        
        // Fade out text
        timelineTitle.style.opacity = 0;
        timelineDesc.style.opacity = 0;
        
        // Wait for fade out, then update text and fade in
        setTimeout(() => {
          timelineTitle.textContent = step.getAttribute('data-title');
          timelineDesc.textContent = step.getAttribute('data-desc');
          
          timelineTitle.style.opacity = 1;
          timelineDesc.style.opacity = 1;
        }, 300); // 300ms matches the transition duration in CSS
      });
    });
  }
});
