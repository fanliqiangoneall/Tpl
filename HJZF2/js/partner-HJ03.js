require(['swiper','jquery'],function(Swiper,$){
    if($('.new_hjzf_partner-HJ03 .hj03-customer').length>0){
        var new_hjzf_products_swiper_pro = new Swiper('.new_hjzf_partner-HJ03 .hj03-customer', {
            loop: true,
            autoplay:true,
            navigation: {
                nextEl: '.new_hjzf_partner-HJ03 .hj03-customer-next',
                prevEl: '.new_hjzf_partner-HJ03 .hj03-customer-prev',
            },
        });
        if(new_hjzf_products_swiper_pro.slides.length<4){
            new_hjzf_products_swiper_pro.destroy(false);
        }
    }
})