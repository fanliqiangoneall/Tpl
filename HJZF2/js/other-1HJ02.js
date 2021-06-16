require(['jquery','countTo'],function($,countTo){
    var wrapTop = $(".new_hjzf_other-1HJ02 #hj02_index_other1").offset().top;
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
        })


})

