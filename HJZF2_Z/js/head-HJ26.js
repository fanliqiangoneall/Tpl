require(['jquery', 'mousewheel'], function ($) {
	$(function () {
		$(document).mousewheel(function (event, dec) {
			if (dec > 0) {
				$('.head_hj26_fixed').addClass('up').removeClass('down');
				var w = $(window).scrollTop();
				if(w < 500) {
					$('.head_hj26_fixed').removeClass('up');
				}
			} else {
				$('.head_hj26_fixed').addClass('down').removeClass('up');
			}
		});
	});


})