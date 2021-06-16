require(['jquery', 'countTo'], function ($, countTo) {
    if ($(".HJZF2_Z_other_100").length > 0) {
        var wrapTop = $(".HJZF2_Z_other_100").offset().top;
        var istrue = true;
        $(window).on("scroll",
            function () {
                var s = $(window).scrollTop();
                if (s > wrapTop && istrue) {
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