require(['jquery', 'swiper'], function ($, Swiper) {
  var swiper = new Swiper('.other-30_swiper', {
    slidesPerView: other_30_lie || 6,
    slidesPerColumn: other_30_hang || 2,
    spaceBetween: 0,
    autoplay: true,
    pagination: {
      el: '.other-30-pagination',
	  clickable: true
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
    },

  });
  if (swiper.slides.length <= 12) {
    $('.other-30-pagination').hide();
  }
})