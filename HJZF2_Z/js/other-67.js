require(['swiper', 'jquery'], function (Swiper, $) {

    var hjzf2_other_67_container = new Swiper('.hjzf2_other_67_container', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.hjzf2_other_67_pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        }
    });
    if (hjzf2_other_67_container.slides.length <= 6) {
        $('.hjzf2_other_67_pagination').hide();
    }

})