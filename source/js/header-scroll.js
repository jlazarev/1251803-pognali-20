var header = document.querySelector('.page-header');

window.addEventListener('scroll', function () {
  if (window.scrollY == 0) {
    header.classList.remove('page-header--scroll');
  } else {
    header.classList.add('page-header--scroll');
  }
});
