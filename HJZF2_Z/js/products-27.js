
require(['swiper','jquery'],function(Swiper,$){
  $('.hjzfz_products_27_title li:first').addClass('on');
  $('.hjzfz_products_27_con ul:first').addClass('on');
  $('.hjzfz_products_27_title li').hover(function () {
      var index = $(this).index();
      $(this).addClass('on').siblings('li').removeClass('on');
      $('.hjzfz_products_27_con ul').eq(index).addClass('on').siblings('ul').removeClass('on');
  })
})