const root = document.documentElement;

const openMenu = document.querySelector('.menu-btn');
const closeMenus = document.querySelectorAll('[data-close]');
const menu = document.querySelector('#menu');

openMenu.addEventListener('click', function() {
  menu.classList.toggle('open');
});

closeMenus.forEach(btn => {
  btn.addEventListener('click', function() {
    menu.classList.remove('open');
  });
});
