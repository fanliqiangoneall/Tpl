require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.hjzf_z_news_27_container', {
		slidesPerView: "auto",
		wrapperClass: "hjzf_z_news_27_wrapper",
		slideClass: "hjzf_z_news_27_slide",
          pagination: {
            el: '.hjzf_z_news_27_scrollbar',
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
        nextEl: '.hjzf_z_news_27_prev',
        prevEl: '.hjzf_z_news_27_next',
      },
    });

})