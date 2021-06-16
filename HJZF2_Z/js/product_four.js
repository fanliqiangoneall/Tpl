require(['jquery', 'swiper'], function ($, Swiper) {

    var new_hjzf_product_four = new Swiper('.new_hjzf_product_four_product', {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4,
        breakpoints: {
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
        navigation: {
            nextEl: '.new_hjzf_product_four_next',
            prevEl: '.new_hjzf_product_four_prev',
        },
        on: {
            resize: function () {
                new_hjzf_product_four.update(true)
            },
        },

    });

});