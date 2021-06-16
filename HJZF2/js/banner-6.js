require(['swiper','jquery','lazyload'],function(Swiper,$,lazyload){


        var swiperFlag = false;
        var swiper = new Swiper('.banner-6__container', {
            loop: true,
            lazy: {
                loadPrevNext: true,
            },
            autoplay:true,
            width: window.innerWidth,
            height : window.innerHeight,
            pagination: {
                el: '.banner-6__pagination',
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
                        pausedVideo(slide);
                    }
                },
                slideChangeTransitionEnd: function(){
                    slide=this.slides.eq(this.activeIndex);
                    slide.addClass('ani-slide');
                    if(!swiperFlag) {
                        swiperFlag = true;
                    } else {
                        videoSelect(slide);
                    }
                }
            }
        });
        var layer = "<div id='banner-6__layer'style='width: 0;height: 0;background: #000;position: fixed;top: 50%;left: 50%;z-index: 999;overflow: hidden;'><video controls autoplay style='width: 80%;height: 80%;position: relative;left: 50%;top:50%;transform: translateX(-50%) translateY(-50%)'></video><span><i class='fa fa-window-close-o'></i></span></div>";
        $("#banner-6").append(layer);

        function videoSelect(_this){
            var cc = _this.hasClass('swiper-slide-active');
            var dd = _this.hasClass('ani-slide');
            if(cc && dd && (_this.find("video").length>0)){
                swiper.autoplay.stop();
                $("#banner-6__layer").css({"left":"50%","top":"50%"});
                var currentTime = _this.find("video")[0].currentTime;
                var duration = _this.find("video")[0].duration;
                var startTime = _this.find("video")[0].startTime;
                _this.find("video")[0].play();
                var is_playFinish = setInterval(function(){
                    if(_this.find("video")[0]){
                        if((_this.find("video")[0].currentTime) === duration){
                            duration = 0;
                            swiper.slideNext();
                            clearInterval(is_playFinish);
                            return false;
                        }
                    }
                },100);
            }
        };

        function videoFirst(_this){
            var currentTime = _this.find("video")[0].currentTime;
            var duration = _this.find("video")[0].duration;
            _this.find("video")[0].play();
            if(_this.length>0){
                var is_playFinish = setInterval(function(){
                    if(_this.find("video")[0].ended){
                        clearInterval(is_playFinish);
                        swiper.slideNext();
                    }
                }, 100);
            }
        };
        function pausedVideo(_this){
            if(_this.find("video").length>0){
                _this.find("video")[0].pause();
            }
        };
        if($(".swiper-slide-active[data-swiper-slide-index=0]").length>0){
            if($(".swiper-slide-active[data-swiper-slide-index=0]").find("video")[0]){
                $(".swiper-slide-active[data-swiper-slide-index=0]").find("video")[0].play();
                var is_playFinish = setInterval(function(){
                    if($(".swiper-slide-active[data-swiper-slide-index=0]").find("video")[0]){
                        if($(".swiper-slide-active[data-swiper-slide-index=0]").find("video")[0].ended){
                            clearInterval(is_playFinish);
                            swiper.slideNext();
                        }
                    }
                }, 100);
            }else{
                swiper.autoplay.start();
            }

        };
        $(window).resize(function(){
            var win_height = $(window).height();
            $("#banner-6").height(win_height);
        });

});
