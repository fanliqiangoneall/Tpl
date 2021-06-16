require(['jquery', 'swiper'], function ($, Swiper) {
	$(function () {
		var n = new Swiper('.new_hjzf_procata_18_wrapper', {
			spaceBetween: 30,
			slidesPerView: 4,
			breakpoints: {
				1200: {
					slidesPerView: 3
				},
				767: {
					slidesPerView: 2
				}
			}
		});
	});
});