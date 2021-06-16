require(['swiper','jquery'],function(Swiper,$){
    var swiper_adv = new Swiper('.new_hjzf_advantage-HJ02 .advantages_list', {
        pagination: {
            el: '.new_hjzf_advantage-HJ02 .hj02-adv-pagination',
            type: 'fraction',
        },
        loop:true,
        navigation: {
            nextEl: '.new_hjzf_advantage-HJ02 .hj02-adv-next',
            prevEl: '.new_hjzf_advantage-HJ02 .hj02-adv-prev',
        },
    });
    if ($(".new_hjzf_advantage-HJ02 .advantages2_list .swiper-slide").length<4) {
        $(".new_hjzf_advantage-HJ02 .advantages2_list .swiper-pagination").hide();
        $(".new_hjzf_advantage-HJ02 .advantages2_list .swiper-button-prev").hide();
        $(".new_hjzf_advantage-HJ02 .advantages2_list .swiper-button-next").hide();
    }
})