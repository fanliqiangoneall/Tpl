require(['swiper','jquery'],function(Swiper,$){
    
    var banner_swiper = new Swiper('.banner_11_wrapper',{
        speed:1500,
		fadeEffect: {
		  crossFade: true,
		},
        pagination : {
            el:'.banner_11_wrapper .banner_11_pagination',
            clickable :true,
        },
        autoplay:true,
        navigation: {
            nextEl: '.banner_11_next',
            prevEl: '.banner_11_prev',
        },
        on: {
            init: function () {
                if(this.params.slidesPerView <= 1) {
                    $('.banner_11_pagination').hide();
                    $('.banner_11_next').hide();
                    $('.banner_11_prev').hide();
                }
            }
        }
    });
    if(banner_swiper.slides.length<=3){
        banner_swiper.autoplay.stop();
    };
    $('.mobile_navbutton').click(function () {
        $('.d-none').addClass('on');
        $('.mobile_video').addClass('on');
    });
    $('.mobile-menu-Sidebar-close').click(function () {
        $('.d-none').removeClass('on');
        $('.mobile_video').removeClass('on');
    });

});
