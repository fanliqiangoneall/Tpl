require(['jquery','swiper'],function($,Swiper){
    var hjzf_procate5 = new Swiper('.hjzf_prothree__swiper', {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 25,
        autoplay:{
            delay: 4000,
        },
        pagination: {
            el: '.hjzf_procate-3_page',
            clickable: true
        }
    });
    if($('.hjzf_procate-5__swiper').length>0 && hjzf_procate5){
        if(hjzf_procate5.slides.length < 2){
            $(".hjzf_procate-5_page").hide();
        }
    }
});

