document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const setNav = (open) => {
  mainNav.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
navToggle.addEventListener('click', () => setNav(!mainNav.classList.contains('open')));
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNav(false)));
document.addEventListener('click', (e) => {
  if (mainNav.classList.contains('open') && !e.target.closest('#site-header')) setNav(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('open')) { setNav(false); navToggle.focus(); }
});

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.intro-inner, .service-block, .work-intro, .work-card, .team-intro, .team-photo-wrap, .team-card, .cta-content'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
