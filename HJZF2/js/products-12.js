require(['jquery'],function($){
    $(document).ready(function(){
        $(".hj02_proclasslist li:first-child").addClass("proClass_on");
        $(".products-12__content--left__class li").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            var waibox_width_left = -896*class_index;
            $(".products-12__content--right--wai").stop().animate({left:waibox_width_left+"px"},600);

        });

    })
});


