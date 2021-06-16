require(['swiper','jquery'],function(Swiper,$) {
    var new_hjzf_news_HJ01swiper = new Swiper('.new_hjzf_news-HJ01-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
            nextEl: '.new_hjzf_news-HJ01-swiper-next',
            prevEl: '.new_hjzf_news-HJ01-swiper-prev',
        },
    })
});