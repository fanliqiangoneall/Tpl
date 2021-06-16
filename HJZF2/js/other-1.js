require(['swiper','jquery'],function(Swiper,$){
    var other_1_swiper = new Swiper('.new_hjzf_other-1 .hj05-banner2',{
        followFinger : false,
        speed:800,
        mousewheel: false,
         autoplay:true,
        loop:true,
        navigation: {
            nextEl: '.new_hjzf_other-1 .hj05-banner2 .hj-banner-next',
            prevEl: '.new_hjzf_other-1 .hj05-banner2 .hj-banner-prev',
        },
        on:{
            init:function(other_1_swiper){
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
            },
        }
    });
    if(other_1_swiper.slides){
        if(other_1_swiper.slides.length ==1){
            $(".new_hjzf_other-1 .hj05-banner2 .hj-banner-next").hide();
            $(".new_hjzf_other-1 .hj05-banner2 .hj-banner-prev").hide();
        }
    }
})






