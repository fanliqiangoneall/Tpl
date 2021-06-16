require(['swiper', 'jquery'], function (Swiper, $) {

    // 初始化加载一个swiper
    var i = 0;
    new Swiper('.products_39_container_main' + (i + 1), {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.products_39_next' + (i + 1),
            prevEl: '.products_39_prev' + (i + 1),
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        },
        pagination: {
            el: '.products_39_container_pagination' + (i + 1),
            clickable: true
        }
    });
    
    $('.products_39_container_list:not(:first-of-type)').addClass('hide');
    $('.products_39_title span').eq(0).addClass('on');
    $('.products_39_title').on('click', 'span', function () {
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.products_39_container_list').eq(i).removeClass('hide');
        $('.products_39_container_list').eq(i).siblings('div').addClass('hide');
        // 点击再动态加载swiper
        new Swiper('.products_39_container_main' + (i + 1), {
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true, //修改swiper的父元素时，自动初始化swiper
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.products_39_next' + (i + 1),
                prevEl: '.products_39_prev' + (i + 1),
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            },
            pagination: {
                el: '.products_39_container_pagination' + (i + 1),
                clickable: true
            }
        });

    });

});