require(['jquery','countTo','swiper'],function($,countTo,Swiper){
    if($(".HJZF3_aboutus__hj02").length>0){
        var wrapTop = $(".HJZF3_aboutus__hj02").offset().top;
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
})

