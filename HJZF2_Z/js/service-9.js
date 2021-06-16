require(['swiper', 'jquery'], function (Swiper, $) {
    if($(window).width()>576){
        var swiper = new Swiper('.service-9_swiper',{
            followFinger : false,
            speed:800,
            slidesPerView: 4,
            spaceBetween: 0,
            pagination : {
                el:'.service-9_page',
            },
            on:{
                init:function(swiper){
                    slide=this.slides.eq(0);
                    slide.addClass('ani-slide');
                    $(".servise img").eq(0).addClass("on").siblings("img").removeClass("on");
                },
                transitionStart: function(){
                    for(i=0;i<this.slides.length;i++){
                        slide=this.slides.eq(i);
                        slide.removeClass('ani-slide');
                    }
                },
                transitionEnd: function(){
                    slide=this.slides.eq(this.activeIndex);
                    slide.addClass('ani-slide');

                },
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            },
        });
    }else{
        var swiper_servmobile = new Swiper('.service-9_swiper', {
            slidesPerView: 1,
            slidesPerColumn: 6,
            spaceBetween: 30,
            pagination: {
                el: '.service-9_page',
                clickable: true,
            },
        });
    }
    $(".service-9_slide").hover(function(){
        var index = $(this).index();
        $(".servise img").eq(index).addClass("on").siblings("img").removeClass("on");
    })
});