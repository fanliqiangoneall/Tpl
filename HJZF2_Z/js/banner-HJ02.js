require(['jquery','swiper'],function($,Swiper){
    if($(".banner-HJ02_swiper").length>0){
        var bannerHJ02_swiper = new Swiper('.banner-HJ02_swiper', {
            speed:800,
            loop:true,
            autoplay: {
                delay: 4000,//1秒切换一次
            },
            on:{
                init:function(swiper){
                    $(".slidernav li:first-child").addClass("active");
                },
                transitionEnd: function(){
                    $(".slidernav li").eq(this.realIndex).addClass("active").siblings("li").removeClass("active");
                },
            }
        });
        $(".slidernav li").click(function(){
            bannerHJ02_swiper.slideToLoop($(this).index());
        })
    }

});


