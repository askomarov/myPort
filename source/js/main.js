import { filterItems } from './catalog-filter.js';
import { showLinkOnTop } from './link-on-top.js';




let headerMenuToggle = document.querySelector(".header-menu__toggle");
let headerMenu = document.querySelector(".site-list");

const headerMenuToggler = () => {
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
}

filterItems();

showLinkOnTop();

const skilsList = document.querySelector('.skills__list');
const skillsItems = skilsList.querySelectorAll('.skills__item');

// window.onscroll = () => {
//   // console.log('прокрутили на ' + window.pageYOffset);
//   // console.log('клиент высота' + document.body.clientHeight);
//   if (window.pageYOffset + document.body.clientHeight > skilsList.offsetTop + 50) {
//     // console.log('title :' + skilsList.offsetTop);
//     skilsList.classList.add('magick');
//   } else { skilsList.classList.remove('magick'); }
// }


let page = document.querySelector(".page");

document.addEventListener("DOMContentLoaded", () => {
  page.classList.remove('no-js');
  headerMenuToggler();

  window.onscroll = () => {
    // console.log('прокрутили на ' + window.pageYOffset);
    // console.log('клиент высота' + document.body.clientHeight);
    if (window.pageYOffset + document.body.clientHeight > skilsList.offsetTop + 50) {
      skilsList.classList.add('magick');
    } else {
      skilsList.classList.remove('magick');
    }
  };


});
