var ratesPopup = document.querySelector('.rates-business');
var buttonOpen = document.querySelector('.rates__button');
var buttonClose = document.querySelector('.rates-business__button');

buttonOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (ratesPopup.classList.contains('rates-business--close')) {
    ratesPopup.classList.remove('rates-business--close');
    ratesPopup.classList.add('rates-business--open');
  } else {
    ratesPopup.classList.add('rates-business--close');
    ratesPopup.classList.remove('rates-business--open');
  }
});

buttonClose.addEventListener('click', function() {
  ratesPopup.classList.remove('rates-business--open');
  ratesPopup.classList.add('rates-business--close');
});
