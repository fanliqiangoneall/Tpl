require(['jquery','swiper'],function($,Swiper){
    var hjzf_procate5 = new Swiper('.hjzf_procate-5__swiper', {
        pagination: {
            el: '.hjzf_procate-5_page',
            clickable: true
        }
    });
    if($('.hjzf_procate-5__swiper').length>0 && hjzf_procate5){
        if(hjzf_procate5.slides.length < 2){
                $(".hjzf_procate-5_page").hide();
        }
    }
});

