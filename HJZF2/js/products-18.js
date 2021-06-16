require(['jquery','swiper','lazyload'],function($,swiper,lazyload){
    $("img.lazy").lazyload({effect: "fadeIn"});
    $(".new_hjzf_products-18 .small_pic li").mouseover(function(){
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        var preNumber=$(this).prevAll().size()+1;
        $(".new_hjzf_products-18 .big_pic li").removeClass("on");
        $(".new_hjzf_products-18 .big_pic li:nth-child("+preNumber+")").addClass("on");
    });





})

