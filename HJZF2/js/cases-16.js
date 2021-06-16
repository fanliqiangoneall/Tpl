require(['swiper','jquery','lazyload'],function(Swiper,$,lazyload){
    $(".new_hjzf_cases-16_right_top").css("height",$(".new_hjzf_cases-16_item").height());
    $("img.lazy").lazyload({effect: "fadeIn"});
})