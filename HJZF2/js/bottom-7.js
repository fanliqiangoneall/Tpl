require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.bottom-7-swiper', {
        loop:true,
        navigation: {
            nextEl: '.bottom-7-swiper .swiper-button-next',
            prevEl: '.bottom-7-swiper .swiper-button-prev',
        },
    });
});

