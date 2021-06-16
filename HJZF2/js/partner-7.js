require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.HJZF2__partner--7__swiper', {
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop:true,
        autoplay:true
    });
});
