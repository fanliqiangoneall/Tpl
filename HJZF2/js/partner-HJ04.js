require(['jquery','swiper'],function($,swiper){
    var swiper = new swiper('.partner-HJ04-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: '.customerNext',
            prevEl: '.customerPre',
        },

    });
})