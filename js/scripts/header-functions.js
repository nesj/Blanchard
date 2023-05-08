const burgerBtnOpen = document.querySelector('.burger');
const burgerBtnClose = document.querySelector('.burger-close-btn');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.body;

burgerBtnOpen.addEventListener('click', () => {
	burgerMenu.classList.add('burger-menu--active');
	burgerBtnOpen.style.visibility = 'hidden';
	body.style.overflow = 'hidden';
});

burgerBtnClose.addEventListener('click', () => {
	burgerMenu.classList.remove('burger-menu--active');
	burgerBtnOpen.style.visibility = 'visible';
	body.style.overflow = 'unset';
});