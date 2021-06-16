require(['jquery', 'countTo', 'swiper'], function ($, countTo, Swiper) {
	$(function () {
		var hjzf_advantage_32_con_container = new Swiper('.hjzf_advantage_32_con_container', {
			slidesPerView: 5,
			spaceBetween: 20,
			pagination: {
				el: '.hjzf_advantage_32_con_container .swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.hjzf_advantage_32_con_container_btn .swiper-button-next',
				prevEl: '.hjzf_advantage_32_con_container_btn .swiper-button-prev',
			},
			speed: 800,
			breakpoints: {
				1200: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			},
			autoplay: true
		});
		function changePag() {
			var w = $(window).width();
			if (w < 767) {
				return;
			};
			console.log(w);
			var len = $('.hjzf_advantage_32_con_container .swiper-slide').length;
			if (len <= 5) {
				$('.hjzf_advantage_32_con_container .swiper-pagination').hide();
			}
		}
		changePag();
		$(window).resize(function () {
			changePag();
		});


	});
});