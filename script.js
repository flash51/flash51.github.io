const header = document.querySelector('.site-header');
const links = [...document.querySelectorAll('.nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
