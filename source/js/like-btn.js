var buttons = document.querySelectorAll('.user-card__like-btn');

var addThumbnailClickHandler = function (button) {
  button.addEventListener('click', function() {
    if (button.classList.contains('user-card__like-btn--off')) {
      button.classList.remove('user-card__like-btn--off');
      button.classList.add('user-card__like-btn--on');
    } else {
      button.classList.add('user-card__like-btn--off');
      button.classList.remove('user-card__like-btn--on');
    }
  });
};

for (var i = 0; i < buttons.length; i++) {
    addThumbnailClickHandler(buttons[i]);
}
