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
    if (checkBoxes[0].checked && checkBoxes[1].checked
      // && checkBoxes[2].checked
    ) {
      checkAllBox.checked = true;
    } else {
      checkAllBox.checked = false;
    }
  }
};

export { filterItems };
