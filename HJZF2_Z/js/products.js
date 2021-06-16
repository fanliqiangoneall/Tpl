require(['swiper','jquery'],function(Swiper,$){
    var new_hjzf_products_swiper_pro = new Swiper('.HJZF2_Z__product__swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.HJZF2_Z__product-next',
            prevEl: '.HJZF2_Z__product-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        },
        on: {
            resize: function(){
                new_hjzf_products_swiper_pro.update(true);
            }
        }
    });
})