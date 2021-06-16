require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper = new Swiper('.partner-1-container', {
        navigation: {
            nextEl: '.partner-1-btn-next',
            prevEl: '.partner-1-btn-prev',
        },
        slidesPerView: 4,
        autoplay: true,
        loop: true,
        slidesPerColumn: 2,
        breakpoints: {
            1200: {
                slidesPerView: 4,
                slidesPerColumn: 1,
            },
            768: {
                slidesPerView: 3,
                slidesPerColumn: 1,
            }

        }
    });
})