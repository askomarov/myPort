import scrollIntoView from 'scroll-into-view';

import { headerMenuToggler } from './header-menu.js';
import { filterItems } from './catalog-filter.js';
import { showLinkOnTop } from './link-on-top.js';
import { onHoverBLockFollowCursor, cancelParall } from './parall.js';
import { createCatalogItems } from './render-catalog.js';
import { catalogHtml, catalogJs } from './data-catalog.js';
import { typing } from './typing.js';
// import { initSmoothScroll } from './smoothScroll.js';

let iOS = () => {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
};

let anchorLinks = document.querySelectorAll('a[href^="#"');
const initSmoothScroll = () => {

  anchorLinks.forEach(link => {

    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      scrollIntoView(scrollTarget);
    });
  });

};

const page = document.querySelector(".page");
const headerMenuToggle = document.querySelector(".header-menu__toggle");
const headerMenu = document.querySelector(".site-list");

const skilsList = document.querySelector('.skills__list');
const promo = document.querySelector('.promo__container');

const contactsList = document.querySelector('.contacts__list-footer');

// родитель в который надо вставить сгенирированыне элементы
const catalogListHtml = document.querySelector('.catalog-list--html');
const catalogListJs = document.querySelector('.catalog-list--js');


const helloBlock = document.querySelector('.hello');
const welcome = () => {
  if (helloBlock) {
    page.classList.add('lock');
    let typingTextParent = helloBlock.querySelector('.hello__typing-text');
    let text = helloBlock.textContent;
    typing(text, typingTextParent, 50)

    setTimeout(() => {
      helloBlock.classList.add('loaded');
      page.classList.remove('lock');
    }, 2500);
  }
};

const helloBtn = document.querySelector('.hello-btn');
const onBtnClickOpenHelloWindow = () => {
  helloBtn.addEventListener('click', () => {
    if (helloBlock.classList.contains('loaded')) {
      helloBlock.classList.remove('loaded');
      setTimeout(() => {
        helloBlock.classList.add('loaded');
      }, 2500)
    }
  })
};

let text2 = document.querySelector('.promo-text__decs');

document.addEventListener("DOMContentLoaded", () => {
  page.classList.remove('no-js');
  welcome();

  headerMenuToggler(headerMenuToggle, headerMenu);

  createCatalogItems(catalogHtml, catalogListHtml);
  createCatalogItems(catalogJs, catalogListJs);

  filterItems();

  window.onscroll = () => {
    // console.log('прокрутили на ' + window.pageYOffset);
    // console.log('высота viewport ' + document.body.clientHeight);
    // if (window.pageYOffset + document.body.clientHeight > skilsList.offsetTop + 50) {
    //   skilsList.classList.add('magick');
    // } else {
    //   skilsList.classList.remove('magick');
    // }
    if (window.pageYOffset + document.body.clientHeight > skilsList.offsetTop + 50) {
      skilsList.classList.remove('magick--hide');
      skilsList.classList.add('magick--show');
    } else {
      skilsList.classList.add('magick--hide');
      skilsList.classList.remove('magick--show');
    }

    if (window.pageYOffset + document.body.clientHeight > contactsList.offsetTop + 50) {
      contactsList.classList.remove('magick--hide');
      contactsList.classList.add('magick--show');
    } else {
      contactsList.classList.add('magick--hide');
      contactsList.classList.remove('magick--show');
    }

    showLinkOnTop();
  };

  if (document.body.clientWidth > 768) {
    onHoverBLockFollowCursor(promo);
    cancelParall(promo);
  }

  if (helloBtn) {
    onBtnClickOpenHelloWindow();
  }

  if (iOS()) {
    initSmoothScroll();
  }
});
