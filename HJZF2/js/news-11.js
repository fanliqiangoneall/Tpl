require(['jquery','swiper'],function($,Swiper){
	var swiper_news = new Swiper('.HJZF2__news-11list',{
	  slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup:3,
	  loop:true,
		autoplay: {
			delay: 4000,
		},
	  pagination: {
            el: '.HJZF2__news-11__pagination',
            clickable: true,
        },
	})
});