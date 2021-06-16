require(['jquery', 'swiper'], function ($, Swiper) {
    var service_hj04_container = new Swiper('.service_hj04_container', {
        pagination: {
            el: '.service_hj04_pagination',
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

})