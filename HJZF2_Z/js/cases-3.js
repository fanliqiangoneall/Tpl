require(['swiper','jquery'],function(Swiper,$){
    var swiper_case3 = new Swiper('.cases--3__container', {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup:3,
        loop: false,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup:1,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup:1,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 0,
                slidesPerGroup:2,
            },
        },
        pagination: {
            el: '.HJZF_Z_case_pagination',
            clickable: true,
        },
    });
    var len = $('.HJZF_Z_case_pagination span').length;
    if(len < 4){
        $('.HJZF_Z_case_pagination').hide();
    }

})