require(['swiper', 'jquery'], function (Swiper, $) {
    if($(".banner-8").length>0){
        var swiperFlag = false;
        var length = 1;
        var swiper = new Swiper('.banner-8', {

            followFinger: false,
            speed: 800,
            mousewheel: false,
            pagination: {
                el: '.banner-8 .hj-banner-pagination',
            },

            cubeEffect: {
                slideShadows: false,
                shadow: false,
            },
            /*autoplay:true,*/
            loop: true,
            navigation: {
                nextEl: '.banner-8 .banner-8-next',
                prevEl: '.banner-8 .banner-8-prev',
            },
            on: {
                init: function (swiper) {
                    slide = this.slides.eq(this.activeIndex);
                    slide.addClass('ani-slide');

                    if(start_play=="true"){
                        if(this.slides.length<=3){
                            slide.find("video").attr("loop",'loop');
                            autoplay_start(slide);
                        }else if (this.slides.length>3){
                            autoplay_start(slide);
                            videoFirst(slide);
                        }
                    }else{
                        return;
                    }
                },
                transitionStart: function () {
                    for (i = 0; i < this.slides.length; i++) {
                        slide = this.slides.eq(i);
                        slide.removeClass('ani-slide');
                        pausedVideo(slide);
                    }
                },
                transitionEnd: function () {
                    slide = this.slides.eq(this.activeIndex);
                    slide.addClass('ani-slide');
                    if(!swiperFlag) {
                        swiperFlag = true;
                    } else if(this.slides.length>3 && (slide.find("video").length > 0)){
                        videoSelect(slide);
                    }

                },
            }
        });
//如果只有一个slide就销毁swiper
        if(swiper.slides.length<=3){
            swiper.destroy();
            $(".banner-8-prev").hide();
            $(".banner-8-next").hide();
        }else{
            /*no video,swiper autoplay */
            if(swiper.slides.find("video").length==0){
                swiper.autoplay.start();
            }
        }


    };

    function videoSelect(_this) {
        var cc = _this.hasClass('swiper-slide-active');
        var dd = _this.hasClass('ani-slide');
        if (cc && dd && (_this.find("video").length > 0)) {
            _this.find("video").parent().css("opacity",'1');
            swiper.autoplay.stop();
            videoFirst(_this);
            /*var currentTime = _this.find("video")[0].currentTime;
            var duration = _this.find("video")[0].duration;
            var startTime = _this.find("video")[0].startTime;
            _this.find("video")[0].play();
            var is_playFinish = setInterval(function () {
                if (_this.find("video")[0]) {
                    if ((_this.find("video")[0].currentTime) === duration) {
                        duration = 0;
                        swiper.slideNext();
                        clearInterval(is_playFinish);
                        return false;
                    }
                }
            }, 100);*/
        }else{
            setTimeout(function(){
                swiper.slideNext();
            },3000);
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
            _this.find("video").parent().css("opacity",'0');
        }
    };
    function autoplay_start(_this){
        if(_this.find("video").length>0){
            _this.find("video").parent().css("opacity",'1');
            setTimeout(function(){
                _this.find("video")[0].play();
                _this.find("video").parent().next().css({"opacity":'0',"transition":"1s"});
                _this.find("video").parent().prev().find(".xiaoshi").css({"opacity":'0',"transition":"5s"});
            },1000);
            var currentTime = _this.find("video")[0].currentTime;
            var duration = _this.find("video")[0].duration;
            var is_playFinish = setInterval(function () {
                if (_this.find("video")[0]) {
                    if ((_this.find("video")[0].currentTime) === duration) {
                        duration = 0;
                        _this.find("video").parent().next().css({"opacity":'1','background': 'rgba(0,0,0,0.5)',"transition":"2s"});
                        _this.find("video").parent().prev().find(".xiaoshi").css({"opacity":'1',"transition":"2s"});
                        autoplay_start(_this);
                        clearInterval(is_playFinish);
                    }
                }
            }, 100);
        }
    };

})