require(['jquery', 'swiper'], function ($, Swiper) {

    var hjzf2_other_69_container = new Swiper('.hjzf2_other_69_container', {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerColumn: 2,
        pagination: {
            el: '.hjzf2_other_69_pagination',
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
            768: {
                slidesPerColumn: 1,
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                slidesPerColumn: 1,
            },
            1200: {
                slidesPerView: 3,
                slidesPerColumn: 1,
            }
        },
    });
    if(hjzf2_other_69_container.slides.length <=6) {
        $('.hjzf2_other_69_pagination').hide();
    }

})