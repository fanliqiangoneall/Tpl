require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.other-17__container', {
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        },
    // 如果需要分页器
    pagination: {
      el: '.other-17__swiper-pagination',
	  clickable: true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.other-17__swiper-button-next',
      prevEl: '.other-17__swiper-button-prev',
    },		
        scrollbar: {
            el: '.other-17__swiper-scrollbar'
        },
    });
});