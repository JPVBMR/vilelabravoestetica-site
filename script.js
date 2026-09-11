// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('nav-mobile');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
