require(['jquery', 'swiper'], function ($, Swiper) {
    var galleryThumbs = new Swiper('.hjzf2_other_45_swiper_top', {
        slidesPerView: 1,
        loop: false,
        centeredSlides: true,
        loopedSlides: 5, //looped slides should be the same
    });
    
    var swiper = new Swiper('.hjzf2_other_45_swiper', {
        slidesPerView: 3,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.hjzf2_other_45_swiper_next',
            prevEl: '.hjzf2_other_45_swiper_prev',
        },
        loop: false,
        // allowTouchMove: false,
        controller: {
            control: galleryThumbs, //控制Swiper1
            by: 'slide',
        },
    });
	if(swiper.controller == undefined){
		return;
	}
    swiper.controller.control = galleryThumbs;
    galleryThumbs.controller.control = swiper;
    $(".hjzf2_other_45_swiper .swiper-slide").click(function(){
        galleryThumbs.slideTo($(this).index(), 1000, false);
    })

})