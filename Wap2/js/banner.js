require(['jquery', 'swiper'], function ($,Swiper){
    var swiper = new Swiper('.new_hjzf_banner__swiper-container', {
	  autoplay:true,
      pagination: {
        el: '.new_hjzf_banner__swiper-pagination',
      },
    });	
});