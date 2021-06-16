require(['jquery', 'lightBox', 'swiper', 'layer'], function ($, lightBox, Swiper, layer) {
	// 钱璟移动端图片加链接
	$(function () {
		var w = $(window).width();
		if (($webid == '1309' || $webid == '1164') && w < 1200) {
			$('.pro_detail img').each(function () {
				var imgs = $(this).attr('src');
				$(this).wrapAll('<a href="' + imgs + ' "></a>');
			});
		}
	});

	$('#gallery img').click(function (i) {
		$("#model_wind").css({
			"opacity": "1",
			"zIndex": "10000",
			"visibility": "visible"
		});
	});
	$('#gallery .swiper-slide').click(function () {
		$('#model_wind').show();
		var index = $(this).index();
		var model_swiper = new Swiper('.model_wind_swiper', {
			navigation: {
				nextEl: '.swiper-button-next-model',
				prevEl: '.swiper-button-prev-model',
			},
			pagination: {
				el: '.swiper-pagination_model',
				type: 'fraction'
			},
			autoHeight: true,
			on: {
				init: function () {
					this.slideTo(index, 10, false);
				}
			}
		});
	});


	/*产品详情页360展示窗口，产品展示窗口*/
	$("#model_wind").click(function (event) {
		$(this).css({
			"opacity": "0",
			"zIndex": "-1",
			"visibility": "hidden"
		});
		event.stopPropagation();
	});
	$(".model_wind_box").click(function (event) {
		event.stopPropagation();
	});
	$(".vr_show").click(function () {
		$(".vr_window").css({
			"opacity": "1",
			"zIndex": "999",
			"visibility": "visible"
		});
	});
	$(".vidoe_close").click(function () {
		$(".vr_window").css({
			"opacity": "0",
			"zIndex": "-1",
			"visibility": "hidden"
		});
	});

	// 有缩略图加缩略图效果，没有显示单图切换效果
	var thumbsLen = $('.detail-gallery-thumbs').length;
	if (thumbsLen > 0) {
		var galleryThumbs = new Swiper('.detail-gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			navigation: {
				nextEl: '.swiper-button-next-detail',
				prevEl: '.swiper-button-prev-detail',
			},
			loopedSlides: 5, //looped slides should be the same
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var galleryTop = new Swiper('.detail-gallery-top', {
			spaceBetween: 10,
			loopedSlides: 5, //looped slides should be the same
			thumbs: {
				swiper: galleryThumbs
			}
		});
	} else {
		var galleryTop = new Swiper('.detail-gallery-top', {
			slidesPerView: 1,
		});
	}
	// 有缩略图加缩略图效果，没有显示单图切换效果

	$('.detail-gallery-thumbs__wrap .swiper-slide').click(function () {
		var slef = $(this);
		slef.addClass('swiper-slide-active');
		slef.siblings('div').removeClass('swiper-slide-active');
	});
	 var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, resize, false);

	function resize(fals) {
		if ($(".detail-gallery-top").length > 0) {
			galleryTop.update();
		}
	};
	resize(true);
	/*第二套内页详情大小图切换*/
	var galleryThumbs2_length = 3;
	if ($webid == 1799) {
		galleryThumbs2_length = 5;
	};
	var galleryThumbs2 = new Swiper('.detail-gallery-thumbs2', {
		direction: 'vertical',
		spaceBetween: 10,
		slidesPerView: galleryThumbs2_length,
		navigation: {
			nextEl: '.swiper-button-next-detail',
			prevEl: '.swiper-button-prev-detail',
		},
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	if ($(window).width() < 576 && $(".detail-gallery-thumbs2").length > 0) {
		galleryThumbs2.changeDirection();
	}
	var galleryTop2 = new Swiper('.detail-gallery-top2', {
		spaceBetween: 10,
		thumbs: {
			swiper: galleryThumbs2
		}
	});
	/*第三套内页详情大小图切换*/
	var galleryThumbs3 = new Swiper('.detail-gallery-thumbs3', {
		spaceBetween: 16,
		slidesPerView: 5,
		navigation: {
			nextEl: '.swiper-button-next-detail',
			prevEl: '.swiper-button-prev-detail',
		},
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop3 = new Swiper('.detail-gallery-top3', {
		thumbs: {
			swiper: galleryThumbs3
		}
	});
	/*第三套详情页其他产品滚动展示*/
	var otherswiper = new Swiper('.inner_3__prodetail__otherswiper', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.inner_3__prodetail__next',
			prevEl: '.inner_3__prodetail__prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});

	/* 吟飞内页文字动效 */
	$(function () {
		var t = $('.text_jc').attr('data-text');
		if (t != undefined) {
			var arr = t.split('');
			setTimeout(() => {
				arr.forEach(function (ele, i) {
					setTimeout(() => {
						$('.text_jc').append(ele);
					}, 250 * i);
				});
			}, 500);
		};
	});
	/* 吟飞内页文字动效 */

});
require(['jquery', 'datetimepicker'], function ($, datetimepicker) {
	if ($('#quinnoid_datetimepicker').length > 0) {
		$('#quinnoid_datetimepicker').datetimepicker({
			lang: 'ch'
		});
	}

});

function jumpto() {
	$('html,body').animate({
		scrollTop: $('#inquiry').offset().top
	}, 1000);
	return false;
};

function show(i) {
	switch (i) {
		case 1:
			document.getElementById("gx1").style.display = "block";
			document.getElementById("gx2").style.display = "none";
			document.getElementById("pro1").className = "d_1";
			document.getElementById("pro2").className = "d_2";
			break;
		case 2:
			document.getElementById("gx1").style.display = "none";
			document.getElementById("gx2").style.display = "block";
			document.getElementById("pro1").className = "d_2";
			document.getElementById("pro2").className = "d_1";
			break
	}
};
$(function () {
	$('#gx1 > table').addClass('s')
});
if ($(".tabsTitle").length > 0) {
	$(".tabsTitle").on('click', function () {
		$(".tabsTitle").removeClass("active");
		$(this).addClass("active");
		var index = $(this).attr("index");
		$(".pro_detail").hide();
		$(".pro_detail").eq(index - 1).show().addClass("fadeInUp").siblings(".pro_detail").hide().removeClass("fadeInUp");
	});
}