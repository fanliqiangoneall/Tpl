require(['swiper', 'jquery', 'layer'], function (Swiper, $, layer) {
	var hjzf2_news_31_lefttop_swiper = new Swiper('.hjzf2_news-31-lefttop_swiper', {
		pagination: {
			el: '.hjzf2_news-31-lefttop_swiperpage',
			clickable: true,
		},

	});
	$(".hjzf2_news-31-lefttop li").hover(function () {
		$(this).addClass("active").find(".img_a").addClass("hide").next().removeClass("hide");
		$(this).siblings("li").removeClass("active").find(".img_b").addClass("hide").prev().removeClass("hide");
		var _index = $(this).index();
		$(".hjzf2_news-31-leftdown li").eq(_index).show().siblings("li").hide();
	});
	$('.news_31_video').on('click', function (e) {
		var src = $(this).attr('data-src');
		if (src != '') {
			layer.open({
				type: 2,
				title: false,
				area: ['80%', '70%'],
				shade: 0.8,
				closeBtn: 1,
				shadeClose: true,
				content: src
			});
		}

		return false;
	})

})