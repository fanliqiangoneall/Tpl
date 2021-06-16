require(['jquery', 'swiper'], function ($, Swiper) {

    var service15_swiper = new Swiper('.service_23_container', {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: true,
        pagination: {
            el: '.service_23_paga',
            clickable: true
        },
        breakpoints: {
            564: {
                slidesPerView: 1,
            },
            768: { 
                slidesPerView: 2,
                spaceBetween: 10
            },
            1280: { 
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        on: {
            init: function () {
                if(this.slides.length <= this.params.slidesPerView){
                    $('.service_23_paga').hide();
                }
            }
        }
    });
});