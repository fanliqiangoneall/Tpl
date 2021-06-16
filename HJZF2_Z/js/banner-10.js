require(['jquery','swiper'],function($,Swiper){
    if($(".banner-6_swiper").length>0){
        var bannerHJ02_swiper = new Swiper('.banner-6_swiper', {
            speed:800,
            loop:true,
            effect : 'fade',
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.banner-6_pagination',
              }
        });

});


