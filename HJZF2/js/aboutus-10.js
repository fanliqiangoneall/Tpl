require(['jquery','swiper'],function($,Swiper){
    var mySwiper = new Swiper('.view_swiper', {
        direction: 'vertical',
        loop:false,
        mousewheel: true,
        autoplay:false,
        slidesPerView : 3,
        spaceBetween : 20,
        pagination :{
            el: '.aboutus-10-agination',
            type: 'bullets',
          }
      });
})

