require(['swiper', 'jquery'], function (Swiper, $) {
    new Swiper('.hjzf2_Z_case29_container', {
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2
            }
        },
        autoplay: true
    })
})