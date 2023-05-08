Array.prototype.forEach.call(
  document.querySelectorAll('.header__bottom-dropdown-inner'),
  (el) => new SimpleBar(el, {
    scrollbarMaxSize: 28,
  })
);