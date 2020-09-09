var items = document.querySelectorAll('.user-filter__fieldset');
var buttons = document.querySelectorAll('.user-filter__legend');

var addThumbnailClickHandler = function (item, button) {
  button.addEventListener('click', function() {
    if (item.classList.contains('user-filter__fieldset--close')) {
      item.classList.remove('user-filter__fieldset--close');
      item.classList.add('user-filter__fieldset--open');
    } else {
      item.classList.add('user-filter__fieldset--close');
      item.classList.remove('user-filter__fieldset--open');
    }
  });
};

for (var i = 0; i < items.length; i++) {
    addThumbnailClickHandler(items[i], buttons[i]);
}
