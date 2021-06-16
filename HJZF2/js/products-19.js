require(['jquery'],function($){
    $(document).ready(function(){
        $(".products-19__categroy li:first-child").addClass("proClass_on");
        $(".products-19__categroy li").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");

            var waibox_width_left = -1200*class_index;
            $(".products-19__content--down__wrap").width((1200*$(".products-19__categroy li").length));
            $(".products-19__content--down__wrap").stop().animate({left:waibox_width_left+"px"},1200);
        });

    })
});


