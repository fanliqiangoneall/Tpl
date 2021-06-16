;
require(['jquery', 'swiper'], function ($, swiper) {
    var swiper_adv2 = new swiper('.hjzf_advantage_23_container', {
        pagination: {
            el: '.hjzf_advantage_23_container .swiper-pagination',
            type: 'fraction',
        },
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.hjzf_advantage_23_container .swiper-button-next',
            prevEl: '.hjzf_advantage_23_container .swiper-button-prev',
        },
    });
})
