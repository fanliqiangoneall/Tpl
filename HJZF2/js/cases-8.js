require(['jquery'],function($){
    $(".cases-8_content_tab li:first-child").addClass("active");
    $(".cases-8_page li:first-child").addClass("active");
    $(".cases-8_content_tab li").on("hover",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".cases-8_page li").eq(index).addClass("active").siblings("li").removeClass("active");
    })


});

