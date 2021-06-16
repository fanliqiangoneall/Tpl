require(['jquery', 'swiper'], function ($) {
    $(".hjzf2_other_61_list li:first-child").addClass("active");
    $(".hjzf2_other_61_list li").hover(function(){
        var _index = $(this).index();       
        $(this).addClass('active').siblings("li").removeClass("active");
        $(".hjzf2_other_61_wrapper>div").eq(_index).addClass("active").siblings("div").removeClass("active");
    })
})