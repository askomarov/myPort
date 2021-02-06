// import { formValidator } from './form.min.js';

let headerMenuToggle = document.querySelector(".header-menu__toggle");
let headerMenu = document.querySelector(".site-list");

headerMenuToggle.addEventListener("click", function () {
  if (headerMenu.classList.contains("site-list--open")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    headerMenu.classList.remove("site-list--open");
  } else {
    headerMenu.classList.add("site-list--open");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

