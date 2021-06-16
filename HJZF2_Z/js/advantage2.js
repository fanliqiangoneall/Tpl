require(['jquery','swiper'],function($,Swiper){
		if(!tab_num){
			tab_num = 4;
		}
		var galleryThumbs_adv2 = new Swiper('.HJZF2_advantage2_swiper', {
			spaceBetween: 0,
			slidesPerView: tab_num,
			freeMode: true,
			autoHeight: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			on: {
				resize: function(){
					galleryThumbs_adv2.update(true)
				},
			},
			breakpoints: {
				1024: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				320: {
					slidesPerView: 2,
					spaceBetween: 0,
				}
			}
		});
		var galleryTop_advDown = new Swiper('.HJZF2_advantage2Down_swiper', {
			spaceBetween: 10,
			autoHeight: true,
			navigation: {
				nextEl: '.HJZF2_Z__advantage2--next',
				prevEl: '.HJZF2_Z__advantage2--prev',
			},
			thumbs: {
				swiper: galleryThumbs_adv2
			},
				on: {
				resize: function(){
					galleryTop_advDown.update(true);
				}
			}
		});
    

})

