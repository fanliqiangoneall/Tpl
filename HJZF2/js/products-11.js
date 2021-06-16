require(['swiper','jquery','velocity'],function(Swiper,$,velocity){
    var swiper_pro = new Swiper('.products-11--right__content', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 23,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.products-11__next',
            prevEl: '.products-11__prev',
        },
    });


});

