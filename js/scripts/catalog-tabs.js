const tabsBtns = document.querySelectorAll('.tabs-btn');
const tabsItems = document.querySelectorAll('.tabs-item');


tabsBtns.forEach(function(element) {
	element.addEventListener('click', function(e) {
		const path = e.currentTarget.dataset.path;

		tabsBtns.forEach(function(btn) {
			btn.classList.remove('tabs-btn--active');
		})
		e.currentTarget.classList.add('tabs-btn--active');

		tabsItems.forEach(function(element) {
			element.classList.remove('tabs-item--active');
		})
		document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
	});
});