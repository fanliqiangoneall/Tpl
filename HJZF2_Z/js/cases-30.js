require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper = new Swiper('.hjzf2_Z_case30_container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.hjzf2_Z_case30_pagination',
            clickable: true
        },
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
});