require(['swiper', 'jquery'], function (Swiper, $) {
    var galleryThumbs = new Swiper('.hj10_banner_thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: '.hj10_banner_bottom_pagination',
            bulletActiveClass:'active',
            clickable: true
        }
    });

    var hj10_banner_top = new Swiper('.hj10_banner_top', {
        parallax: true,
        speed: 1000,
        autoHeight: true,
        autoplay: {
            delay: 8000
        },
        pagination: {
            el: '.hj10_banner_top_pagination',
            bulletActiveClass:'active',
            clickable: true
        },
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
                playVideo(this.activeIndex);
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                playVideo(this.activeIndex);
            }
        },

    });

    function playVideo(index) {
        var vi = $('.hj10_banner_top .swiper-slide').eq(index);
        var vidom = vi.find('.hjzf_banner_videoBox').find('video');
        if(vi.length > 0){
            vidom.trigger('play');
        }
    };

});