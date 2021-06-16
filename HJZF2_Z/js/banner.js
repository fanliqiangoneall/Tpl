require(['swiper', 'jquery'], function (Swiper, $) {
	$(function () {
		if(!banner_timer){
			banner_timer = 4000;
		};
		var banner_swiper = new Swiper('.hj05-banner', {
			speed: 800,
			mousewheel: false,
			pagination: {
				el: '.hj-banner-pagination',
				clickable: true,
			},
			autoplay: {
				delay: banner_timer
			},
			loop: true,
			navigation: {
				nextEl: '.hj-banner-next',
				prevEl: '.hj-banner-prev',
			},
			on: {
				init: function (swiper) {
					slide = this.slides.eq(0);
					slide.addClass('ani-slide');
				},
				transitionStart: function () {
					for (i = 0; i < this.slides.length; i++) {
						slide = this.slides.eq(i);
						slide.removeClass('ani-slide');
					}
				},
				transitionEnd: function () {
					slide = this.slides.eq(this.activeIndex);
					slide.addClass('ani-slide');
				}
			}
		});
		if (typeof guan != "undefined" && guan != "") {
			banner_swiper.params.autoplay.delay = 4000;
			banner_swiper.autoplay.start();
		};
		var len = $('.hj05-banner .swiper-slide').length;
		if(len < 4) {
			$('.hj-banner-pagination').hide();
		}
		$(".hj05-banner").hover(function () {
			banner_swiper.autoplay.stop();
		}, function () {
			banner_swiper.autoplay.start();
		});
		$("#HJ05-banner1 .HJ-banner-item a").each(function(index, element) {
			var url=$(this).attr("href");
			if(url){
				if(url.indexOf("3d-focus")!=-1){
					$(this).attr("target","_blank");
				}
			}
		});
	});

});