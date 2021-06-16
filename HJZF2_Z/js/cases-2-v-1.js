require(['jquery', 'swiper'], function ($, Swiper) {

	new Swiper('.HJZF2_Z__cases_wrapper', {
		slidesPerView: 4,
		slidesPerColumn: 2,
		spaceBetween: 20,
		navigation: {
			nextEl: '.HJZF2_Z__cases_wrapper_2_v1_next',
			prevEl: '.HJZF2_Z__cases_wrapper_2_v1_prev',
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			}
		},
		autoplay: true
	});
});