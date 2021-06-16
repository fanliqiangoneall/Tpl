require(['swiper','jquery'],function(Swiper,$){
    
    var banner_swiper = new Swiper('.zlybanner_1',{
        speed:1500,
        autoHeight: true,
		effect : 'fade',
		fadeEffect: {
		  crossFade: true,
		},
        pagination : {
            el:'.zlybanner_1 .hj-banner-pagination',
            clickable :true,
        },
        autoplay: true,
        navigation: {
            nextEl: '.hj-banner-next',
            prevEl: '.hj-banner-prev',
        },
    });
   

    var banner_swipera = new Swiper('.zlybanner_1_m',{
        speed:1500,
        autoHeight: true,
		effect : 'fade',
		fadeEffect: {
		  crossFade: true,
		},
        pagination : {
            el:'.zlybanner_1_m .hj-bannerm-pagination',
            clickable :true,
        },
        autoplay: true,
        navigation: {
            nextEl: '.hj-bannerm-next',
            prevEl: '.hj-bannerm-prev',
        }
    });
    if(banner_swipera.slides.length <= 1 || banner_swiper .slides.length <= 1){
        $('.hj-bannerm-next').hide();
        $('.hj-bannerm-prev').hide();
        $('.hj-banner-next').hide();
        $('.hj-banner-prev').hide();
        $('.hj-bannerm-pagination').hide();
        $('.hj-banner-pagination').hide();
    };
    
});
