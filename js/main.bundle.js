!function(e){var t={};function c(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);const o=document.querySelectorAll(".catalog-item"),r=document.querySelectorAll(".catalog-filter__checkbox"),l=document.querySelector("#check-all"),n=()=>{for(let e=0;e<r.length;e++)r[0].checked&&r[1].checked?l.checked=!0:l.checked=!1},i=document.querySelector(".link-on-top");let s=document.querySelector(".header-menu__toggle"),a=document.querySelector(".site-list");const d=()=>{s.addEventListener("click",(function(){a.classList.contains("site-list--open")?(this.setAttribute("aria-expanded","false"),this.setAttribute("aria-label","menu"),a.classList.remove("site-list--open")):(a.classList.add("site-list--open"),this.setAttribute("aria-label","close menu"),this.setAttribute("aria-expanded","true"))}))};r.forEach(e=>{e.addEventListener("click",()=>{o.forEach(t=>{t.dataset.filter==e.value&&!0===e.checked&&t.classList.add("active"),t.dataset.filter==e.value&&!1===e.checked&&(t.classList.remove("active"),l.checked=!1)}),"check-all"==e.value&&!0===e.checked&&(r.forEach(e=>{e.checked=!0}),o.forEach(e=>{e.classList.add("active")})),"check-all"==e.value&&!1===e.checked&&(r.forEach(e=>{e.checked=!1}),o.forEach(e=>{e.classList.remove("active")})),n()})}),i&&(i.addEventListener("click",e=>{e.preventDefault(),window.scrollTo(0,0)}),window.onscroll=()=>{window.pageYOffset>100?i.classList.add("link-on-top--visible"):i.classList.remove("link-on-top--visible")});const u=document.querySelector(".skills__list");u.querySelectorAll(".skills__item");let f=document.querySelector(".page");document.addEventListener("DOMContentLoaded",()=>{f.classList.remove("no-js"),d(),window.onscroll=()=>{window.pageYOffset+document.body.clientHeight>u.offsetTop+50?u.classList.add("magick"):u.classList.remove("magick")}})}]);
//# sourceMappingURL=main.bundle.js.map