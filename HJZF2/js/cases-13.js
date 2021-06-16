require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.HJZF2__case13--rightswiper', {
        navigation: {
            nextEl: '.HJZF2__case13--next',
            prevEl: '.HJZF2__case13--prev',
        },
        speed: 2000,
        slidesPerView: 3,
        spaceBetween: 30,
    });
});
