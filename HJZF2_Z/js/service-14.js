require(['jquery'],function($){
    $(".ind_show_nav_boc>div").click(function(){
        var index = $(this).index();
        $(".service-14_show1").hide();
        $(this).addClass("on").siblings("div").removeClass("on");
        $(".service-14_show").eq(index).addClass("on").siblings("div").removeClass("on");
    })
});