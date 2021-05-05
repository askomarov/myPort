const linkOnTop = document.querySelector('.link-on-top');

const showLinkOnTop = () => {
  // window.onscroll = () => {            /*функция при прокручивании*/
    if (window.pageYOffset > 100) {				/* если прокрутил больше чем на 100px*/
      linkOnTop.classList.add('link-on-top--visible');		/*добавялется класс нашей кнопке и она появляется*/
    } else {
      linkOnTop.classList.remove('link-on-top--visible'); /* если меньше то класс удаляется и кнопка исчезает*/
    }
  // };
};

const onLinkOnTopClick = () => {
  if (linkOnTop) {
    linkOnTop.addEventListener('click', (evt) => {
      evt.preventDefault();
      window.scrollTo(0, 0);
    })
  }
}

export { showLinkOnTop, onLinkOnTopClick };
