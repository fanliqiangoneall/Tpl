require(['jquery','swiper'],function($,swiper){
    $(".HJZF2_advantage11__item:first-child").addClass("active");
    $(".HJZF2_advantage11__item").hover(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings(".HJZF2_advantage11__item").removeClass("active");
        $(".HJZF2_advantage11_wrap li").eq(index).fadeIn().siblings("li").fadeOut();
    })
})

