require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.HJZF_Z__produCategory__wrap', {
        slidesPerView: 4,
        spaceBetween: 25,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50
            }
        },
        pagination: {
            el: '.HJZF_Z__produCategory__pagination',
            clickable: true
        }
    });
});

