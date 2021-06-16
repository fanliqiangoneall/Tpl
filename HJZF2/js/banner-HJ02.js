require(['swiper','jquery'],function(Swiper,$){
    if($("#HJ02-banner1").length>0){
        var swiper_bannerhj02 = new Swiper('#HJ02-banner1',{

            loop:true,
            autoplay: {
                delay: 4000//1秒切换一次
            },
            speed:1500,
            pagination: {
                el: '.hj02-banner1-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.new_hjzf_banner-HJ02 .hj02-banner1-next',
                prevEl: '.new_hjzf_banner-HJ02 .hj02-banner1-prev',
            },
            effect : (effect? effect:"slide"),
        });
        if(typeof guan!="undefined" && guan!= ""){
            swiper_bannerhj02.autoplay.stop();
        };
        if(typeof speed!="undefined" && speed!= ""){
            swiper_bannerhj02.params.autoplay.delay= speed*1000;
        }
    }
});