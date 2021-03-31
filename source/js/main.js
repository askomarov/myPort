// import { formValidator } from './form.min.js';
// import { filterItems } from './catalog-filter.js';

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
const catalogFilter = document.querySelector('.catalog-filter')
const allItems = document.querySelectorAll('.catalog-item');

const checkBoxes = document.querySelectorAll('.catalog-filter__checkbox');
const checkAllBox = document.querySelector('#check-all');

const filterItems = () => {

  checkBoxes.forEach(checkbox => {

    checkbox.addEventListener('click', () => {
      allItems.forEach(item => {
        if (item.dataset.filter == checkbox.value && checkbox.checked === true
        ) {
          item.classList.add('active');
        }
        if (item.dataset.filter == checkbox.value && checkbox.checked === false
        ) {
          item.classList.remove('active');
          checkAllBox.checked = false;
        }
      });

      if (checkbox.value == "check-all" && checkbox.checked === true) {
        checkBoxes.forEach(checkbox => {
          checkbox.checked = true;
        })
        allItems.forEach(item => {
          item.classList.add('active');
        })
      }
      if (checkbox.value == "check-all" && checkbox.checked === false) {
        checkBoxes.forEach(checkbox => {
          checkbox.checked = false;
        })
        allItems.forEach(item => {
          item.classList.remove('active');
        })
      }

      checkAll();
    })

  })

};

const checkAll = () => {
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[0].checked
      && checkBoxes[1].checked
      && checkBoxes[2].checked) {
      checkBoxes[3].checked = true;
    } else {
      checkBoxes[3].checked = false;
    }
  }
};

filterItems();
