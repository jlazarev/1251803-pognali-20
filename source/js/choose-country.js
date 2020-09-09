var chooseButton = document.querySelector('.step__country-item--choose');
var nameButton = document.querySelector('.step__country-name--choose');


nameButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (chooseButton.classList.contains('step__country-item--close')) {
    chooseButton.classList.remove('step__country-item--close');
    chooseButton.classList.add('step__country-item--open');
  } else {
    chooseButton.classList.add('step__country-item--close');
    chooseButton.classList.remove('step__country-item--open');
  }
});
