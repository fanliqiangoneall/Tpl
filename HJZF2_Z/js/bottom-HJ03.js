require(['jquery', 'swiper',],function($, Swiper){
   
    if($(".hjzf_nav_page").length==0){
        $(".hjzf_bottom-hj03").height("auto");
        $(".bottom-hj03_foot").css({"position":"relative"});
        $(".bottom-hj03_foot > div").css({"marginTop":"0","marginBottom":"0","paddingTop":"50px","paddingBottom":"60px"});
    }

    new Swiper('.hjzf2_Z_bottom_hj03_jia_container', {
        slidesPerView: 3,
        breakpoints: {
            530: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2
            }
        },
        autoplay: true
    });
});

