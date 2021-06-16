require(['swiper','jquery'],function(Swiper,$){
    var news_12 = new Swiper('.news-12__swiper', {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on:{
            resize:function(){
                news_12.update(true);
            }
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });
    function redo(){
        if($(window).width()>1366 && $(".news-12__slide").length<3){
            $(".news-12__page").hide();
        }
    };
    redo();
    window.onresize = function(){
        redo();
    }
    
});