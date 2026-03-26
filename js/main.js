const root = document.documentElement;
const inView = 'in-view';

const openMenu = document.querySelector('.menu-btn');
const closeMenus = document.querySelectorAll('[data-close]');
const menu = document.querySelector('#menu');
const scrollAnimate = document.querySelectorAll('.scroll-animate');

openMenu.addEventListener('click', function() {
  menu.classList.toggle('open');
});

closeMenus.forEach(btn => {
  btn.addEventListener('click', function() {
    menu.classList.remove('open');
  });
});

function respondToVisibility(elm, cb) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        cb(true);
        observer.unobserve(elm);
      }
    });
  }, {threshold: 0.2});
  observer.observe(elm);
}

for(const elm of scrollAnimate) {
  respondToVisibility(elm, (isVisible) => {
    if(isVisible) {
      elm.classList.add(inView);
    }
  });
}