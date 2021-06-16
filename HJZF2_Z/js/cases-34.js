require(['swiper', 'jquery'], function (Swiper, $) {
	var galleryThumbs = new Swiper('.cases_35_thm_wrapper', {
		spaceBetween: 30,
		slidesPerView: 4,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.cases_35_btn_swiper-button-next',
			prevEl: '.cases_35_btn_swiper-button-prev',
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			}
		}
	});
	var galleryTop = new Swiper('.cases_35_big_wrapper', {
		spaceBetween: 30,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		thumbs: {
			swiper: galleryThumbs,
		},
	});
});