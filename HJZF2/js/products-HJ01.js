require(['swiper','jquery'],function(Swiper,$){
    var productsHJ01swiper = new Swiper('.new_hjzf_products-HJ01-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
		autoplay:true,
        loop: true,
        navigation: {
            nextEl: '.new_hjzf_products-HJ01-next',
            prevEl: '.new_hjzf_products-HJ01-prev',
        },
    });
})