require(['jquery','swiper'],function($,Swiper){

    var new_hjzf_product7 = new Swiper('.new_hjzf_product7_product', {
        speed:1000,
        spaceBetween: 30,
        slidesPerView: pro_num,
		slidesPerGroup: 4,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            992: {
                slidesPerView: pro_num,
                spaceBetween: 10,
            },
        },
		pagination: {
            el:'.new_hjzf_product7_pagination',
            clickable :true,
		},
        on: {
            resize: function(){
                new_hjzf_product7.update(true)
            },
        },
    });
    var protime_7;
    if(!protime_7 && $(".new_hjzf_product7_product").length>0){
        new_hjzf_product7.params.delay = protime_7;
        new_hjzf_product7.autoplay.start();
    }
    if($('.new_hjzf_product7_product').length>0 && new_hjzf_product7){
        //鼠标覆盖停止自动切换
        new_hjzf_product7.el.onmouseover = function(){
            new_hjzf_product7.autoplay.stop();
        };
        //鼠标离开开始自动切换
        new_hjzf_product7.el.onmouseout = function(){
            new_hjzf_product7.autoplay.start();
        }
    };

    if($(window).width() > 1200) {
        if(new_hjzf_product7.slides.length <= 4 ){
            $('.new_hjzf_product7_pagination').hide();
        }
    }

});
