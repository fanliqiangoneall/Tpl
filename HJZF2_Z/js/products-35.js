require(['jquery', 'swiper'], function ($, Swiper) {
    var products_hj07_title_swiper = new Swiper('.new_hjzf_product35_wrapper', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerGroup: 8,
        spaceBetween: 30,
        pagination: {
            el: '.new_hjzf_product35_pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerColumn: 1,
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 4,
                slidesPerColumn: 1,
                slidesPerGroup: 4,
            }
        },
    });
    if ($(window).width() > 1200) {
        if (products_hj07_title_swiper.slides.length <= 8) {
            $('.new_hjzf_product35_pagination').hide();
        }
    };
})