require(['jquery','swiper'],function($,Swiper){
    var news_6_swiper = new Swiper('.HJZF2_Z__news-6__swiper', {
        autoHeight:true,
        slidesPerView: 4,
        spaceBetween: 20,
        loop:true,
        // init: false,
        pagination: {
            el: '.HJZF2_Z__news-6__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.HJZF2_Z__news-6__next',
            prevEl: '.HJZF2_Z__news-6__prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        resize:function(){
            news_6_swiper.update(true);
        }
    });
   
})

