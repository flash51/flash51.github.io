const cursor = document.querySelector('.cursor-dot');
const interactive = document.querySelectorAll('a, .case-card, .metric-card');

if (cursor && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    cursor.style.transform = `translate(${event.clientX - 5}px, ${event.clientY - 5}px)`;
  });
  interactive.forEach((item) => {
    item.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
  });
}

const revealTargets = document.querySelectorAll('.metric-card, .case-card, .career-row, .method-step');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach((target) => revealObserver.observe(target));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('nav a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-40% 0px -52% 0px' });
sections.forEach((section) => sectionObserver.observe(section));
