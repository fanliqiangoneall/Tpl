require(['jquery', 'swiper'], function ($, Swiper) {
    var products_hj09_swiper = new Swiper('.hjzf2_products_hj09_swiper', {
        slidesPerView: 4,
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
            nextEl: '.hjzf2_products_hj09_prev',
            prevEl: '.hjzf2_products_hj09_next',
        }

    })

})