document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.querySelector('.menu_open');
  const closeBtn = document.querySelector('.menu_close');
  const menu = document.querySelector('.menu');
  if (openBtn && closeBtn && menu) {
    openBtn.addEventListener('click', function() {
      menu.classList.add('open');
    });
    closeBtn.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  }
});