require(['swiper','jquery'],function(Swiper,$){
    $('.banner__hj04box .main-scroll-icon').click(function (){
        var dom = $('.new_hjzf_banner-HJ04').next('div');
        $('html,body').animate({scrollTop: dom.offset().top}, 500);
    });
    
    if($(window).width()>768){
        var banner__hj04_tab = new Swiper('.banner__hj04_tab', {
            spaceBetween: 0,
            slidesPerView: 2,
            loop: true,
            freeMode: true,
            loopedSlides: 2, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true
        });
        var banner__hj04_swiper = new Swiper('.banner__hj04_swiper', {
            spaceBetween: 0,
            loop:true,
            speed:2000,
            autoplay: {
                delay: 5000,//1秒切换一次
            },
            loopedSlides: 2, //looped slides should be the same
            navigation: {
                nextEl: '.banner__hj04_tabnext',
                prevEl: '.banner__hj04_tabprev'
            },
            pagination: {
                el: '.banner__hj04_page',
                clickable: true,
            },
            on:{
                init:function(swiper){
                    slide=this.slides.eq(0);
                    slide.addClass('ani-slide');

                },
                transitionStart: function(){
                    for(i=0;i<this.slides.length;i++){
                        slide=this.slides.eq(i);
                        slide.removeClass('ani-slide');
                    }
                },
                transitionEnd: function(){
                    slide=this.slides.eq(this.activeIndex);
                    if(this.activeIndex == 7){
                        this.slides.eq(2).addClass('ani-slide');
                    }else{
                        slide.addClass('ani-slide');
                    }
                }
            }
        });
        if($(".banner__hj04_tab").length>0 && $(".banner__hj04_swiper").length>0 ){
            banner__hj04_tab.controller.control = banner__hj04_swiper;
            banner__hj04_swiper.controller.control = banner__hj04_tab;
        }
    }else{
        var banner__hj04_mobile = new Swiper('.banner__hj04_mobile', {
            loop: true,
            pagination: {
                el: '.banner__hj04_mobile_page',
                clickable: true,
            }
        });
    }
});
