require(['jquery', 'swiper'], function ($, Swiper) {
    function doPro(){
        $(".products-2hj02__categroy li:first-child").addClass("proClass_on");
        var width = $(".products-2hj02__content--down").width();
        var all_width = width * $(".products-2hj02__categroy li").length;
        $(".products-2hj02__content--down__wrap").width(all_width);
        $(".products-2hj02__downBox").width(width);

        $(".products-2hj02__categroy li").click(function () {
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            var waibox_width_left = -(width * class_index);
            $(".products-2hj02__content--down__wrap").stop().animate({left: waibox_width_left + "px"}, 600);

        });
    }
    doPro();
    $(window).resize(function(){
        doPro();
    })
});


