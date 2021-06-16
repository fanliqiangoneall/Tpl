require(['swiper','jquery'],function(Swiper,$){
    var HJZF2_evaluate__swiper = new Swiper('.HJZF2_evaluate__swiper', {
        slidesPerView: 4,
        spaceBetween: 12,
        pagination: {
            el: '.HJZF2_evaluate__pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true
    });

});
