require(['swiper', 'jquery'], function (Swiper, $) {

  var len = $('.cases_19_container').length;
  for (var i = 0; i < len; i++) {
    new Swiper('.cases_19_container_main' + (i + 1), {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.cases_19_container_main' + (i + 1) + ' + .swiper-button-next',
        prevEl: '.cases_19_container_main' + (i + 1) + '+ .swiper-button-next + .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      },
      pagination: {
        el: '.cases_19_container_pagination' + (i + 1),
        clickable: true
      }
    });
  }
  
  var lena = $('.cases_19_title').length;
  $('.cases_19_container_list').hide();
  $('.cases_19_container_list').eq(0).show();
  $('.cases_19_title span').eq(0).addClass('on');
  $('.cases_19_title').on('click', 'span', function () {
    var index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.cases_19_container_list').eq(index).show();
    $('.cases_19_container_list').eq(index).siblings('div').hide();
  })


})