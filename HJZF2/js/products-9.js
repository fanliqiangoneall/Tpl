;require(['jquery','swiper'],function($,swiper){
    var swiper_indexpro = new swiper('.index_prolist_wai_9', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
            el: '.index-product-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.index-product-next2',
            prevEl: '.index-product-prev2',
        },
    });
})

