require(['jquery'],function($){
    $(".aboutus-13-tabs li").hover(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(this).find(".aboutus-13-tabimg:first-child").addClass("hide");
        $(this).find(".aboutus-13-tabimg:nth-child(2)").removeClass("hide");
        $(this).siblings("li").find(".aboutus-13-tabimg:first-child").removeClass("hide");
        $(this).siblings("li").find(".aboutus-13-tabimg:nth-child(2)").addClass("hide");
        $(".aboutus-13-right ul li").eq(index).addClass("active").siblings("li").removeClass("active");

        if($('.aboutus-13_content ul li').length>1) {
            $('.aboutus-13_content ul li').eq(index).addClass("active").siblings("li").removeClass("active");
        }
    })
})
