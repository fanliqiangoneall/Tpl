require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.HJZF2_Z_advantage-2__swiper', {
        navigation: {
            nextEl: '.HJZF2_Z_advantage-2__swiperNext',
            prevEl: '.HJZF2_Z_advantage-2__swiperPrev',
        },
        lazy: {
            loadPrevNext: true,
        },
        loop:true,
        autoheight: true
    });
})

