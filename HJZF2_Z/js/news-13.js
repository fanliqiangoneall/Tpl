require(['jquery','swiper'],function($,Swiper){

  var swiper = new Swiper('.new_hjzf_news_13_swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: '.new_hjzf_news_13_pagination',
        clickable: true
    },
    on: {
        init: function (){
            if(this.slides.length <= this.params.slidesPerView){
                $('.new_hjzf_news_13_pagination').hide();
            }
        }
    }

});

});
