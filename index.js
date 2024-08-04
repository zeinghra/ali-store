const navToggler = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active');
  navbar.classList.toggle('active');
});

/*
 * Header scroll state
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  header.classList[window.scrollY > 40 ? 'add' : 'remove']('active');
});
