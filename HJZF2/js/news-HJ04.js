require(['swiper','jquery'],function(Swiper,$) {
    var new_hjzf_news_HJ01swiper = new Swiper('.new_hjzf_news-HJ04-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
		autoplay:true,
        pagination: {
            el: '.hjzf_news-HJ04__pagination',
            clickable: true,
        },
    })
});