require(['swiper', 'jquery', 'layer'], function (Swiper, $, layer) {
    $(function () {
        $('.hj_banner_item').click(function () {
            $(this).find('video').trigger('play');
        });
        
        $('.banner-hj03-btn img').click(function () {
            var dom = $('.new_hjzf_banner-HJ03').next('div');
            $('html,body').animate({
                scrollTop: dom.offset().top
            }, 500);
        });
        $(document).resize(function () {
            if ($(window).width() <= 1200) {
                $(".hj_banner_next").css('right', '10px');
                $(".hj_banner_prev").css('left', '10px')
            };
        });
        if ($(window).width() <= 1200) {
            $(".hj_banner_next").css('right', '10px');
            $(".hj_banner_prev").css('left', '10px');
        };
        var swiperFlag = false;
        var banner_swiper = new Swiper('.hj03_banner', {
            speed: 500,
            mousewheel: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.hj03_banner .hj_banner_pagination',
                clickable: true,
            },
            autoplay: false,
            loop: true,
            navigation: {
                nextEl: '.hj_banner_next',
                prevEl: '.hj_banner_prev',
            },
            on: {
                init: function (swiper) {
                    if (this.slides.length < 4) {
                        $(".hj_banner_next").hide();
                        $(".hj_banner_prev").hide();
                        $(".hj_banner_pagination").hide()
                    };
                    slide = this.slides.eq(1);
                    slide.addClass('ani_slide');
                    videoPlay();
                },
                transitionStart: function () {
                    for (i = 0; i < this.slides.length; i++) {
                        slide = this.slides.eq(i);
                        slide.removeClass('ani_slide');
                        pausedVideo(slide)
                    };
                },
                transitionEnd: function () {
                    slide = this.slides.eq(this.activeIndex);
                    slide.addClass('ani_slide');
                    if (!swiperFlag) {
                        swiperFlag = true;
                    } else {
                        videoSelect(slide);
                    };
                },
            }
        });
        if (typeof guan != "undefined" && guan != "") {
            banner_swiper.params.autoplay.delay = 4000;
            banner_swiper.autoplay.start();
        };

        function videoFirst(_this) {
            if (_this.length > 0) {
                if (_this.find("video")[0]) {
                    banner_swiper.autoplay.stop();
                    var src = _this.find("video").attr("data-src");
                    var currentTime = _this.find("video")[0].currentTime;
                    var duration = _this.find("video")[0].duration;
                    if ($(window).width() >= 1200) {
                        _this.find("video").attr("src", src);
                        setTimeout(function () {
                            if (autoLa == '') {
                                _this.find("video")[0].play();
                            };
                        }, 100);
                        var is_playFinish = setInterval(function () {
                            if (_this.find("video")[0].ended) {
                                clearInterval(is_playFinish);
                                banner_swiper.slideNext();
                            }
                        }, 100);
                    }
                } else {
                    banner_swiper.autoplay.start();
                };
            };
        };
        videoFirst($(".swiper-slide-active.ani_slide"));

        function videoSelect(_this) {
            var cc = _this.hasClass('swiper-slide-active');
            var dd = _this.hasClass('ani_slide');
            var src = _this.find("video").attr("data-src");
            if (cc && dd && (_this.find("video").length > 0)) {
                banner_swiper.autoplay.stop();
                var currentTime = _this.find("video")[0].currentTime;
                var duration = _this.find("video")[0].duration;
                var startTime = _this.find("video")[0].startTime;
                if ($(window).width() >= 576) {
                    _this.find("video").attr("src", src);
                    setTimeout(function () {
                        if (autoLa == '') {
                            _this.find("video")[0].play();
                        };
                    }, 100);
                    var is_playFinish = setInterval(function () {
                        if (_this.find("video")[0]) {
                            if (_this.find("video")[0].ended) {
                                duration = 0;
                                banner_swiper.slideNext();
                                clearInterval(is_playFinish);
                                return false;
                            }
                        }
                    }, 100)
                }
            } else {
                banner_swiper.autoplay.start();
            };
        };

        function pausedVideo(_this) {
            if (_this.find("video").length > 0) {
                _this.find("video")[0].pause();
            };
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
        if ($('.hj03_banner').length > 0 && banner_swiper) {
            banner_swiper.el.onmouseover = function () {
                banner_swiper.autoplay.stop();
            };
            banner_swiper.el.onmouseout = function () {
                banner_swiper.autoplay.start();
            };
        };

        $(".lay_video_open").click(function () {
            var video_url = $(this).attr("data-src");
            if (video_url.length > 0) {
                layer.open({
                    type: 2,
                    title: false,
                    area: ['80%', '70%'],
                    shade: 0.8,
                    closeBtn: 1,
                    shadeClose: true,
                    content: video_url
                });
            };
        });
		$("#HJ03-banner .hj_banner_item a").each(function(index, element) {
			var url=$(this).attr("href");
			if(url){
				if(url.indexOf("3d-focus")!=-1){
					$(this).attr("target","_blank");
				}
			}
		});
        /*  function size() {
             if ($(window).width() < 576) {
                 $(".hjzf_banner_videoBox").hide();
                 $(".hjzf_banner_videoPlay").hide()
             } else {
                 $(".hjzf_banner_videoBox").show();
                 $(".hjzf_banner_videoPlay").show()
             }
         };
         size();
         $(window).resize(function () {
             size()
         }) */

    })
});