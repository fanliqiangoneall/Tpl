require(['swiper', 'jquery'], function (Swiper, $) {
	$(function () {
		function changeHeight() {
			var height = $('.cases_hj06_right_box').height();
			$('.cases_hj06_right_box .cases_hj06_slide').css('min-height', height);
			$('.cases_hj06 .cases_hj06_title').css('min-height', height);
		}
		changeHeight();
		if ($(window).width() > 1200) {
			window.onload = function () {
				changeHeight();
				var swiper = new Swiper('.cases_hj06_container', {
					slidesPerView: 4,
					mousewheel: {
						releaseOnEdges: true,
					}
				});
			};
			$(window).resize(function () {
				changeHeight();
			})
		};

		// mobile
		var swiper = new Swiper('.cases_hj06_container_mobile', {
			slidesPerView: 2,
			spaceBetween: 10,
			pagination: {
				el: '.cases_hj06_container_mobile_pagination',
			},

		});
	})


});