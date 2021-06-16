require(['jquery','swiper'],function($,Swiper){
    $(function () {
        $('.products-hj06_box_con').each(function(i){
            if(i < 4) {
                $(this).attr('data-wow-delay', i*.5 + 's');
            }
        })
    });
    var swiper = new Swiper('.products-hj06_box', {
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar'
        },
    });
});