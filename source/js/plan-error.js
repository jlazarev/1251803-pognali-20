var formItems = document.querySelectorAll('.form__item');
var formPlans = document.querySelectorAll('.form__plan');
var addPlanForm = document.querySelector('.add-plan__form');

var submitError = function (formPlan, formItem) {
  addPlanForm.addEventListener("submit", function (evt) {
    if (!formPlan.value) {
      evt.preventDefault();
      formItem.classList.remove("form__item--error");
      formItem.offsetWidth = formItem.offsetWidth;
      formItem.classList.add("form__item--error");
    }
  });

  formPlan.addEventListener("click", function () {
    formItem.classList.remove("form__item--error");
  });
};

for (var i = 0; i < formItems.length; i++) {
  submitError(formPlans[i], formItems[i]);
}
