require(['jquery', 'swiper'], function ($, Swiper) {
    var swiper = new Swiper('.HJZF2_Z_other_93_wrapper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slideActiveClass : 'active',
        pagination: {
            el: '.HJZF2_Z_other_93_wrapper_pagination',
            clickable: true
        },
        breakpoints: {
            1365: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
        // autoplay: true
    })

})