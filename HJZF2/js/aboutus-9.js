require(['jquery'],function($){
    $('.aboutus_9_menu_subtitle_box').hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var class_index = $(this).index();
        var aboutus_9_content_box = -540*class_index;
        $(".aboutus_9_content ul").stop().animate({left:aboutus_9_content_box+"px"},600);
        $(this).siblings().css('background','#ffffff');
        $(this).siblings().children('.aboutus_9_menu_subtitle').css('color','black');
        $(this).siblings().children('.menu_icon').css('background','#e5e5e5');
        var menu_subtitle = $(this).children('.aboutus_9_menu_subtitle').text();
        $('.aboutus_9_subtitle').text(menu_subtitle);
        
    });

})
