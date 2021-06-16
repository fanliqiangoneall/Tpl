require(['swiper','jquery'],function(Swiper,$){
    var swiper_news = new Swiper('.HJZF2_Z__news--right--swiper', {
        navigation: {
            nextEl: '.HJZF2_Z__news-next',
            prevEl: '.HJZF2_Z__news-prev',
        },
        loop:true,
        autoHeight: true,
        on:{
            resize:function(){
                swiper_news.update();
            }
        }
    });
})