require(['swiper','jquery'],function(Swiper,$) {
    var new_hjzf_honor_swiper = new Swiper('.new_hjzf_honor_swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        navigation: {
            nextEl: '.new_hjzf_honor_swiper-next ',
            prevEl: '.new_hjzf_honor_swiper-prev ',
        },
    })
});