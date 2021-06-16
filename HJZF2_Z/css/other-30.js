
require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.other-30_swiper', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 0,
        autoplay:true,
        pagination:{
          el: '.other-30-pagination'
        },
        breakpoints: {
            640: {
              slidesPerView: 2,              
            },
            768: {
              slidesPerView: 4,              
            },
            1024: {
              slidesPerView: 5,              
            },
          }
      });
})
