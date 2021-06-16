require(['jquery'],function($){
    $(document).ready(function(){
        var waibox_width=1190*$(".new_hjzf_products-10 .index_prolist_wai_cont").length;
        $(".new_hjzf_products-10 .index_prolist_waibox").css("width",waibox_width+'px');
        $(".new_hjzf_products-10 .hj02_proclasslist2 li:first-child").addClass("proClass_on");
        $(".new_hjzf_products-10 .hj02_proclasslist2 li").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            var waibox_width_left = -1190*class_index;
            $(".new_hjzf_products-10 .index_prolist_waibox2").stop().animate({left:waibox_width_left+"px"},600);

        });

    });
    window.onload = function(){
        var left_height = $(".new_hjzf_products-10 .hj02-index-pro2-right").height();
        $(".new_hjzf_products-10 .hj02-index-pro2-left").height(left_height);
        $(".new_hjzf_products-10 .index_prolist_wai2").height(left_height);
    };
});
