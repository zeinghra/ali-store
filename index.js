const navToggler = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');
const htmlEl = document.documentElement;

navToggler.addEventListener('click', () => {
  navToggler.classList.contains('active') ? closeMenu() : openMenu();
});

function openMenu() {
  // make the menu appear
  navToggler.classList.add('active');
  navbar.classList.add('active');
  // add event listener to the html element on a time out so the function isn't fired immediately
  setTimeout(() => {
    htmlEl.addEventListener('click', closeMenuOnBodyClick);
  }, 500);
}

function closeMenuOnBodyClick(event) {
  // get the event path
  const path = event.composedPath();
  // check if it has the menu element
  if (path.some((elem) => elem === navbar)) {
    // terminate this function if it does
    return;
  }
  closeMenu();
}

function closeMenu() {
  htmlEl.removeEventListener('click', closeMenuOnBodyClick);
  navToggler.classList.remove('active');
  navbar.classList.remove('active');
}

/*
 * Header scroll state
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  header.classList[window.scrollY > 40 ? 'add' : 'remove']('active');
});
