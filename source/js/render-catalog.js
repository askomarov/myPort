const createCatalogItems = (itemsList, catalogListParent) => {
  catalogListParent.innerHTML = '';
  // html шаблон который будем копировать
  const catalogItemTemplate = document.querySelector('#catalog-item').content.querySelector('.catalog-item');
  const similiarItemsFragment = document.createDocumentFragment();

  itemsList.forEach((item) => {
    // копируем шаблон со всем его содержимым true в новую переменную
    const catalogItemElemet = catalogItemTemplate.cloneNode(true);
    const dataFilter = item.dataFilter;
    catalogItemElemet.setAttribute('data-filter', dataFilter);

    if (!item.classActive) {
      catalogItemElemet.classList.remove('active');
    }

    catalogItemElemet.querySelector('.catalog-item__title').textContent = item.projectName;
    catalogItemElemet.querySelector('.catalog-item__img img').src = `img/${item.img}`;

    if (item.img2x !== undefined) {
      catalogItemElemet.querySelector('.catalog-item__img img').srcset = `img/${item.img2x} 2x`;
    }

    if (item.imgTypeWebp1x !== undefined) {
      catalogItemElemet.querySelector('.catalog-item__img picture').firstElementChild.setAttribute('srcset', `img/${item.imgTypeWebp1x} 1x`);
      if (item.imgTypeWebp2x !== undefined) {
        catalogItemElemet.querySelector('.catalog-item__img picture').firstElementChild.setAttribute('srcset', `img/${item.imgTypeWebp1x} 1x, img/${item.imgTypeWebp2x} 2x`);
      }
    }

    catalogItemElemet.querySelector('.catalog-item__img img').alt = item.imgAlt;
    catalogItemElemet.querySelector('.catalog-item__desc').textContent = item.projectDesc;
    catalogItemElemet.querySelector('#projectLink').href = item.projectLink;
    catalogItemElemet.querySelector('.catalog-item__title-link').href = item.projectLink;
    catalogItemElemet.querySelector('.catalog-item__repo-link').href = item.projectGithubLink;

    // добавляем каждый элемент в созданный DocumentFragment
    similiarItemsFragment.appendChild(catalogItemElemet);
  });
  // добваляем в родитель фрагмент с готовыми картинками
  catalogListParent.appendChild(similiarItemsFragment);
};

export {createCatalogItems};
