require(['jquery', 'swiper', 'mousewheel', 'positionSticky'], function ($, Swiper, positionSticky) {

    function opsticky() {
        if ($(window).width() > 1200) {
            jQuery('.products_HJ08_left').positionSticky({
                top: 66
            });
        }
    };
    opsticky();
    $(window).resize(function () {
        opsticky();
    });

    "use strict";
    var products_HJ08_swiper = new Swiper('.products_HJ08_swiper', {
        navigation: {
            nextEl: '.products_HJ08_swiper_next',
            prevEl: '.products_HJ08_swiper_prev'
        },
        on: {
            init: function init() {
                swiperAnimateCache(this); //隐藏动画元素 

                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function slideChangeTransitionEnd() {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
        }
    });



})