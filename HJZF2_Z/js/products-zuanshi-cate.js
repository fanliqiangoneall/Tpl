require(['jquery'], function ($) {
	$(function () {
		$('.zuanshi_cate_con').eq(0).addClass('on');
		$('.zuanshi_cate_child li').eq(0).addClass('on');
		$('.zuanshi_cate_child li').click(function () {
			var self = $(this);
			self.parents('.zuanshi_wrappper').find('.zuanshi_cate_child li').removeClass('on');
			self.addClass('on');
			var id = self.attr('data-id');
			$('.zuanshi_cate_con').each(function () {
				var sel = $(this);
				var cid = sel.attr('data-id');
				if(id == cid){
					sel.addClass('on').siblings('.zuanshi_cate_con').removeClass('on');
				}
			})
		})
	})

})