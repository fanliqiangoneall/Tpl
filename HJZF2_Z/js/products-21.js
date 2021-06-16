require(['swiper', 'jquery'], function (Swiper, $) {
    new Swiper('.products_21_right', {
        slidesPerView: $len,
        spaceBetween: 20,
		slidesPerGroup : 3,
        autoplay: true,
        pagination: {
            el: '.products_21_right_pag',
            clickable: true
        },
        breakpoints: {
            768: {
                spaceBetween: 0,
                slidesPerView: 1,
				slidesPerGroup : 1,
            },
        }
    })

});