require(['jquery', 'swiper'], function ($, Swiper) {

	$(function () {
		if (cate_17_autoplay === '') {
			cate_17_autoplay = true;
		} else {
			cate_17_autoplay = false;
		}
		var new_hjzf_procata_17 = new Swiper('.new_hjzf_procata_17_product', {
			speed: 1000,
			spaceBetween: 30,
			slidesPerView: pro_num,
			slidesPerGroup: 4,
			autoplay: cate_17_autoplay,
			pagination: {
				el: '.new_hjzf_procata_17_pagination',
				clickable: true
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
					slidesPerGroup: 1,
				},
				992: {
					slidesPerView: pro_num,
					spaceBetween: 10,
				},
			},
			on: {
				resize: function () {
					new_hjzf_procata_17.update(true)
				},
			},
		});
	});



});