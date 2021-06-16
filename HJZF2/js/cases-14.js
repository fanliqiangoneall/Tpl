require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.HJZF2__case14--wiper', {
        navigation: {
            nextEl: '.HJZF2__case14--next',
            prevEl: '.HJZF2__case14--prev',
        },
        pagination: {
            el: '.HJZF2__case14--pagination',
            clickable: true,
        },
        slidesPerColumn: 2,
        speed: 2000,
        slidesPerView: 1,
        spaceBetween: 30,
    });
});
