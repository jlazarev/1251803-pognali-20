var emailForm = document.querySelector('.authorization__form');
var email = document.querySelector('.authorization__email');

emailForm.addEventListener("submit", function (evt) {
  if (!email.value) {
    evt.preventDefault();
    email.classList.remove("authorization__email--error");
    email.offsetWidth = email.offsetWidth;
    email.classList.add("authorization__email--error");
  }
});

email.addEventListener("click", function () {
  email.classList.remove("authorization__email--error");
});
