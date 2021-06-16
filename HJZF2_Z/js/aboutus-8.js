require(['jquery'], function ($) {
	$(function () {
		function resize_paddingleft() {
			var container = $('.aboutu8_container').innerWidth();
			var aboutus8_left = $('.hjzf_z_aboutus8--left').width();
			var winWidth = $(window).width();
			if (container > aboutus8_left) {
				var padLeft = (winWidth - container) / 2 - 15;
				if (resov != '') {
					$('.hjzf_z_aboutus8_leftbox').css({
						"paddingRight": padLeft,
						"paddingLeft": 20
					});
				} else {
					$('.hjzf_z_aboutus8_leftbox').css("paddingLeft", padLeft);
				};
			};
		};


		function resize_height() {
			var container = $('.aboutu8_container').width();
			var aboutus8_height = $('.hjzf_z_aboutus8--right img').height();
			if (container > 991) {
				$('.hjzf_z_aboutus8--left').css("height", aboutus8_height);
			};
		};
		resize_paddingleft();
		resize_height();
		//监测窗口大小变化
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
			resize_paddingleft();
			resize_height();
		}, false);
	});
});