require(['jquery', 'swiper'], function ($, Swiper) {
    var galleryThumbs = new Swiper('.products_categories_hj07_swiper_thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },
        pagination: {
            el: '.products_categories_hj07_pagination',
            clickable: true,
        },
    });
    
    var galleryTop = new Swiper('.products_categories_HJ07_swiper', {
        autoHeight: true,
        thumbs: {
            swiper: galleryThumbs
        },
        effect: 'fade',
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
    });
    // 分页器 超出5个就显示
    // products_categories_hj07_pagination
    var len = $('.products_categories_hj07_swiper_thumbs li').length;
    if (len < 6 && $(window).width() > 1200) {
        $('.products_categories_hj07_pagination').hide();
    } else if (len < 4 && $(window).width() >= 1024 && $(window).width() < 1200) {
        $('.products_categories_hj07_pagination').hide();
    } else {
        $('.products_categories_hj07_pagination').show();
    }

    $(window).resize(function () {
        var len = $('.products_categories_hj07_swiper_thumbs li').length;
        if ($(window).width() < 1200) {
            $('.products_categories_hj07_pagination').show();
        } else {
            if (len < 6 && $(window).width() > 1200) {
                $('.products_categories_hj07_pagination').hide();
            } else if (len < 4 && $(window).width() >= 1024 && $(window).width() < 1200) {
                $('.products_categories_hj07_pagination').hide();
            }else {
                $('.products_categories_hj07_pagination').show();
            }
        }
    });

    $('.products_categories_hj07_slide').click(function () {
		
        var index = $(this).index();
        galleryThumbs.slideTo(index, 1000, true);
        $('.products_categories_hj07_slide').eq(index).addClass('swiper-slide-active').siblings('.products_categories_hj07_slide').removeClass('swiper-slide-active');
    })

})