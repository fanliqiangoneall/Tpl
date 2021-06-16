require(['jquery'],function($){
    $(document).ready(function(){
       var class_index = null;
       var waibox_width_left = 0;
       var title_index = 0;
        var item_width = 0;
        var all_width = 0;
        var last_offset = 0;
        var length = $(".products_14_class_title li").length;

        $(".products_14_class_title li:first-child").addClass("proClass_on");
        $(".products_14_class_title li").hover(function(){
            class_index = $(this).index();
            waibox_width_left = -1200*class_index;
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            $(".products-14__content--right--wai").stop().animate({left:waibox_width_left+"px"},600);
        });
            $('.right_click').click(function(){
                var active = $(".proClass_on").index();
                title_index = active;
                title_index+=1;
                $(".products_14_class_title li").eq(title_index).addClass("proClass_on").siblings("li").removeClass("proClass_on");
                if(title_index>(length-1)){
                    title_index = 0;
                    $(".products_14_class_title li").eq(title_index).addClass("proClass_on").siblings("li").removeClass("proClass_on");
                    $(".products-14__content--right--wai").stop().animate({left:"0px"},600);
                    $(".products_14_class_title").animate({left:"0px"},600);
                    all_width = 0;
                }else{
                    $(".products_14_class_title li").eq(title_index).addClass("proClass_on").siblings("li").removeClass("proClass_on");
                    $(".products-14__content--right--wai").stop().animate({left:-1200*title_index+"px"},600);
                    if(title_index>2 && title_index<=(length-1)){
                        var item_width = -($(".products_14_class_title li").eq(title_index).width());
                        all_width = (all_width + item_width);
                        last_offset = all_width;
                        $(".products_14_class_title").animate({left:all_width+"px"},600);
                    }
                }
            });
            $('.left_click').click(function(){

                var active = $(".proClass_on").index();
                title_index = active;
                title_index-=1;
                $(".products_14_class_title li").eq(title_index).addClass("proClass_on").siblings("li").removeClass("proClass_on");
                $(".products-14__content--right--wai").stop().animate({left:-1200*title_index+"px"},600);
                if(title_index>=3){
                    var item_width = ($(".products_14_class_title li").eq(title_index+1).width());
                    all_width = (all_width + item_width);
                    $(".products_14_class_title").animate({left:all_width+"px"},600);
                }else if(title_index>=0 && title_index<3){
                    $(".products_14_class_title").animate({left:"0px"},600);

                }else{
                    all_width = last_offset;
                    $(".products_14_class_title").animate({left:last_offset+"px"},600);
                    title_index = length-1;
                    $(".products_14_class_title li").eq(title_index).addClass("proClass_on").siblings("li").removeClass("proClass_on");
                    $(".products-14__content--right--wai").stop().animate({left: (-1200*title_index)+"px"},600);
                }
            });
    })
});

