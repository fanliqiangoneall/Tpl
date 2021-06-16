require(['swiper', 'jquery'], function (Swiper, $) {
  var len = $('.service-19_tabs li').size();
  for (var i = 1; i <= len; i++) {
    if ($(".left_swiperContainer" + i).length > 0) {
      new Swiper('.left_swiperContainer' + i, {
		autoplay: true,
        pagination: {
          el: '.left_swiper_page' + i,
		  clickable: true,
        },
      });
    }
  };

  $(".service-19_tabs li").hover(function () {
    var index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".service-19_itemlist ul li").eq(index).addClass("active").siblings("li").removeClass("active");
  })
});