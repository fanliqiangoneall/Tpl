require(['swiper','jquery'],function(Swiper,$){
    var new_hjzf_products_swiper_pro = new Swiper('.new_hjzf_evaluate-HJ01-swiper', {
        slidesPerView: 1,
        slidesPerGroup:1,
        loop: true,
        pagination: {
            el: '.new_hjzf_evaluate-HJ01 .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.new_hjzf_evaluate-HJ01-next',
            prevEl: '.new_hjzf_evaluate-HJ01-prev',
        },
    });
})