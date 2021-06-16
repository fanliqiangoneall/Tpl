require(['jquery', 'mousewheel'], function ($) {
	$(function () {
		$(window).scroll(function () {
			var t = $(window).scrollTop();
			console.log(t);
			if(t > 120) {
				$('.head_hj27_fixed').addClass('active');
			}else{
				$('.head_hj27_fixed').removeClass('active');
			}
		});
		$('.search_lia').click(function () {
			$(this).next('.search_list').fadeToggle();
		});
		
	});
});