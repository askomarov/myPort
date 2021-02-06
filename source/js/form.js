const formValidator = () => {
  let form = document.querySelector(".form");
  let inputCarName = document.querySelector('#carName');
  let inputOwnerTel = document.querySelector("#ownerTel");

  inputCarName.addEventListener("focus", function () {
    if (!inputCarName.value) {
      inputCarName.classList.remove("form__input--error");
    }
  });
  inputOwnerTel.addEventListener("focus", function () {
    if (!inputOwnerTel.value) {
      inputOwnerTel.classList.remove("form__input--error");
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!inputCarName.value) {
      evt.preventDefault();
      inputCarName.classList.add("form__input--error");
    } else {
      inputCarName.classList.remove("form__input--error");
    }
    if (!inputOwnerTel.value) {
      evt.preventDefault();
      inputOwnerTel.classList.add("form__input--error");
    } else {
      inputOwnerTel.classList.remove("form__input--error");
    }
  });
}
// export { formValidator };
