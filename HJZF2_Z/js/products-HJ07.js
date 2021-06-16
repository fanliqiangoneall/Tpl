require(['jquery', 'swiper'], function ($, Swiper) {
    var width = $(window).width();
    if ($no_swiper || $(window).width() < 1200) {
        return false;
    } else {
        var products_hj07_title_swiper = new Swiper('.products_hj07_title_swiper', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            pagination: {
                el: '.products_hj07_pagination',
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                },
                768: {
                    slidesPerColumn: 1,
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                }
            },
        });
        if ($(window).width() > 1200) {
            if (products_hj07_title_swiper.slides.length <= 6) {
                $('.products_hj07_pagination').hide();
            }
        };

    }





})