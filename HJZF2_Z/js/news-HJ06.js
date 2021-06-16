require(['jquery', 'swiper'], function ($, Swiper) {
    var HJZF2__news_HJ06_swiper = new Swiper('.HJZF2__news_HJ06_swiper_left', {
        spaceBetween: 10,
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var HJZF2__news_HJ06_bottom = new Swiper('.HJZF2__news_HJ06_bottom', {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4,
        autoplay: true,
        pagination: {
            el: '.HJZF2__news_HJ06swiper_pagination',
            clickable: true
        },
        breakpoints: {
            1365: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
            }
        },
        on: {
            init: function () {
                if (this.slides.length <= this.params.slidesPerView) {
                    $('.HJZF2__news_HJ06swiper_pagination').hide();
                }
            },
            resize: function () {
                var width = $(window).width();
                if (width < 1200) {
                    $('.HJZF2__news_HJ06swiper_pagination').show();
                }
            }
        },

    });
    if ($('.HJZF2__news_HJ06_bottom .swiper-wrapper').text().trim() === '') {
        $('.HJZF2__news_HJ06_bottom').hide();
    };


    // 每两个为一组包裹起来
    $('.HJZF2__news_HJ06_right li').each(function () {
        if ($('.HJZF2__news_HJ06_right li').length == 0) {
            return false;
        }
        $('.HJZF2__news_HJ06_right>li:lt(2)').wrapAll('<div class="colum"></div>');
    });

})