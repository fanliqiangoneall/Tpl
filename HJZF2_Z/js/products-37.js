require(['jquery', 'swiper'], function ($, Swiper) {
    var hjzf_product_37_wrapper = new Swiper('.hjzf_product_37_wrapper', {
        spaceBetween: 0,
        slidesPerView: 4,
        slidesPerGroup: 4,
        breakpoints: {
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1365: {
                slidesPerView: 4,
                slidesPerGroup: 4
            }
        },
        pagination: {
            el: '.hjzf_product_37_pagination',
            clickable: true
        },

    });

});