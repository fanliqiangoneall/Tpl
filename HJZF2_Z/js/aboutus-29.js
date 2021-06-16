require(['jquery', 'swiper'], function ($, Swiper) {
	$(function () {
		new Swiper('.hjzf_z_aboutus29', {
			slidesPerView: 1,
			loop: true,
			autoplay: true,
			pagination: {
				el: '.hjzf_z_aboutus29_leftpagination',
				clickable: true
			},
			mousewheel: false,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			}

		})
	})
})