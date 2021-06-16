require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper = new Swiper('.case_23_main_container', {
        pagination: {
            el: '.cases_23_pagination',
            clickable: true
        },
		breakpoints: {
			1200: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			565: {
				slidesPerView: 1
			}
		}
    });
});