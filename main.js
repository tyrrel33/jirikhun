'use strict';

// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll styling
const nav = document.getElementById('mainNav');
function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 60); }
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Hamburger menu
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Submit button loading state (text lokalizovaný přes data-sending atribut)
const form = document.querySelector('form.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('.form__submit');
    btn.textContent = btn.dataset.sending || 'Sending…';
    btn.disabled = true;
  });
}
