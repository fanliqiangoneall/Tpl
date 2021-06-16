require(['swiper', 'jquery'], function (Swiper, $) {
    var len = $('.hj07_banner_thumbs_swiper .swiper-slide').size();
    $('.hj07_banner_thumbs_wrapper').css('width', len*120);
    var hj07_banner_thrumbs = new Swiper('.hj07_banner_thumbs_swiper', {
        slidesPerView: len,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        on: {
            init: function () {
                if ($(window).width() <= 1200) {
                    $('.hj07_banner_thumbs_swiper').hide();
                } else {
                    $('.hj07_banner_thumbs_swiper').show();
                }
            },
            resize: function () {
                if ($(window).width() <= 1200) {
                    $('.hj07_banner_thumbs_swiper').hide();
                } else {
                    $('.hj07_banner_thumbs_swiper').show();
                }
            }
        },
    })
    
    var hj07_banner_top = new Swiper('.hj07_banner_top', {
        pagination: {
            el: '.hj07_banner_pagination',
            clickable: true
        },
        on: {
            init: function () {
                if ($(window).width() > 1200) {
                    $('.hj07_banner_pagination').hide();
                } else {
                    $('.hj07_banner_pagination').show();
                }
            },
            resize: function () {
                if ($(window).width() > 1200) {
                    $('.hj07_banner_pagination').hide();
                } else {
                    $('.hj07_banner_pagination').show();
                }
            }
        },
        thumbs: {
            swiper: hj07_banner_thrumbs
        },
    });
    
});