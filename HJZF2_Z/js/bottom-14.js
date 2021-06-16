require(['jquery','swiper'], function ($,Swiper){
    var swiper = new Swiper('.bottom-14_swiper', {
        slidesPerView: 5,
        spaceBetween: 50,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        navigation: {
          nextEl: '.bottom-14_next',
          prevEl: '.bottom-14_prev',
        },
      });
});
