require(['jquery'],function($){
    $(document).ready(function(){
        var waibox_width=1190*$(".hj02-news_item").length;
        $(".hj02-news_wai").css("width",waibox_width+'px');
        $(".hj02_newclasslist li.class_name1").eq(0).addClass("class_name1_on");
        $(".hj02_newclasslist li").hover(function(){
            $(this).addClass("class_name1_on").siblings().removeClass("class_name1_on");
            var class_index = $(this).index();
            var waibox_width_left = -1190*(class_index-1);
            $(".hj02-news_wai").stop().animate({left:waibox_width_left+"px"},600);
        })
    })
});