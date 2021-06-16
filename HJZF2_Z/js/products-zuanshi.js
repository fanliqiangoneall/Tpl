require(['jquery', 'swiper'], function ($, Swiper) {
	$(function () {
		$('.pro_zuanshi_left li').each(function (i) {
			var self = $(this).find('i');
			if(i == 0){
				self.addClass('fa-diamond')
			}
			switch(i){
				case 0:
					self.addClass('fa-diamond');
					break;
				case 1:
					self.addClass('fa-circle-o-notch');
					break;
				default: 
					self.addClass('fa-mercury');
			}

		});
		$('.pro_zuanshi_left li').eq(0).addClass('on');
		$('.pro_zuanshi_right').eq(0).fadeIn();
		$('.pro_zuanshi_right_tab li').eq(0).addClass('on');
		$('.pro_zuanshi_right_con').eq(0).addClass('on');
		$('.pro_zuanshi_left li').click(function () {
			var self = $(this);
			self.addClass('on').siblings('li').removeClass('on');
			var index = self.index();
			$('.pro_zuanshi_right').eq(index).fadeIn().siblings('.pro_zuanshi_right').hide();
		});

		$('.pro_zuanshi_right_tab li').click(function () {
			var self = $(this);
			self.addClass('on').siblings('li').removeClass('on');
			var index = self.index();
			$('.pro_zuanshi_right_con').eq(index).addClass('on').siblings('.pro_zuanshi_right_con').removeClass('on');
		});
		$('.pro_zuanshi_shape_con').eq(0).show();
		$('.pro_zuanshi_shape li').eq(0).addClass('on');
		$('.pro_zuanshi_shape li').click(function () {
			var self = $(this);
			self.addClass('on').siblings('li').removeClass('on');
			var index = self.index();
			$('.pro_zuanshi_shape_con').eq(index).fadeIn().siblings('.pro_zuanshi_shape_con').hide();
		});
		new Swiper('.pro_zuanshi_shape_con_container', {
			slidesPerView: 1,
			pagination: {
                el: '.pro_zuanshi_shape_con_container_pagination',
                clickable: true
            },
		});
		
	});

	
});