require(['swiper', 'jquery'], function (Swiper, $) {
	if(is_show_other_hj04) return;
	var swiper = new Swiper('.HJZF_Z_other_HJ04_swiper', {
		navigation: {
			nextEl: '.HJZF_Z_other_HJ04_swiper_slide_next',
			prevEl: '.HJZF_Z_other_HJ04_swiper_slide_prev',
		},
		slidesPerView: 6,
		autoplay: true,
		spaceBetween: 10,
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			567: {
				slidesPerView: 2,
				spaceBetween: 10,
			}
		}
	});
});