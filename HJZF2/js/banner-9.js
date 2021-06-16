require(['swiper','jquery'],function(Swiper,$){
        var swiper = new Swiper('.banner-9__container', {
            loop: true,
            lazy: {
                loadPrevNext: true,
            },
            autoplay : {
                delay:3000
            },
            speed:1000,
            width: window.innerWidth,
            height : window.innerHeight,
            pagination: {
                el: '.banner-9__pagination',
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
                slideChangeTransitionEnd: function(){
                    slide=this.slides.eq(this.activeIndex);
                    slide.addClass('ani-slide');

                }
            }
        });

        $(window).resize(function(){
            var win_height = $(window).height();
            $("#banner-9").height(win_height);
        });

});
