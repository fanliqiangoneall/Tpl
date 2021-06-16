require(['jquery','swiper'],function($,Swiper){
    var service4_swiper = new Swiper('.HJZF2_service-4_swiper', {
        slidesPerView: 3,
        spaceBetween: 60,
        lazy: {
            loadPrevNext: true,
        },
        autoplay: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }

    });


})

