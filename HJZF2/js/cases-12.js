require(['jquery','swiper'],function($,Swiper){
    var galleryThumbs = new Swiper('.case12-gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.case12-gallery-top', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.case12-gallery-thumbs_next',
            prevEl: '.case12-gallery-thumbs_prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
        slideThumbActiveClass: 'my-slide-thumb-active',
        on:{
            slideChangeTransitionEnd: function(){
                slide=this.slides.eq(this.realIndex);
                $(".case12-gallery-thumbsImg .slide").eq(this.realIndex).show().siblings().hide();
            }
        }
    });




});
