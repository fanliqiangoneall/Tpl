require(['jquery', 'swiper'], function ($, Swiper) {
    var news_15_swiper = new Swiper('.hjzf2_news_16_swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        navigation: {
            nextEl: '.hjzf2_news_16_prev',
            prevEl: '.hjzf2_news_16_next',
        },

    })

})