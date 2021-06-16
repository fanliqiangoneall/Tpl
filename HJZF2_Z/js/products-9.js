require(['swiper', 'jquery'], function (Swiper, $) {


  $(function () {
    var swiper_pro = new Swiper('.product9_neibox', {
      slidesPerView: 3,
	  slidesPerGroup: +pro_9_slidesPerView,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
		  slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
		  slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
		  slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: '.product9_nei_page',
        clickable: true,
      },
      navigation: {
        nextEl: '.product9_wainext',
        prevEl: '.product9_waiprev',
      }
    });
    $(".new_hjzf_products-9 .hj02_proclasslist li:first").addClass("proClass_on");
    $(".new_hjzf_products-9 .hj02_proclasslist li").hover(function () {
      $(this).addClass("proClass_on").siblings("li").removeClass("proClass_on");
      var index = $(this).index();
      // swiper_pro.slideTo(index, 1000, false);
      //galleryTop_productHj01.slideTo($(this).index(), 1000, false);
    });



  });


});