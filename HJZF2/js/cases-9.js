require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.case-9__swiper', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: '.case-9__swiper-next',
            prevEl: '.case-9__swiper-prev',
        },
        on:{
            init:function(swiper){
                $(".case-9__swiper .swiper-slide-active").next().next().next().addClass("opacity");
            },
            transitionStart: function(){

            },
            transitionEnd: function(){
                slide=this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
                $(".case-9__swiper .swiper-slide-active").next().next().next().addClass("opacity").siblings().removeClass("opacity");
                $(".case-9__swiper .swiper-slide-active").next().next().next().next().addClass("opacity")
            },
        }
    });

});
