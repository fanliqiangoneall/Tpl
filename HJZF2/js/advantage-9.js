;require(['jquery','swiper'],function($,swiper){
    var galleryThumbs = new swiper('.HJZF2_advantage9__gallery-thumbs', {
        spaceBetween: 20,
        direction: 'vertical',
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new swiper('.HJZF2_advantage9__gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

})
