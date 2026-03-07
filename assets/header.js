
const menuOpenBtn = document.querySelector('.custome_header__menu-open');
const menuCloseBtn = document.querySelector('.custome_header__menu-close');
const menu = document.querySelector('.custome_header__menu');

menuOpenBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

const menuLinks = document.querySelectorAll('.custome_header_menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});


document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuOpenBtn.contains(e.target)) {
    menu.classList.remove('active');
  }
});