require(['swiper','jquery'],function(Swiper,$){
    var swiper_case = new Swiper('.hjzf2_Z_caseSwiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup:3,
        loop: true,
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
            renderBullet: function (index, className) {
                if(index<10){
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                }else{
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }

            },
        },
    });
})