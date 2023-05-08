const projectsSwiper = new Swiper('.projects__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
	slidesPerView: 3,
	watchSlidesProgress: true,
	spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

	breakpoints: {
    // when window width is >= 320px
    1920: {
      slidesPerView: 3,
      spaceBetween: 50, 
    },

    // when window width is >= 1431px
    1431: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

		656: {
			slidesPerView: 2,
		},

    // when window width is >= 320px and <= 1430px
    320: {
      slidesPerView: 1,
      spaceBetween: 38,
    },
  }
});