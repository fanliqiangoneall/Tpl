require(['jquery', 'swiper'], function ($, Swiper) {
    var galleryThumbs_hj05 = new Swiper('.HJZF2__news_HJ05_right_gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.HJZF2__news_HJ05_gallery-top', {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs_hj05
        },
        pagination: {
            el: '.HJZF2__news_HJ05_gallery_swiper_pagination'
        },
        autoplay: true
    });
    window.onload = function () {
        var width_a = $('.HJZF2__news_HJ05_right_thumbs_slide').width();
        if ($(window).width() <= 1024) {
            width_a = 95;
        };
        $(window).resize(function () {
            $('.HJZF2__news_HJ05_right_thumbs_slide').css('height', width_a + 12);
        });

        $('.HJZF2__news_HJ05_right_thumbs_slide').click(function () {
            $(this).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');
        });
    };

});