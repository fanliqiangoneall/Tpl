require(['jquery', 'countTo', 'swiper'], function ($, countTo, Swiper) {
	$(function () {
		if ($advantage_8_len === '') {
			$advantage_8_len = 3;
		}else{
			$advantage_8_len = +$advantage_8_len;
		};
		var advantage_8_swiper = new Swiper('.advantage-8__swiper', {
			slidesPerView: $advantage_8_len,
			spaceBetween: 0,
			speed: 1000,
			mousewheel: false,
			loop: false,
			pagination: {
				el: '.advantage-8_pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.advantage-8_next',
				prevEl: '.advantage-8_prev',
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1199: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
			},
			on: {
				resize: function () {
					advantage_8_swiper.update(true);
				}
			}
		});

		if ($(".advantage-8__swiper").length > 0 && advantage_8_swiper.slides.length > 3) {
			advantage_8_swiper.autoplay.start();
		};
		if ($(".advantage-8__swiper").length > 0 && advantage_8_swiper.pagination.bullets.length < 2) {
			$(".advantage-8_pagination").hide()
		};

		$(".advantage-8__item").each(function () {
			var old_img = $(this).find("img").attr("src");
			var new_img = $(this).find("img").attr("data-hover");
			$(this).hover(function () {
				$(this).find("img").attr("src", new_img);
			}, function () {
				$(this).find("img").attr("src", old_img);
			});
		});

		var w = $(window).width();
		var len = $('.advantage-8__swiper .swiper-slide').length;
		if (w > 1200 && len < 4) {
			$('.advantage-8__swiper .advantage-8_prev').hide();
			$('.advantage-8__swiper .advantage-8_next').hide();
		};
	});




});