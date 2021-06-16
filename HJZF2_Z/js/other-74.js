require(['jquery', 'swiper'], function ($, Swiper) {

    var swiper = new Swiper('.HJZF2_other_74_container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.HJZF2_other_74_next',
            prevEl: '.HJZF2_other_74_prev',
        },
        pagination: {
            el: '.HJZF2_other_74_pagination',
            clickable: true
        }
    })
    var len = $('.HJZF2_other_74_container .swiper-slide').length;
    if(len <= 1){
        $('.HJZF2_other_74_pagination').hide();
        $('.HJZF2_other_74_prev').hide();
        $('.HJZF2_other_74_next').hide();
    }
})