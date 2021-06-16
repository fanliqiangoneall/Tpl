require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.hjzf_procate_6_wrapper', {
        slidesPerView: 3,
        spaceBetween: 0,
		autoplay:true,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.hjzf_procate_6_wrapper__pagination',
            clickable: true
        },
    });
});

