require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.swiper-container', {
		slidesPerView: "auto",
		wrapperClass: "m-news-card__wrapper",
		slideClass: "m-news-card__slide",
          pagination: {
            el: '.m-news-card__scrollbar',
            type: 'custom',
            renderCustom: function(swiper, current, total) {

                        if (!swiper.isEnd || !swiper.isBeginning) {
                            var n = 100 * swiper.progress,
                            i = swiper.rtl ? "translateX(-" + n + "%)": "translateX(" + n + "%)";

                        }
                        return '<span class="swiper-pagination-progressbar" style="transform: '+i+' ;width: 50%;"></span>';
                    }
          },
      navigation: {
        nextEl: '.m-news-card__prev',
        prevEl: '.m-news-card__next',
      },
    });

})