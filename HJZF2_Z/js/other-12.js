require(['jquery','swiper'],function($,Swiper){
    $("#to_top").click(function(){
        jQuery('html,body').animate({'scrollTop': 0}, 600);
    })
});



