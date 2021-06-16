require(['jquery','countTo','swiper'],function($,countTo,Swiper){
    $(document).ready(function(){
        if($(".new_hjzf_aboutus-12").length>0){
            var wrapTop = $(".new_hjzf_aboutus-12").offset().top;
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
        if($(".aboutus-12__swiper").length>0){
            var swiper = new Swiper('.aboutus-12__swiper',{
                speed:800,
                mousewheel: false,
                pagination : {
                    clickable: true,
                    el:'.new_hjzf_aboutus_pagination',
                },
                autoplay:true,
                loop:true,
            });
            if(swiper.slides.length<4){
                swiper.destroy(false);
                var wind_height = $(window).height();
                var video_src = $('#adv_video1').attr("data-video");
                var video_img = $('#adv_video1 img').attr("src");
                if(video_src.indexOf(".mp4")>0){
                    $(".aboutus-12__swiper li").append("<video src='"+video_src+"' style='position:absolute;top:0;left:0;object-fit: fill;' width='603' height='309' controls='controls' id='videoBox' poster='"+video_img+"'></video>");
                }else if(video_str){
                    $(".aboutus-12__swiper li").append(video_str);
                }
            }
        }
    })
});


