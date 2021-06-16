require(['jquery','swiper'],function($,Swiper){
    // table切换
    var arra = [];

    function tab(mainDom, subDom, event) {
        $(mainDom).eq(0).addClass('on');
        $(subDom).eq(0).addClass('on');
        if (event == 'hover') {
            $(mainDom).hover(function () {
                triggerHover(mainDom, subDom, this);
            })
        }else{
            $(mainDom).click(function () {
                triggerHover(mainDom, subDom, this);
            })  
        }
    }
    function triggerHover(main, sub, self) {
        var index = $(self).index();
        $(self).addClass('on').siblings(main).removeClass('on');
        $(sub).eq(index).addClass('on').siblings(sub).removeClass('on');
        createSwiper(index + 1);
    }
    tab('.new_hjzf_product31_list ul li','.new_hjzf_product31_Content', 'hover');
    createSwiper(1);
    function createSwiper(i) {
        var dom = '.new_hjzf_product31_product' + i;
        var pag = '.new_hjzf_product31_pagination' + i;
        new Swiper(dom, {
            speed:1000,
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 4,
            autoplay: true,
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
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
            pagination: {
              el: pag,
              clickable :true,
            }
           
        });
       
        
    };


});
