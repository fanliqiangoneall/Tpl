require(['jquery','swiper'],function($,Swiper){
	var news11_swiperV = new Swiper('.new_hjzf_news-11--gundong', {
	  spaceBetween: 0,
	  autoplay:true,
	  navigation: {
		  nextEl: '.hjzf_news11--next',
		  prevEl: '.hjzf_news11--prev',
		},
	});
	var news11_galleryMenu = new Swiper('.hjzf_news11-class', {
		slidesPerView : 2,
		spaceBetween:0,
		autoplay:false,
		loop : false,
	});
	var news11_galleryClass = new Swiper('.hjzf_news11-content', {
		autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 40,
		on:{
				init:function(swiper){
					slide=this.slides.eq(0);
					slide.addClass('ani-slide');
				},
				transitionStart: function(){
					news11_galleryMenu.slides.removeClass('swiper-slide-active');
					for(i=0;i<this.slides.length;i++){
						slide=this.slides.eq(i);
						slide.removeClass('ani-slide');
					}
				},
				transitionEnd: function(){
					slide=this.slides.eq(this.activeIndex);
					slide.addClass('ani-slide');
					news11_galleryMenu.slides.eq(this.activeIndex).addClass('swiper-slide-active');
				},
			}
	
	});
	$(".hjzf_news11-class .swiper-slide").click(function(){
		news11_galleryClass.slideTo($(this).index(), 1000, false);
	});
    var news_11_swiper = new Swiper('.hjzf_news11_faq--container', {
		direction: 'vertical',
	    autoplay:true,
		slidesPerView : 4,
		on: {
			resize: function(){
			  this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			}, 
		  },
	});
	

});

