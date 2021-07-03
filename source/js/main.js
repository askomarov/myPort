import { headerMenuToggler } from './header-menu.js';
import { filterItems } from './catalog-filter.js';
import { showLinkOnTop, onLinkOnTopClick } from './link-on-top.js';
import { onHoverBLockFollowCursor, cancelParall } from './parall.js';
import { createCatalogItems } from './render-catalog.js';
import { catalogHtml, catalogJs } from './data-catalog.js';

const page = document.querySelector(".page");
const headerMenuToggle = document.querySelector(".header-menu__toggle");
const headerMenu = document.querySelector(".site-list");

const skilsList = document.querySelector('.skills__list');
const promo = document.querySelector('.promo__container');


// родитель в который надо вставить сгенирированыне элементы
const catalogListHtml = document.querySelector('.catalog-list--html');
const catalogListJs = document.querySelector('.catalog-list--js');


document.addEventListener("DOMContentLoaded", () => {
  page.classList.remove('no-js');

  headerMenuToggler(headerMenuToggle, headerMenu);

  createCatalogItems(catalogHtml, catalogListHtml);
  createCatalogItems(catalogJs, catalogListJs);

  filterItems();

  window.onscroll = () => {
    // console.log('прокрутили на ' + window.pageYOffset);
    // console.log('высота viewport ' + document.body.clientHeight);
    if (window.pageYOffset + document.body.clientHeight > skilsList.offsetTop + 50) {
      skilsList.classList.add('magick');
    } else {
      skilsList.classList.remove('magick');
    }
    showLinkOnTop();
  };

  onLinkOnTopClick();

  if (document.body.clientWidth > 768) {
    onHoverBLockFollowCursor(promo);
    cancelParall(promo);
  }
});



