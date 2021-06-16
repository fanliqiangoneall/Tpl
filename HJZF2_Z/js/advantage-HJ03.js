require(['jquery','countTo','swiper'],function($,countTo,Swiper){
    if($(".hjzf2_z_advantage_hj03_itemWrap").length>0){
        var wrapTop = $(".hjzf2_z_advantage_hj03_itemWrap").offset().top;
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
                };
            });
    };




});

