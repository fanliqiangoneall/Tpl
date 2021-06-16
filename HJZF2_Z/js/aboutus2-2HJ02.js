require(['jquery','countTo','swiper'],function($,countTo,Swiper){
    if($(".hjzf_2hj02").length>0){
        var wrapTop = $(".hjzf_2hj02").offset().top;
        var istrue = true;
        $(window).on("scroll",
            function() {
                var s = $(window).scrollTop();

                if (s > wrapTop - 800 && istrue) {
                    countTo.counTo();
                    $(".timer").each(count);
                    function count(a) {
                        var b = $(this);
                        a = $.extend({},
                            a || {},
                            b.data("countToOptions") || {});
                        b.countTo(a)
                    };
                    istrue = false;
                }
            });
    };

    var certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: false,
        pagination: {
            el: '.hjzf_2hj02_pagination',
            clickable :true,
        },
        on: {
            progress: function(progress) {
                var jianju = 100;
                if($(window).width()<576){
                    jianju = 50;
                }

                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }

                        translate = slideProgress * modify * jianju + 'px';


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

    })


})

