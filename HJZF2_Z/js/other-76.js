require(['jquery', 'swiper'], function ($, Swiper) {

    var swiper = new Swiper('.HJZF2_other_76_container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.HJZF2_other_76_next',
            prevEl: '.HJZF2_other_76_prev',
        },
        pagination: {
            el: '.HJZF2_other_76_pagination',
            clickable: true
        }
    })
    var len = $('.HJZF2_other_76_container .swiper-slide').length;
    if(len <= 1){
        $('.HJZF2_other_76_pagination').hide();
        $('.HJZF2_other_76_prev').hide();
        $('.HJZF2_other_76_next').hide();
    }
})