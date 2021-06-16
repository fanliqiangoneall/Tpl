require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.HJZF2__evalute-4__swiper', {
        spaceBetween: 0,
        slidesPerView: 4,
        slidesPerGroup: 2,
        autoplay:true,
        loop:true,
        pagination: {
            el: '.HJZF2__evalute-4__pagination',
            clickable: true,
        },
    });

});
