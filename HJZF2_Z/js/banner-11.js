require(['jquery', 'swiper'], function ($, Swiper) {
    var bannerHJ02_swiper = new Swiper('.banner_11_wrapper', {
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: false,
        },
        loop:true,
        pagination: {
            el: '.banner_11_wrapper_pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                var text = $('.banner_text')[current-1].innerText;
                return `<span class="current"> 0${current}</span> <span class="xiexian"></span> <span class="total"> 0${total}</span>   <span class="text">${text}</span>`;
            }
            
        },
        navigation: {
            nextEl: '.banner_11_wrapper_pagination_next',
            prevEl: '.banner_11_wrapper_pagination_prev',
        },
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画

            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        },
        
    });

});