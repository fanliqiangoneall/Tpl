require(['swiper','jquery'],function(Swiper,$){
    var news_18_swiper = new Swiper('.hjzf_news_18 .hjzf_news_18__container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        speed: 3000,
        loop: true,
		autoplay:true,
        navigation: {
            nextEl: '.hjzf_news_18 .hjzf_news_18__container .swiper-button-next',
            prevEl: '.hjzf_news_18 .hjzf_news_18__container .swiper-button-prev',
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