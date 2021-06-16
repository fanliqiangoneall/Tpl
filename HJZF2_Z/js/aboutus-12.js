require(['jquery','countTo','swiper'],function($,countTo,Swiper){
    if($(".hjzf2__aboutus-12").length>0){
        var wrapTop = $(".hjzf2__aboutus-12").offset().top;
        
        var istrue = true;
        $(window).on("scroll",
            function() {
                var s = $(window).scrollTop();
                
                if (s > wrapTop-200 && istrue) {
                    countTo.counTo();
                    $(".timer").each(count);
                    function count(a) {
                        var b = $(this);
                        a = $.extend({},
                            a || {},
                            b.data("countToOptions") || {});
                        b.countTo(a)
                    };
                   
                }
            });
    }
});

