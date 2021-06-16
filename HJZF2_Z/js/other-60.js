require(['jquery', 'swiper'], function ($, Swiper) {
    var galleryThumbs = new Swiper('.hjzf2_other_60_thumbs', {
        spaceBetween: 30,
        slidesPerView: 4,
        loopedSlides: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.other_60_next',
            prevEl: '.other_60_prev',
        },

    });
    var galleryTop = new Swiper('.hjzf2_other_60_top', {
        spaceBetween: 10,
        loopedSlides: 5,
        thumbs: {
            swiper: galleryThumbs
        },
        breakpoints: {
            1200: {
                pagination: {
                    el: '.hjzf2_other_60_top_pagination',
                    clickable: true
                },
            }
        },
        on: {
            resize: function (){
                galleryTop.update();
            }
        }
    });

    $('.hjzf2_other_60_thumbs').click('.swiper-slide ', function (ele) {
        var index = $(ele.target).parent().index();
        $('.hjzf2_other_60_top .swiper-slide').find('video').each(function () {
            $(this).get(0).pause();
        });
        $('.hjzf2_other_60_top .swiper-slide').eq(index).find('video').get(0).play();
    });

    var leng = $('.hjzf2_other_60_thumbs .swiper-slide').length;
    if (leng <= 4) {
        $('.hjzf2_other_60_thumbs').addClass('little-list');
        $('.other_60_next').hide();
        $('.other_60_prev').hide();
    }
    init();
    $(window).scroll(init);

    function init() {
        var width = $(window).width();
        if (width <= 1200) {
            $('.hjzf2_other_60_thumbs').hide();
        }
    }

});