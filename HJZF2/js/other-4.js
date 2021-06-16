require(['swiper','jquery'],function(Swiper,$){
    var swiper_other = new Swiper('.other04-other', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.other04-other .swiper-button-next',
            prevEl: '.other04-other .swiper-button-prev',
        },
    });
})