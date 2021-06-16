require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.HJZF2__news-9left__swiper', {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 0,
        pagination: {
            el: '.HJZF2__news-9left__pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.HJZF2__news-9right__swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay:true,
        loop:true,
        navigation: {
            nextEl: '.HJZF2__news-9right-next',
            prevEl: '.HJZF2__news-9right-prev',
        },
    });
});