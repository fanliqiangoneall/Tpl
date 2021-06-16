require(['swiper','jquery','countTo'],function(Swiper,$,countTo){
    $(document).ready(function(){
        var all_index = $(".HJZF2__service-3__boxWrap2 li").length;

        $(".HJZF2__service-3__all").text("0"+all_index);


        $(".HJZF2__service-3__itemWrap2 li").each(function(){
            $(this).find("span").text("0"+($(this).index()+1));
        });

        $(".HJZF2__service-3__itemWrap2 li:first-child").addClass("active");
        $(".HJZF2__service-3__itemWrap2 li").hover(function(){
           
            /*移动left*/
            var left = $(".HJZF2__service-3__boxWrap2").position().left;
            var index = -($(this).index());
            $(this).addClass("active").siblings("li").removeClass("active");
            var new_left = (index*1200-848);
            $(".HJZF2__service-3__boxWrap2").stop().animate({left:new_left},700);

            /*控制文字显示*/
            $(".HJZF2__service-3__descWrap li").eq($(this).index()).css("display","block").siblings("li").css("display","none");

            /*控制显示第几个*/
            $(".HJZF2__service-3__active").text("0"+($(this).index()+1));

        });

        $(".HJZF2__service-3__boxWrap2").html($(".HJZF2__service-3__boxWrap2").html()+$(".HJZF2__service-3__boxWrap2").html());
        $(".HJZF2__service-3__boxWrap2 li:last-child").clone().insertBefore($(".HJZF2__service-3__boxWrap2 li:first-child"));
        var len = $(".HJZF2__service-3__boxWrap2 li").length;
        $(".HJZF2__service-3__boxWrap2").width((1200*len));

    });
    if($(".HJZF2__service-3__shuzi").length>0){
        var wrapTop = $(".HJZF2__service-3__shuzi").offset().top;
        var istrue = true;
        $(window).on("scroll",
            function() {
                var s = $(window).scrollTop();

                if (s > wrapTop - 800 && istrue) {
                    countTo.counTo();
                    $(".timer").each(count);
                    function count(a) {
                        var b = $(this);
                        a = $.extend({},
                            a || {},
                            b.data("countToOptions") || {});
                        b.countTo(a)
                    };
                    istrue = false;
                }
            });
    };

});
