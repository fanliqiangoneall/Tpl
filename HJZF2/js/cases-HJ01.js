
require(['swiper','jquery'],function(Swiper,$){
    var new_hjzf_casesHJ01Swiper = new Swiper('.new_hjzf_cases-HJ01-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: '.new_hjzf_cases-HJ01 .new_hjzf_cases-HJ01-swiper-next',
            prevEl: '.new_hjzf_cases-HJ01 .new_hjzf_cases-HJ01-swiper-prev',
        },
    });
})