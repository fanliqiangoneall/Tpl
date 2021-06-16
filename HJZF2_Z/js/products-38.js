require(['jquery','swiper'],function($,Swiper){

    var new_hjzf_product38 = new Swiper('.new_hjzf_product38_product', {
        speed:1000,
        spaceBetween: 30,
        slidesPerView: pro_num_38,
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
                slidesPerView: pro_num_38,
                spaceBetween: 10,
            },
        },
		pagination: {
            el:'.new_hjzf_product38_pagination',
            clickable :true,
		},
        on: {
            resize: function(){
                new_hjzf_product38.update(true)
            },
        },
    });
    var protime_38;
    if(!protime_38 && $(".new_hjzf_product38_product").length>0){
        new_hjzf_product38.params.delay = protime_38;
        new_hjzf_product38.autoplay.start();
    }
    if($('.new_hjzf_product38_product').length>0 && new_hjzf_product38){
        //鼠标覆盖停止自动切换
        new_hjzf_product38.el.onmouseover = function(){
            new_hjzf_product38.autoplay.stop();
        };
        //鼠标离开开始自动切换
        new_hjzf_product38.el.onmouseout = function(){
            new_hjzf_product38.autoplay.start();
        }
    };

    if($(window).width() > 1200) {
        if(new_hjzf_product38.slides.length <= 4 ){
            $('.new_hjzf_product38_pagination').hide();
        }
    }

});
