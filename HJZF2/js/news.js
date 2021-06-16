require(['swiper','jquery'],function(Swiper,$){
    var swiper_news = new Swiper('.new_hjzf_news .HJ05-news', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        loop: true,
		autoplay:true,
        navigation: {
            nextEl: '.new_hjzf_news .HJ05-news .swiper-button-next',
            prevEl: '.new_hjzf_news .HJ05-news .swiper-button-prev',
        },
    });
})