require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper = new Swiper('.hjzf_service_34_container', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768:{
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    if ($(window).width() > 1200) {
        if (swiper.slides.length <= 3) {
            $('.swiper-pagination').remove();
        }
    }

})