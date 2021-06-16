require(['swiper','jquery','CountUp','waypoints','countTo'],function(Swiper,$,CountUp,Waypoint,countTo){
    var banner_swiper = new Swiper('.hj03-banner', {
        loop: true,
        pagination: {
            el: '.hj03-banner1-pagination',
            clickable: true,
        },
        autoplay:true,
        navigation: {
            nextEl: '.hj03-banner1-next',
            prevEl: '.hj03-banner1-prev',
        },
    });
    if($(".hj03-banner1-box").index()!=-1){
        var wrapTop = $(".hj03-banner1-box").offset().top;
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
    }



})


