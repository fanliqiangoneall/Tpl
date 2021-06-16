require(['jquery'], function ( $) { 
	$(function() {
		$('.products_44_wrapper_title li').eq(0).addClass('on');
		$('.products_44_wrapper_con').eq(0).addClass('on');
		$('.products_44_wrapper_title li').hover(function () {
			var index = $(this).index();
			$(this).addClass('on').siblings('li').removeClass('on');
			$('.products_44_wrapper_con').eq(index).addClass('on').siblings('.products_44_wrapper_con').removeClass('on');
		});
	})
});
