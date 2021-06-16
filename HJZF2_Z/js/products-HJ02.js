require(['jquery', 'swiper'], function ($, Swiper) {
    var products_hj02_swiper = new Swiper('.products_hj02_swiper', {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 8,
        slidesPerColumn: 2, //显示2行
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 6,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
        navigation: {
            nextEl: '.products_hj02_swiper_next',
            prevEl: '.products_hj02_swiper_prev',
        },

    });

});