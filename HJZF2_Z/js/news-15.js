require(['jquery','swiper'],function($,Swiper){

    var news_15_swiper = new Swiper('.news-15_container', {
        slidesPerView: 3.3,

        wrapperClass: "news-15__wrapper",
        slideClass: "news-15__slide",

        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1280: {
                spaceBetween: 20
            },
            1366: {
                spaceBetween: 35
            },
            1440: {
                spaceBetween: 45
            },
            1600: {
                spaceBetween: 50
            },
            1920: {
                spaceBetween: 60
            }
        },
        pagination: {
            el: '.m-news-card__scrollbar',
            type: 'custom',
            renderCustom: function(swiper, current, total) {
                if($(window).width() >1024){
                    if (!swiper.isEnd || !swiper.isBeginning) {
                        var n = 100 * swiper.progress,
                            i = swiper.rtl ? "translateX(-" + n + "%)": "translateX(" + n + "%)";
                    }
                }

                return '<span class="swiper-pagination-progressbar" style="transform: '+i+' ;width: 50%;"></span>';
            }
        },
        navigation: {
            nextEl: '.news-15__prev',
            prevEl: '.news-15__next',
        },
    });
});