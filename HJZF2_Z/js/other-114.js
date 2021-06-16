require(['jquery'],function($){
	$(function () {
		$('.hjzf_other_114_ico li:first-child').addClass('on');
		$('.other_114_bottom_wrapper').eq(0).addClass('on');
		$('.hjzf_other_114_ico li').hover(function () {
			var self = $(this);
			var index = self.index();
			self.addClass('on').siblings('li').removeClass('on');
			$('.other_114_bottom_wrapper').eq(index).addClass('on').siblings('.other_114_bottom_wrapper').removeClass('on');
		})
	});
});