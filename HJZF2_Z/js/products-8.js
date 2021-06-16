require(['swiper','jquery','velocity'],function(Swiper,$,velocity){
    var swiper_pro = new Swiper('.products-8--right__content', {
        slidesPerView: 1,        
        spaceBetween: 20,
        loop: false,
        autoplay: false,
        navigation: {
            nextEl: '.products-8__next',
            prevEl: '.products-8__prev',
        },
    });


});

