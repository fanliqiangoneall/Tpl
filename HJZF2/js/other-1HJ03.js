require(['swiper','jquery'],function(Swiper,$){
    var swiper_other1= new Swiper('.hj03-other1', {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.hj03-other1-next',
            prevEl: '.hj03-other1-prev',
        },
    });
})