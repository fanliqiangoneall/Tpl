require(['swiper', 'jquery'], function (Swiper, $) {
    var products_24_wrapper = new Swiper('.products_24_wrapper', {
        spaceBetween : 40,
        speed: 800,
        parallax : true,
        autoplay: true,
        loop: true,
        pagination: {
            el: '.products_24_pagination',
            clickable: true
        }
    });

});