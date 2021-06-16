require(['jquery', 'swiper'], function ($, Swiper) {
    $(function () {
        var hazfz_37_container = new Swiper('.hazfz_37_container', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.hazfz_37_container_navigation .swiper-button-next',
                prevEl: '.hazfz_37_container_navigation .swiper-button-prev',
            },
            loop: true,
            speed: 800,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });
    });
    
})