require(['jquery', 'swiper'], function ($, Swiper) {
	var news_32_swiper = new Swiper('.hjzf2_news_32_wrapper', {
        slidesPerView: 3,
        spaceBetween: 60,
        speed: 3000,
        loop: true,
		autoplay:true,
        navigation: {
            nextEl: '.hjzf2_news_32_wrapper_btn .swiper-button-next',
            prevEl: '.hjzf2_news_32_wrapper_btn .swiper-button-prev',
        },
		pagination: {
			el: '.hjzf2_news_32_wrapper_btn_pagination',
			clickable: true
		},
		breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
				slidesPerGroup:1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
				slidesPerGroup:2,
            },
			991: {
                slidesPerView: 2,
                spaceBetween: 30,
				slidesPerGroup:2,
            },
        },
		resize:function(){
            news_18_swiper.update(true);
        }
    });
})