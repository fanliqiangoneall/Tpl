require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper = new Swiper('.cases_20_container', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.cases_20_pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.cases_20_next',
            prevEl: '.cases_20_prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            }
        }

    })

})