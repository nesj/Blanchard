const listElements = document.querySelectorAll('.header__bottom-list-elements');
let openMenu = null;

const dropdownMenus = document.querySelectorAll('.header__bottom-dropdown-inner');
dropdownMenus.forEach(dropdownMenu => {
  dropdownMenu.style.display = 'none';
});

listElements.forEach(dropDown => {
  const dropDownMenu = dropDown.querySelector('.header__bottom-dropdown-inner');
  const dropDownButtons = document.querySelectorAll(".header__bottom-list-p");

	dropDownButtons.forEach(button => {
    button.addEventListener('click', () => {
        dropDownButtons.forEach(elem => {
            if (elem !== button) {
                elem.classList.remove('header__bottom-list-p--active');
            }
        });
        button.classList.toggle('header__bottom-list-p--active');
    });
});

  dropDown.addEventListener('click', (event) => {
    // if (event.target.tagName !== 'BUTTON') {
    //   return;
    // }
    if (openMenu && openMenu !== dropDownMenu) {
      openMenu.style.display = 'none';
    }
    if (dropDownMenu.style.display === 'none') {
      dropDownMenu.style.display = 'block';
      openMenu = dropDownMenu;
      dropDownMenu.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    } else {
      dropDownMenu.style.display = 'none';
      openMenu = null;
    }
  });
});