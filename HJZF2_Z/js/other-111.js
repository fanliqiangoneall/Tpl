require(['jquery','swiper'],function($,Swiper){
    var hjzf2__service3__swiper = new Swiper('.hjzf2__other_111__swiper',{
        speed:800,
        slidesPerView: 4,
        spaceBetween: 0,
        mousewheel: false,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.hjzf2__other_111__next',
            prevEl: '.hjzf2__other_111__prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
        loop:true,
        on: {
            resize: function(){
                hjzf2__service3__swiper.update(true);
            }
        }
    });
});

