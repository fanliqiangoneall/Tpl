require(['swiper','jquery'],function(Swiper,$){
    
    var banner_swiper = new Swiper('.zlybanner',{
        speed:1500,
        autoHeight: true,
		effect : 'fade',
		fadeEffect: {
		  crossFade: true,
		},
        pagination : {
            el:'.zlybanner .hj-banner-pagination',
            clickable :true,
        },
        autoplay:true,
        loop:true,
        navigation: {
            nextEl: '.hj-banner-next',
            prevEl: '.hj-banner-prev',
        },
        on: {
            init: function () {
                if(this.slides.length <= 1) {
                    $('.hj-banner-pagination').hide();
                    $('.hj-banner-next').hide();
                    $('.hj-banner-prev').hide();
                }
            }
        }
    });
    if(banner_swiper.slides.length<=3){
        banner_swiper.autoplay.stop();
    };


    var zlybanner = new Swiper('.zlybanner_mobile',{
        speed:1500,
        autoHeight: true,
		effect : 'fade',
		fadeEffect: {
		  crossFade: true,
		},
        pagination : {
            el:'.zlybanner_mobile .hjmb-banner-pagination',
            clickable :true,
        },
        autoplay:true,
        loop:true,
        navigation: {
            nextEl: '.hjmb-banner-next',
            prevEl: '.hjmb-banner-prev',
        },
        on: {
            init: function () {
                if(this.slides.length <= 1) {
                    $('.hjmb-banner-pagination').hide();
                    $('.hjmb-banner-next').hide();
                    $('.hjmb-banner-prev').hide();
                }
            }
        }
    });
    if(zlybanner.slides.length<=3){
        zlybanner.autoplay.stop();
    };
});
