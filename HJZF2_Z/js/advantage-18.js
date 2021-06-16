require(['swiper','jquery'],function(Swiper,$){
    if($(".new_hjzf_advantage-18 .advantages_list").length>0){
        var swiper_adv = new Swiper('.new_hjzf_advantage-18 .advantages_list', {
            pagination: {
                el: '.new_hjzf_advantage-18 .hj02-adv-pagination',
                type: 'fraction',
            },
            loop:true,
            navigation: {
                nextEl: '.new_hjzf_advantage-18 .hj02-adv-next',
                prevEl: '.new_hjzf_advantage-18 .hj02-adv-prev',
            },
            on: {
                resize: function(){
                    swiper_adv.update()
                }, 
              },
        });
    
        if(swiper_adv.slides.length<=3){
            swiper_adv.destroy(true);
        }
        if ($(".new_hjzf_advantage-18 .advantages2_list .swiper-slide").length<4) {
            $(".new_hjzf_advantage-18 .advantages2_list .swiper-pagination").hide();
            $(".new_hjzf_advantage-18 .advantages2_list .swiper-button-prev").hide();
            $(".new_hjzf_advantage-18 .advantages2_list .swiper-button-next").hide();
        }
    }    
});