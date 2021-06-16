require(['swiper','jquery'],function(Swiper,$){

    var swiper1 = new Swiper('.hj03_imgswiper', {
        slidesPerView: 1,
        spaceBetween: 0,
    });
    var swiper2 = new Swiper('.hj03_textswiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.hj03_next',
            prevEl: '.hj03_prev',
        },
    });
    
    if(swiper2.controller){
        swiper2.controller.control = swiper1;
    }



});






