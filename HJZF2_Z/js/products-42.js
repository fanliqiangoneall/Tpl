require(['swiper', 'jquery'], function (Swiper, $) {
	$(function () {
		var swiper_pro = new Swiper('.product42_neibox', {
			slidesPerView: 3,
			spaceBetween: 30,
			breakpoints: {
				640: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 30,
				},
			},
			pagination: {
				el: '.product42_nei_page',
				clickable: true,
			},
			navigation: {
				nextEl: '.product42_wainext',
				prevEl: '.product42_waiprev',
			}
		});
		$(".new_hjzf_products-42 .hj02_proclasslist li:first").addClass("proClass_on");
		$(".new_hjzf_products-42 .hj02_proclasslist li").hover(function () {
			$(this).addClass("proClass_on").siblings("li").removeClass("proClass_on");
			var index = $(this).index();
		});
	});
});
