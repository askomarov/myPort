const linkOnTop = document.querySelector('.link-on-top');

const showLinkOnTop = () => {
  if (linkOnTop) {
    linkOnTop.addEventListener('click', () => {
      window.scrollTo(0, 0)
    })

    window.onscroll = function () {            /*функция при прокручивании*/
      if (window.pageYOffset > 100) {				/* если прокрутил больше чем на 200px*/
        linkOnTop.classList.add('active');		/*добавялется класс нашей кнопке и она появляется*/
      } else {
        linkOnTop.classList.remove('active'); /* если меньше то класс удаляется и кнопка исчезает*/
      }
    };
  }
};

export { showLinkOnTop };
