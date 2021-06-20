
const openMenu = (btn, menu) => {
  menu.classList.add("site-list--open");
  btn.setAttribute("aria-label", "close menu");
  btn.setAttribute("aria-expanded", "true");
};

const closeMenu = (btn, menu) => {
  menu.classList.remove("site-list--open");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-label", "open menu");
};

const headerMenuToggler = (btn, menu) => {
  btn.addEventListener("click", () => {
    if (menu.classList.contains("site-list--open")) {
      closeMenu(btn, menu);
    } else {
      openMenu(btn, menu);
    }
  });
};

export { headerMenuToggler };
