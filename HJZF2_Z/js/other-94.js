require(['jquery', 'swiper'], function ($, Swiper) {
    var swiper = new Swiper('.HJZF2_Z_other_94_wrapper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slideActiveClass: 'active',
        pagination: {
            el: '.HJZF2_Z_other_94_wrapper_pagination',
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
                spaceBetween: 0
            }
        }
        // autoplay: true
    });

    function createSwiper(dom) {
        if ($(dom).length > 0) {
            new Swiper(dom, {
                pagination: {
                    el: '.HJZF2_Z_other_94_wrapper_pagination',
                    clickable: true
                },
                autoplay: true
            })
        }
    }
    createSwiper('.HJZF2_Z_other_94_wrapper_even');
    createSwiper('.HJZF2_Z_other_94_wrapper_evena');
    createSwiper('.HJZF2_Z_other_94_wrapper_evenb');
    createSwiper('.HJZF2_Z_other_94_wrapper_evenc');

})