require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.hj02_cases_swiper', {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup:2,
        loop:true,
        navigation: {
            nextEl: '.hj02-case-next',
            prevEl: '.hj02-case-prev',
        },
        pagination: {
            el: '.hj02-case-pagination',
            clickable: true,
        },
    });
});

