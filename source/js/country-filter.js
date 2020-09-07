var filter = document.querySelector('.country-filter');
var buttonOpen = document.querySelector('.country-filter__toggle');
var buttonClose = document.querySelector('.country-filter__close');

buttonOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (filter.classList.contains('country-filter--close')) {
    filter.classList.remove('country-filter--close');
    filter.classList.add('country-filter--open');
  } else {
    filter.classList.add('country-filter--close');
    filter.classList.remove('country-filter--open');
  }
});

buttonClose.addEventListener('click', function() {
  filter.classList.remove('country-filter--open');
  filter.classList.add('country-filter--close');
});
