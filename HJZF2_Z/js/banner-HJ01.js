require(['swiper','jquery'],function(Swiper,$){
    if( !($('.hjzf_hj01_swiper').height() > $(window).height())){
        $('.banner-hj01-btn').addClass('normal');
    }
    $('.banner-hj01-btn img').click(function (){
        var dom = $('.new_hjzf_banner-HJ01').next('div');
        $('html,body').animate({scrollTop: dom.offset().top}, 500);
    });
    
    var swiperFlag = false;
    var banner_swiper = new Swiper('.hjzf_hj01_swiper',{
        speed:1500,
        mousewheel: false,
        pagination : {
            el:'.hjzf_pagination-hj01',
            clickable :true,
        },
        autoplay:{
            delay: 3000,
        },
        loop:true,
        navigation: {
            nextEl: '.hjzf_hj01-banner-next',
            prevEl: '.hjzf_hj01-banner-prev',
        },
        on:{
            init:function(swiper){
                slide=this.slides.eq(1);
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
                if(!swiperFlag) {
                    swiperFlag = true;
                } else {
                    videoSelect(slide);
                }
            },

        }
    });
    function videoFirst(_this){
        if(_this.length>0){
            if($(window).width()>576){
                if(_this.find("video")[0]){
                    banner_swiper.autoplay.stop();
                    var src = _this.find("video").attr("data-src");
                    var currentTime = _this.find("video")[0].currentTime;
                    var duration = _this.find("video")[0].duration;
                    if($(window).width()>576){
                        _this.find("video").attr("src",src);
                        _this.find("video")[0].play();
                        var is_playFinish = setInterval(function(){
                            if(_this.find("video")[0].ended){
                                clearInterval(is_playFinish);
                                banner_swiper.slideNext();
                            }
                        }, 100);
                    }
                }
            }else{
                if(_this.find("video")[0]){
                    _this.find("video")[0].remove();
                };
                banner_swiper.autoplay.start();
            }

        }
    };
    videoFirst($(".swiper-slide-active.ani-slide"));
   
    
    function videoSelect(_this){
        var cc = _this.hasClass('swiper-slide-active');
        var dd = _this.hasClass('ani-slide');
        var src= _this.find("video").attr("data-src");
        if(cc && dd && (_this.find("video").length>0) && src){
            banner_swiper.autoplay.stop();
            var currentTime = _this.find("video")[0].currentTime;
            var duration = _this.find("video")[0].duration;
            var startTime = _this.find("video")[0].startTime;
            if($(window).width()>576){
                _this.find("video").attr("src",src);
                _this.find("video")[0].play();
                var is_playFinish = setInterval(function(){
                    if(_this.find("video")[0]){
                        if(_this.find("video")[0].ended){
                            duration = 0;
                            banner_swiper.slideNext();
                            clearInterval(is_playFinish);
                            return false;
                        }
                    }
                },100);
            }else{
                _this.find("video").remove();
            }
        }else{
            banner_swiper.autoplay.start();
        }
    };
    function pausedVideo(_this){
        if(_this.find("video").length>0){
            _this.find("video")[0].pause();
        }
    };
    function videoPlay(){
        $(".hjzf_banner_videoPlay").click(function(){
            $(this).toggleClass("on");
            if($(".swiper-slide-active.ani-slide video")[0].paused){
                $(".swiper-slide-active.ani-slide video")[0].play();
            }else{
                $(".swiper-slide-active.ani-slide video")[0].pause();
            }
        });
    };
    if($('.hjzf_hj01_swiper').length>0){
        //鼠标覆盖停止自动切换
        banner_swiper.el.onmouseover = function(){
            banner_swiper.autoplay.stop();
        };

        //鼠标离开开始自动切换
        banner_swiper.el.onmouseout = function(){
            banner_swiper.autoplay.start();
        };
    };


    function size(){
        if($(window).width()<576){
            $(".hjzf_banner_videoBox").hide();
            $(".hjzf_banner_videoPlay").hide();
        }else{
            $(".hjzf_banner_videoBox").show();
            $(".hjzf_banner_videoPlay").show();
        }
    };
    size();
    $(window).resize(function(){
        size();
    })
});
