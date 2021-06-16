require(['jquery'],function($){
    $(document).ready(function(){
        var waibox_width=1190*$(".new_hjzf_products-16 .index_prolist_wai_cont").length;
        $(".new_hjzf_products-16 .index_prolist_waibox").css("width",waibox_width+'px');
        $(".new_hjzf_products-16 .hj02_proclasslist2 li:first-child").addClass("proClass_on");
        $(".new_hjzf_products-16 .hj02_proclasslist2 li").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            var waibox_width_left = -1190*class_index;
            $(".new_hjzf_products-16 .index_prolist_waibox2").stop().animate({left:waibox_width_left+"px"},600);

        });

        $(".product--16__nav li:first-child").addClass("nav_on");
        var nav_index = 0;
        $(".product--16__nav li").hover(function(){
            nav_index = $(this).index();
            $(this).addClass("nav_on").siblings().removeClass("nav_on");
            var nav_left = -618*nav_index;
            $(".new_hjzf_products-16 .hj02-index-pro2-leftWrap").stop().animate({left:nav_left+"px"},600);
        })
        var timer = setInterval(function(){
            nav_index+=1;
            if(nav_index>2){
                nav_index =0;
            }
            $(".product--16__nav li").eq(nav_index).addClass("nav_on").siblings().removeClass("nav_on");
            var nav_left = -618*nav_index;
            $(".new_hjzf_products-16 .hj02-index-pro2-leftWrap").stop().animate({left:nav_left+"px"},600);
        },2000);

    });
    window.onload = function(){
        var leftheight = ($(".product--16__rightItem").height()+25)*2;
        console.log(leftheight);
        $(".new_hjzf_products-16 .hj02-index-pro2-left").height(leftheight);
        $(".new_hjzf_products-16 .hj02-index-pro2-left .hj02-index-pro2-item-img").height(leftheight-105);
        $(".new_hjzf_products-16 .index_prolist_wai2").height(leftheight);
    };
});
