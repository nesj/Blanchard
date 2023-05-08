const openBtn = document.querySelector('.search-open');
const closeBtn = document.querySelector('.search-close-btn');
const searchMenu = document.querySelector('.search-opened');
const burgerBlock = document.querySelector('.header__menu-block');

openBtn.addEventListener('click', () => {
	searchMenu.classList.add('search-opened--active');
	openBtn.style.visibility = 'hidden';
});

closeBtn.addEventListener('click', () => {
	searchMenu.classList.remove('search-opened--active');
	setTimeout(() => openBtn.style.visibility = 'unset', 150);
})

if (window.innerWidth <= 992) {
	openBtn.addEventListener('click', () => {
		burgerBlock.classList.add ('dnone');
	})
	closeBtn.addEventListener('click', () => {
		setTimeout(() => burgerBlock.classList.remove('dnone'), 100);
	})
}