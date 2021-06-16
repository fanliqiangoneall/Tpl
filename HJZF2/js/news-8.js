require(['jquery','swiper'],function($,Swiper){
    if($('.HJZF2__newsgallery-top').length>0){
        $(".HJZF2__newsgallery-thumbs .swiper-slide").eq(0).addClass("active");
        var galleryTop = new Swiper('.HJZF2__newsgallery-top', {
            slidesPerView: 5,
            freeMode: true,
            /*allowTouchMove: false,*/
            centeredSlides: true,
            loop: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var galleryThumbs = new Swiper('.HJZF2__newsgallery-thumbs', {

            slidesPerView: 5,
            spaceBetween: 40,
            speed:1500,
            freeMode: true,
            loop: true,
            centeredSlides: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery-thumbs-next',
                prevEl: '.gallery-thumbs-prev',
            },
            controller: {
                control: galleryTop, //控制Swiper1
                by: 'slide',
            },
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;

        $(".HJZF2__newsgallery-thumbs .swiper-slide").click(function(){
            galleryTop.slideTo($(this).index(), 1000, false);
        })
    }
});