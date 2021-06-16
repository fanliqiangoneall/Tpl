require(['swiper', 'jquery'], function (Swiper, $) {
	var swiperFlag = false;
	var banner_swiper = new Swiper('.hjzf_hj06_swiper', {
		speed: 1000,
		mousewheel: false,
		pagination: {
			el: '.hjzf_pagination_hj06',
			clickable: true
		},
		autoplay: {
			delay: 4000,
		},
		loop: true,
		navigation: {
			nextEl: '.hjzf_hj06-banner-next',
			prevEl: '.hjzf_hj06-banner-prev',
		},
	});
	if ($('.hjzf_hj06_swiper').length > 0) {
		//鼠标覆盖停止自动切换
		banner_swiper.el.onmouseover = function () {
			banner_swiper.autoplay.stop();
		};

		//鼠标离开开始自动切换
		banner_swiper.el.onmouseout = function () {
			banner_swiper.autoplay.start();
		};
	};

});