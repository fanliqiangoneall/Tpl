require(['jquery', 'swiper'], function ($, Swiper) {
	$(function () {
		$('.hjzf2_products_41_title li').eq(0).addClass('on');
		$('.hjzf2_products_41_con').eq(0).show();
		if (products_41_len == '') {
			return;
		};
		var arr = [];
		for (var i = 1; i <= products_41_len; i++) {
			arr[i] = new Swiper('.swiper_key' + i, {
				slidesPerView: 1,
				autoplay: true,
				navigation: {
					nextEl: '.pro_next_41_' + i,
					prevEl: '.pro_prev_41_' + i,
				},
				observer: true,
				observeParents: true,
			});
		};
		$('.hjzf2_products_41_title li').hover(function () {
			var index = $(this).index();
			$(this).addClass('on').siblings('li').removeClass('on');
			$('.hjzf2_products_41_con').eq(index).show().siblings('.hjzf2_products_41_con').hide();
			
		});
	});
});