require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper1 = new Swiper('.other_35_swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.other_35_next',
            prevEl: '.other_35_prev',
        },
        pagination: {
            el: '.other_35_pagination',
            clickable: true
        },
    });


});
