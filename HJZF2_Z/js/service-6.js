require(['jquery','swiper'],function($,Swiper){
    var service6_swiper = new Swiper('.HJZF2_z_service-6_swiper', {

        navigation: {
            nextEl: '.HJZF2_z_service-6_next',
            prevEl: '.HJZF2_z_service-6_prev',
        },
        resize: function(){
            service6_swiper.update(true)
        },
        loop:true
    });


})

