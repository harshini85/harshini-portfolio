// ==========================================================================
// SCRIPT.JS - Interactive Portfolio Features
// Tailored for 1st-Year CSE Students
// (1) Dark / Light Mode Toggle Button with Local Storage
// (2) Smooth Scrolling when clicking navigation links
// (3) Floating "Back to Top" Button that appears on scroll
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Harshini.S's Portfolio!");

  // --------------------------------------------------------------------------
  // 1. DARK / LIGHT MODE TOGGLE
  // Creates a toggle button in the header and remembers visitor preference
  // --------------------------------------------------------------------------
  const navMenu = document.querySelector('.nav-menu');
  
  // Create toggle button element dynamically
  const themeBtn = document.createElement('button');
  themeBtn.id = 'theme-toggle';
  themeBtn.className = 'theme-toggle-btn';
  themeBtn.setAttribute('aria-label', 'Toggle light/dark theme');
  themeBtn.innerHTML = '🌙'; // Default moon icon for dark mode

  // Add the button to the header navigation if it exists
  if (navMenu) {
    navMenu.prepend(themeBtn);
  }

  // Check if visitor previously chose light mode in browser memory (localStorage)
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeBtn.innerHTML = '☀️'; // Sun icon for light mode
  }

  // Click event: Toggle between dark and light themes
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');

    // Update icon and save preference
    themeBtn.innerHTML = isLight ? '☀️' : '🌙';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  });

  // --------------------------------------------------------------------------
  // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
  // Ensures smooth animation when clicking #about, #skills, #projects, etc.
  // --------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Ignore bare "#" links
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault(); // Prevents default abrupt jump

        // Smoothly scroll to the section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. "BACK TO TOP" FLOATING BUTTON
  // Hidden by default; appears when the user scrolls down 300px
  // --------------------------------------------------------------------------
  // Create the button element dynamically
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'back-to-top';
  backToTopBtn.className = 'back-to-top-btn';
  backToTopBtn.setAttribute('aria-label', 'Scroll back to top');
  backToTopBtn.innerHTML = '↑';
  document.body.appendChild(backToTopBtn);

  // Listen for window scroll events
  window.addEventListener('scroll', () => {
    // If scrolled down more than 300 pixels, show button; otherwise hide it
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // When clicked, smoothly glide back to the top of the page
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --------------------------------------------------------------------------
  // 4. DYNAMIC YEAR IN FOOTER
  // Automatically keeps the copyright year current
  // --------------------------------------------------------------------------
  const copyrightText = document.querySelector('.site-footer p');
  if (copyrightText) {
    const currentYear = new Date().getFullYear();
    copyrightText.innerHTML = `&copy; ${currentYear} Harshini.S. Built with clean HTML, CSS, and JavaScript.`;
  }
});
