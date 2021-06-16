require(['jquery','countTo','swiper'],function($,countTo,Swiper){
    if($("#aboutus--2").length>0){
        var wrapTop = $("#aboutus--2").offset().top;
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
    var aboutus2_swiper = new Swiper('.aboutus--2__swiper',{
        speed:800,
        mousewheel: false,
        autoHeight: true,
        pagination : {
            clickable: true,
            el:'.new_hjzf_aboutus_pagination',
        },
        autoplay:true,
        loop:true,
        on: {
            resize: function(){
                aboutus2_swiper.update(true);
            }
        }
    });
    if(aboutus2_swiper.slides.length<4){
        aboutus2_swiper.destroy(false);
    }



})

