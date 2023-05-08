const eventsSwiper = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
	slidesPerView: 3,
	spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
    // when window width is >= 320px
    1920: {
      spaceBetween: 27, 
    },

    // when window width is >= 1431px
    1431: {
      spaceBetween: 50,
    },

		1023: {
			spaceBetween: 27,
			slidesPerView: 3,
		},

		713: {
			spaceBetween: 34,
			slidesPerView: 2,
		},

    // when window width is >= 320px and <= 1430px
    320: {
      spaceBetween: 27,
			slidesPerView: 1,
    },
  }
});