require(['swiper','jquery','lazyload'],function(Swiper,$,lazyload){
    var swiper = new Swiper('.hjzf_case-17_swiper', {
        autoplay:{
            delay:5000,
            disableOnInteraction: false,
        },
        speed:2000,
        effect:'fade',
        fadeEffect: {
            crossFade: true,
        },
        loop:true,
        navigation: {
            nextEl: '.hjzf_case-17_next',
            prevEl: '.hjzf_case-17_prev',
        },
    });
});