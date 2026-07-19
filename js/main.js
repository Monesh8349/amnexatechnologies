// ---- AMNEXA Technologies — Main JS ----

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // Typing Animation
  const typingText = document.getElementById('typing-text');
  if (typingText) {
    const words = ['Growing Businesses', 'Startups', 'Entrepreneurs', 'Enterprise Solutions'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before typing next word
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  // Navbar: background on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Loading Screen
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    });
  }

  // FAQ Toggle
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const toggle = question.querySelector('.faq-toggle');
      
      item.classList.toggle('active');
      answer.style.display = item.classList.contains('active') ? 'block' : 'none';
      toggle.textContent = item.classList.contains('active') ? '-' : '+';
    });
  });

  // Back to Top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // Portfolio Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portfolioCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact Form - Save to localStorage

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Global function for mobile nav close
function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) mobileNav.classList.remove('open');
}

// Portfolio Modal
const portfolioModal = document.getElementById('portfolioModal');
const modalCloseBtn = document.getElementById('portfolioModalClose');

// Project data
const projectData = {
  'ecommerce': {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern, full-featured e-commerce platform with advanced payment integration, real-time inventory management, and comprehensive analytics dashboard. Built with React and Node.js for optimal performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redis'],
    client: 'Fashion Retail Co.',
    duration: '3 months',
    year: '2024',
    image: '🛒'
  },
  'mobile-banking': {
    title: 'Mobile Banking App',
    category: 'App Development',
    description: 'Secure and user-friendly mobile banking solution with biometric authentication, real-time transaction notifications, and advanced security features. Built with React Native.',
    technologies: ['React Native', 'Firebase', 'Biometric Auth', 'Node.js'],
    client: 'FinTech Solutions',
    duration: '4 months',
    year: '2024',
    image: '📱'
  },
  'business-dashboard': {
    title: 'Business Dashboard',
    category: 'Data Analytics',
    description: 'Real-time analytics and reporting dashboard for business intelligence. Features include customizable widgets, data visualization, automated reporting, and predictive analytics.',
    technologies: ['Power BI', 'Python', 'SQL', 'Azure', 'Tableau'],
    client: 'DataCorp Inc.',
    duration: '2 months',
    year: '2024',
    image: '📊'
  },
  'brand-video': {
    title: 'Brand Video Production',
    category: 'Video Editing',
    description: 'Professional corporate video content with motion graphics, color grading, and sound design. Delivered engaging brand story that increased customer engagement by 45%.',
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    client: 'TechStartups',
    duration: '1 month',
    year: '2024',
    image: '🎬'
  },
  'youtube-thumbnails': {
    title: 'YouTube Thumbnails',
    category: 'Poster Design',
    description: 'Eye-catching thumbnails for YouTube channels and social media. Designed custom graphics that increased click-through rates by 60% across multiple channels.',
    technologies: ['Photoshop', 'Illustrator', 'Canva'],
    client: 'Content Creators',
    duration: 'Ongoing',
    year: '2024',
    image: '🖼️'
  },
  'shopify-store': {
    title: 'Shopify Store',
    category: 'Web Development',
    description: 'Custom Shopify store with theme customization, app integration, and optimized checkout process. Achieved 35% increase in conversion rate.',
    technologies: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'Klaviyo'],
    client: 'Retail Brand',
    duration: '2 months',
    year: '2024',
    image: '🛍️'
  },
  'sales-analytics': {
    title: 'Sales Analytics',
    category: 'Data Analytics',
    description: 'Comprehensive sales analytics and reporting system with automated dashboards, trend analysis, and predictive modeling for sales forecasting.',
    technologies: ['Python', 'Pandas', 'Power BI', 'SQL', 'Excel'],
    client: 'Sales Enterprise',
    duration: '3 months',
    year: '2024',
    image: '📈'
  }
};

// Open portfolio modal
function openPortfolioModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const modalTechnologies = document.getElementById('modalTechnologies');
  const modalMedia = document.getElementById('modalMedia');
  const modalClient = document.getElementById('modalClient');
  const modalDuration = document.getElementById('modalDuration');
  const modalYear = document.getElementById('modalYear');

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  modalClient.textContent = project.client;
  modalDuration.textContent = project.duration;
  modalYear.textContent = project.year;

  // Clear and add technologies
  modalTechnologies.innerHTML = '';
  project.technologies.forEach(tech => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.textContent = tech;
    modalTechnologies.appendChild(tag);
  });

  // Set media
  modalMedia.innerHTML = `<span style="font-size: 80px;">${project.image}</span>`;

  portfolioModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close portfolio modal
function closePortfolioModal() {
  portfolioModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listeners for portfolio cards
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const projectId = card.dataset.project;
    if (projectId) {
      openPortfolioModal(projectId);
    }
  });
});

// Close modal on button click
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closePortfolioModal);
}

// Close modal on backdrop click
if (portfolioModal) {
  portfolioModal.addEventListener('click', (e) => {
    if (e.target === portfolioModal) {
      closePortfolioModal();
    }
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && portfolioModal.classList.contains('active')) {
    closePortfolioModal();
  }
});

// Enhanced animations and micro-interactions
document.addEventListener('DOMContentLoaded', function() {
  
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
  
  // Stagger children animations
  const staggerContainers = document.querySelectorAll('.stagger-children');
  
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });
  
  staggerContainers.forEach(el => staggerObserver.observe(el));
  
  // Parallax effect on hero
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  }
  
  // Mouse tracking for card glow effects
  const cards = document.querySelectorAll('.service-card, .why-card, .portfolio-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
  
  // Smooth counter animation for statistics
  const counters = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        const hasPlus = text.includes('+');
        const hasSlash = text.includes('/');
        const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        const suffix = hasPlus ? '+' : (hasSlash ? text : '');
        
        const updateCounter = () => {
          if (current < numericValue) {
            current += increment;
            target.textContent = Math.ceil(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = numericValue + suffix;
          }
        };
        
        updateCounter();
        counterObserver.unobserve(target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => counterObserver.observe(counter));
  
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.classList.add('ripple');
    
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add floating animation to service icons
  const serviceIcons = document.querySelectorAll('.service-icon');
  serviceIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`;
    icon.classList.add('float-animation');
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Add text highlight effect to headings
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach(heading => {
    const words = heading.textContent.split(' ');
    heading.innerHTML = words.map((word, index) => 
      `<span class="text-highlight" style="transition-delay: ${index * 0.05}s">${word}</span>`
    ).join(' ');
  });
  
});
