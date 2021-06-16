require(['jquery','swiper'],function($,Swiper){
    $(document).ready(function(){
        $(".new_hjzf_news-2 .hj02_proclasslist li").hover(function(){
           $(this).index();
            galleryTop_news.slideTo($(this).index(), 1000, false);
        });
        var galleryTop_news = new Swiper('.hj02-news-box', {
            spaceBetween: 10,
            autoHeight: true,
            on: {
                resize: function(){
                    galleryTop_news.update();
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
                    $(".new_hjzf_news-2 .hj02_proclasslist li").eq(this.activeIndex).addClass("active").siblings('li').removeClass("active");
                },
            },
           /* navigation: {
                nextEl: '.swiper-next-product2',
                prevEl: '.swiper-prev-product2',
            },*/
        });
        $(".new_hjzf_news-2 .hj02_proclasslist li:first-child").addClass("active");
        $(".new_hjzf_news-2 .hj02_proclasslist li").hover(function(){
            $(this).trigger("click");
            $(this).removeClass("active").addClass("active").siblings("li").removeClass("active");
        })

    })
});