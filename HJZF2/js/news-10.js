require(['jquery','swiper'],function($,Swiper){
    $(document).ready(function(){
       $(".HJZF2__news-10--leftContent ul li:first-child").addClass("active");
        $(".HJZF2__news-10--leftContent ul li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
        })
    });
    var swiper = new Swiper('.HJZF2__news-10right__swiper', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        autoplay: true,
        navigation: {
            nextEl: '.HJZF2__news-10right-next',
            prevEl: '.HJZF2__news-10right-prev',
        },
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 280 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    slide.transition(transition);
                }

            }
        }
    });
});