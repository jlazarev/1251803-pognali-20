var chooseButton = document.querySelector('.step__contry-item--choose');
var nameButton = document.querySelector('.step__country-name--choose');


nameButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (chooseButton.classList.contains('step__contry-item--close')) {
    chooseButton.classList.remove('step__contry-item--close');
    chooseButton.classList.add('step__contry-item--open');
  } else {
    chooseButton.classList.add('step__contry-item--close');
    chooseButton.classList.remove('step__contry-item--open');
  }
});
