require(['jquery','swiper'],function($,Swiper){
    var hjzf_advantage_60_container = new Swiper('.hjzf_advantage_60_container', {
        navigation: {
            nextEl: '.swiper-button-nag .swiper-button-next',
            prevEl: '.swiper-button-nag .swiper-button-prev',
        },
        // autoplay: true,
        speed: 400,
        parallax : true
    });
})
