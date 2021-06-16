require(['jquery'],function($){
    $(".cases-10__content ul li:first-child").addClass("active");
    $(".cases-10__content ul li").hover(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".cases-10__bg li").eq(index).addClass("active").siblings("li").removeClass("active");
    })

});
