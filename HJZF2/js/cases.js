require(['swiper','jquery'],function(Swiper,$){
    var swiper_case = new Swiper('.HJ05-case', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: '.HJ05-case .swiper-button-next',
            prevEl: '.HJ05-case .swiper-button-prev',
        },
    });
})