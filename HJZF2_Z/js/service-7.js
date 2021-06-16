require(['jquery','swiper'],function($,Swiper){
    var service6_swiper = new Swiper('.service-7_swiper', {

        navigation: {
            nextEl: '.HJZF2_z_service-7_next',
            prevEl: '.HJZF2_z_service-7_prev',
        },
        resize: function(){
            service6_swiper.update(true)
        },
        loop:true
    });


})

