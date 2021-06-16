require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.HJZF_Z__produCategory2__wrap', {
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 0
            }

        },

        pagination: {
            el: '.HJZF_Z__produCategory2__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                if(index<10){
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                }else{
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }

            },
        },
        navigation: {
            nextEl: '.HJZF_Z__produCategory2__next',
            prevEl: '.HJZF_Z__produCategory2__prev',
          },
    });
});

