require(['swiper','jquery'],function(Swiper,$){
    var banner_swiper = new Swiper('.banner2_swiper',{
        speed:800,
        mousewheel: false,
        pagination : {
            el:'.banner2_swiper .hj-banner-pagination',
            clickable :true,
        },
        autoplay:false,
        loop:true,
        navigation: {
            nextEl: '.banner2_swiper .hj-banner-next',
            prevEl: '.banner2_swiper .hj-banner-prev',
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
                slide.addClass('ani-slide');
            }
        }
    });
});