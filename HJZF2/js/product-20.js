
require(['swiper','jquery'],function(Swiper,$){
    var new_hjzf_products_swiper_pro = new Swiper('.hj05-product20', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 50,
        slidesPerGroup:4,

        pagination: {
            el: '.product-20_pageation',
            clickable: true,
        },
    });
})