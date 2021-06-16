;require(['jquery','swiper'],function($,swiper){
    var swiper_indexpro = new swiper('.index_prolist_wai', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
            el: '.index-product-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.index-product-next',
            prevEl: '.index-product-prev',
        },
    });
    var swiper_indexpro = new swiper('.index_prolist_wai2', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.index-product-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.index-product-next',
            prevEl: '.index-product-prev',
        },
    });
})

