require(['jquery','swiper'],function($,swiper){
    if($("#pic").length>0){
        var mySwiper = new swiper('#pic', {
            loop:true,
            autoplay:true,
            pagination :{
                el: '#tip',
                clickable :true,
            }
        });
        //如果只有一个slide就销毁swiper
        if(mySwiper.slides.length<=3){
            mySwiper.destroy();
        }
        $(".swiper-pagination-bullet").hover(function() {
            $(this).click()
        },function() {
            mySwiper.autoplay.start();
        })
    }
});











