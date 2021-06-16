require(['swiper', 'jquery'], function (Swiper, $) {
	var galleryThumbs = new Swiper('.cases_35_list', {
		spaceBetween: 30,
		slidesPerView: 4,
		navigation: {
			nextEl: '.cases_35_list .swiper-button-next',
			prevEl: '.cases_35_list .swiper-button-prev',
		},
		breakpoints: {
			1365: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},

		},
		autoplay: true

	});

});