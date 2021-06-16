require(['jquery','swiper'],function($,Swiper){
    var swiper = new Swiper('.case-11__swiper', {
        pagination: {
            el: '.case-11__pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.case-11__swiper-next',
            prevEl: '.case-11__swiper-prev',
        },
    });

    $(".case-11__swiper-next2").click(function(){
        $(".case-11__swiper-next").trigger("click");
    });
});
