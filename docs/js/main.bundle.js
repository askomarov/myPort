!function(e){var t={};function i(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(o,c,function(t){return e[t]}.bind(null,c));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const o=document.querySelectorAll(".catalog-filter__checkbox"),c=document.querySelector("#check-all"),a=()=>{for(let e=0;e<o.length;e++)o[0].checked&&o[1].checked?c.checked=!0:c.checked=!1},r=document.querySelector(".link-on-top"),s=(e,t)=>{t.innerHTML="";const i=document.querySelector("#catalog-item").content.querySelector(".catalog-item"),o=document.createDocumentFragment();e.forEach(e=>{const t=i.cloneNode(!0),c=e.dataFilter;t.setAttribute("data-filter",c),e.classActive||t.classList.remove("active"),t.querySelector(".catalog-item__title").textContent=e.projectName,t.querySelector(".catalog-item__img img").src="img/"+e.img,void 0!==e.img2x&&(t.querySelector(".catalog-item__img img").srcset=`img/${e.img2x} 2x`),void 0!==e.imgTypeWebp1x&&(t.querySelector(".catalog-item__img picture").firstElementChild.setAttribute("srcset",`img/${e.imgTypeWebp1x} 1x`),void 0!==e.imgTypeWebp2x&&t.querySelector(".catalog-item__img picture").firstElementChild.setAttribute("srcset",`img/${e.imgTypeWebp1x} 1x, img/${e.imgTypeWebp2x} 2x`)),t.querySelector(".catalog-item__img img").alt=e.imgAlt,t.querySelector(".catalog-item__desc").textContent=e.projectDesc,t.querySelector(".catalog-item__btn").href=e.projectLink,t.querySelector(".catalog-item__title-link").href=e.projectLink,t.querySelector(".catalog-item__repo-link").href=e.projectGithubLink,o.appendChild(t)}),t.appendChild(o)},m=[{projectName:"SmartDevice",classActive:!0,dataFilter:"html-css",img:"welcome.jpg",img2x:void 0,imgTypeWebp1x:"smartdevice-desktop.webp",imgTypeWebp2x:void 0,imgAlt:"превью сайта SmartDevice",projectLink:"#",projectGithubLink:"#",projectDesc:"Удаленная стажировка - Акселератор HTML Academy. Работа по техническому заданию и с критериями качества"},{projectName:"Велосипеды",classActive:!0,dataFilter:"html-css",img:"bikes-tablet.jpg",img2x:"bikes-tablet@2x.jpg",imgTypeWebp1x:"bikes-tablet.webp",imgTypeWebp2x:"bikes-tablet@2x.webp",imgAlt:"превью сайта велосипедов",projectLink:"https://askomarov.github.io/bicycle/",projectGithubLink:"https://github.com/askomarov/bicycle",projectDesc:"Проект выполнен в рамках обучения работе в команде - Акселератор HTML Academy. Работа по техническому заданию с критериями качества, с использованием сборки Лиги А"},{projectName:"Путешествия",classActive:!0,dataFilter:"html-css",img:"komarov-way-2.jpg",img2x:void 0,imgTypeWebp1x:"komarov-way-2.webp",imgTypeWebp2x:void 0,imgAlt:"Превью сайт о путешествиях",projectLink:"https://askomarov.github.io/komarov_way/",projectGithubLink:"https://github.com/askomarov/komarov_way",projectDesc:"Адаптивная страница. С использованием gulp, препроцессоров, адаптивных изображений. Не много JavaScript"},{projectName:"Попутчики",classActive:!0,dataFilter:"html-css",img:"img-pognali@1xdesktop.jpg",img2x:void 0,imgTypeWebp1x:"img-pognali@1xdesktop.webp",imgTypeWebp2x:void 0,imgAlt:"Превью сайт попутчиков для путешествий",projectLink:"https://askomarov.github.io/pognaliHtmlAcademy/",projectGithubLink:"https://github.com/askomarov/pognaliHtmlAcademy",projectDesc:"Адаптивный трех-страничный сайт, с огромным количеством трудоемких элементов, оживленный с помощью JavaScript. С использованием gulp, препроцессоров, адаптивных изображений"},{projectName:"Рукоделие",classActive:!0,dataFilter:"html-css",img:"mishka-preview.jpg",img2x:void 0,imgTypeWebp1x:"mishka-preview.webp",imgTypeWebp2x:void 0,imgAlt:"Превью сайт вязанные вещи ручной работы",projectLink:"https://askomarov.github.io/mishka/",projectGithubLink:"https://github.com/askomarov/mishka",projectDesc:"Адаптивный трех-страничный mobile-first сайт. С использованием сборки gulp, препроцессора Sass.Не много JavaScript"},{projectName:"Корм для кошек",classActive:!0,dataFilter:"html-css",img:"img-catenergy.jpg",img2x:"img-catenergy@2x.jpg",imgTypeWebp1x:"img-catenergy.webp",imgTypeWebp2x:"img-catenergy@2x.webp",imgAlt:"Превью сайт питание для кошек",projectLink:"https://askomarov.github.io/CatFromAcademy/index.html",projectGithubLink:"https://github.com/askomarov/CatFromAcademy",projectDesc:"Адаптивный трех-страничный сайт. С использованием gulp, препроцессоров, адаптивных изображений"},{projectName:"Магазин мороженого",classActive:!0,dataFilter:"html-css",img:"img-gllacy.jpg",img2x:"img-gllacy@2x.jpg",imgTypeWebp1x:"img-gllacy.webp",imgTypeWebp2x:"img-gllacy@2x.webp",imgAlt:"Превью сайта мороженного",projectLink:"https://askomarov.github.io/1422707-gllacy-29/",projectGithubLink:"https://github.com/askomarov/1422707-gllacy-29",projectDesc:"Двустраничный, неадаптивный, но красочный сайт"},{projectName:"Туристический город",classActive:!0,dataFilter:"html-css",img:"img-sedona.jpg",img2x:void 0,imgTypeWebp1x:"img-sedona.webp",imgTypeWebp2x:void 0,imgAlt:"превью сайта для туристов города Sedona",projectLink:"https://askomarov.github.io/mySedonaByHtmlAcademy/",projectGithubLink:"https://github.com/askomarov/mySedonaByHtmlAcademy",projectDesc:"Адаптивный трех-страничный сайт. С использованием gulp, препроцессоров"},{projectName:"Элементы форм",classActive:!0,dataFilter:"html-css",img:"img-city.jpg",img2x:"img-city@2x.jpg",imgTypeWebp1x:"img-city.webp",imgTypeWebp2x:"img-city@2x.webp",imgAlt:"Превью пример стилизации элементов форм",projectLink:"https://askomarov.github.io/filter/",projectGithubLink:"https://github.com/askomarov/filter",projectDesc:"Пример списка товаров с кастомными элементами формы"}],l=[{projectName:"Кекстаграм",classActive:!1,dataFilter:"javascript",img:"kekstagram.jpg",img2x:void 0,imgTypeWebp1x:void 0,imgTypeWebp2x:void 0,imgAlt:"Превью сайт почти инстаграмм",projectLink:"https://askomarov.github.io/kekstagramByHTMLAcademy/",projectGithubLink:"https://github.com/askomarov/kekstagramByHTMLAcademy",projectDesc:"Учебная работа с онлайн-курса по JavaScript - подобронее в репозитории"},{projectName:"Кексобукинг",classActive:!1,dataFilter:"javascript",img:"keksobooking.jpg",img2x:void 0,imgTypeWebp1x:void 0,imgTypeWebp2x:void 0,imgAlt:"Превью Кексобукинг поиск жилья в Токио",projectLink:"https://askomarov.github.io/keksobookingByHTMLAcademy/",projectGithubLink:"https://github.com/askomarov/keksobookingByHTMLAcademy",projectDesc:"Учебная работа с онлайн-курса по JavaScript - подобронее в репозитории"}],p=(e,t,i)=>{e.length>0&&(t.innerHTML+=e[0],setTimeout(()=>{p(e.slice(1),t,i)},i))},g=document.querySelector(".page"),n=document.querySelector(".header-menu__toggle"),d=document.querySelector(".site-list"),u=document.querySelector(".skills__list"),b=document.querySelector(".promo__container"),h=document.querySelector(".catalog-list--html"),y=document.querySelector(".catalog-list--js"),v=document.querySelector(".hello");document.addEventListener("DOMContentLoaded",()=>{var e,t,i;g.classList.remove("no-js"),(()=>{if(v){g.classList.add("lock");let e=v.querySelector(".hello__typing-text"),t=v.textContent;p(t,e,50),setTimeout(()=>{v.classList.add("loaded"),g.classList.remove("lock")},2500)}})(),t=d,(e=n).addEventListener("click",()=>{t.classList.contains("site-list--open")?((e,t)=>{t.classList.remove("site-list--open"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","open menu")})(e,t):((e,t)=>{t.classList.add("site-list--open"),e.setAttribute("aria-label","close menu"),e.setAttribute("aria-expanded","true")})(e,t)}),s(m,h),s(l,y),(()=>{const e=document.querySelectorAll(".catalog-item");o.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>{e.dataset.filter===t.value&&!0===t.checked&&e.classList.add("active"),e.dataset.filter===t.value&&!1===t.checked&&(e.classList.remove("active"),c.checked=!1)}),"check-all"===t.value&&!0===t.checked&&(o.forEach(e=>{e.checked=!0}),e.forEach(e=>{e.classList.add("active")})),"check-all"===t.value&&!1===t.checked&&(o.forEach(e=>{e.checked=!1}),e.forEach(e=>{e.classList.remove("active")})),a()})})})(),window.onscroll=()=>{window.pageYOffset+document.body.clientHeight>u.offsetTop+50?u.classList.add("magick"):u.classList.remove("magick"),window.pageYOffset>100?r.classList.add("link-on-top--visible"):r.classList.remove("link-on-top--visible")},r&&r.addEventListener("click",e=>{e.preventDefault(),window.scrollTo(0,0)}),document.body.clientWidth>768&&((e=>{const t=e.getBoundingClientRect();e.addEventListener("mousemove",i=>{const o=(i.clientX-t.left)/t.width,c=(i.clientY-t.top)/t.height-.6,a=-(o-.6),r=Math.min(Math.max(a,-.6),.6);e.style.transform=`perspective(1000px) rotateY(${45*r}deg) rotateX(${45*c}deg)`})})(b),(i=b).addEventListener("mouseleave",()=>{i.style.transform="none"}))})}]);
//# sourceMappingURL=main.bundle.js.map