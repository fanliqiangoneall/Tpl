require(['swiper','jquery'],function(Swiper,$){
    var new_hjzf_products_swiper_pro = new Swiper('.new_hjzf_products .hj05-product', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: '.new_hjzf_products .hj05-pro-next',
            prevEl: '.new_hjzf_products .hj05-pro-prev',
        },
    });
})