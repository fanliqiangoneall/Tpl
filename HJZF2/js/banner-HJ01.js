
require(['swiper','jquery'],function(Swiper,$){
	var swiperFlag = false;
    var swiper = new Swiper('.hj05-banner',{
        speed:800,
        mousewheel: false,
        pagination : {
            el:'.hj05-banner .hj-banner-pagination',
        },
        /*autoplay:true,*/
        loop:true,
        navigation: {
            nextEl: '.hj05-banner .hj-banner-next',
            prevEl: '.hj05-banner .hj-banner-prev',
        },
        on:{
            init:function(swiper){
                slide=this.slides.eq(0);
                slide.addClass('ani-slide');
				videoPlay();
            },
            transitionStart: function(){
                for(i=0;i<this.slides.length;i++){
                    slide=this.slides.eq(i);
                    slide.removeClass('ani-slide');
					pausedVideo(slide);
                }
            },
            transitionEnd: function(){
                slide=this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
				if (!swiperFlag) {
					swiperFlag = true;
				} else {
					videoSelect(slide);
				}

            },
        }
    });
	function videoFirst(_this) {
            if (_this.length > 0) {
                if (_this.find("video")[0]) {
                    swiper.autoplay.stop();
                    var src = _this.find("video").attr("data-src");
                    var currentTime = _this.find("video")[0].currentTime;
                    var duration = _this.find("video")[0].duration;
                    if ($(window).width() >= 1200) {
                        _this.find("video").attr("src", src);
                        setTimeout(function () {
                            _this.find("video")[0].play();
                        }, 100);
                        var is_playFinish = setInterval(function () {
                            if (_this.find("video")[0].ended) {
                                clearInterval(is_playFinish);
                                swiper.slideNext();
                            }
                        }, 100);
                    }
                } else {
                    swiper.autoplay.start();
                }
            }
        };
        videoFirst($(".swiper-slide-active"));
        
        function videoSelect(_this) {
            var cc = _this.hasClass('swiper-slide-active');
            var src = _this.find("video").attr("data-src");
            if (cc && (_this.find("video").length > 0) && src) {
                swiper.autoplay.stop();
                var currentTime = _this.find("video")[0].currentTime;
                var duration = _this.find("video")[0].duration;
                var startTime = _this.find("video")[0].startTime;
                if ($(window).width() >= 576) {
                    _this.find("video.hjzf_banner_video").attr("src", src);
                    setTimeout(function () {
                        _this.find("video")[0].play();
                    }, 100);
                    var is_playFinish = setInterval(function () {
                        if (_this.find("video")[0]) {
                            if (_this.find("video")[0].ended) {
                                duration = 0;
                                swiper.slideNext();
                                clearInterval(is_playFinish);
                                return false;
                            }
                        }
                    }, 100);
                }
            } else {
                swiper.autoplay.start();
            }
        };

        function pausedVideo(_this) {
            if (_this.find("video").length > 0) {
                _this.find("video")[0].pause();
            }
        };

        function videoPlay() {
            $(".hjzf_banner_videoPlay").click(function () {
                $(this).toggleClass("on");
                if ($(".swiper-slide-active.ani_slide video")[0].paused) {
                    $(".swiper-slide-active.ani_slide video")[0].play();
                } else {
                    $(".swiper-slide-active.ani_slide video")[0].pause();
                }
            });
        };
});