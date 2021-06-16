require(['swiper', 'jquery'], function (Swiper, $) {
    var hj07_banner_top = new Swiper('.hj08_banner_top', {
        pagination: {
            el: '.hj08_banner_pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.hj08_banner_next',
            prevEl: '.hj08_banner_prev',
          },
        effect:'fade',
        autoplay: {
            delay: 6000
        },
        speed: 1000,
        autoHeight: true
    });
});