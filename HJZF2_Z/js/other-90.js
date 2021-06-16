require(['jquery', 'swiper'], function ($, Swiper) {
    if($(window).width() < 767 && other_90_is_mobile != '') {
        var swiper = new Swiper('.HJZF2_Z_other_90_container', {
            slidesPerView: 2,
            slidesPerColumn: 2,
        });
    };
    if($(window).width() >= 767) {
		new Swiper('.HJZF2_Z_other_90_t', {
            slidesPerView: 5,
            slidesPerColumn: 2,
			pagination: {
				el: '.HJZF2_Z_other_90_t .swiper-pagination',
				clickable: true
			},
			autoplay: true
        });
	};
	
});