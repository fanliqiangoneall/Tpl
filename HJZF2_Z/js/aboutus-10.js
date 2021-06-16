require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.aboutus-10-swiper', {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
