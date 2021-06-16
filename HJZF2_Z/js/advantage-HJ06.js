require(['jquery', 'swiper'], function ($, Swiper) {
    
    var swiper = new Swiper('.advantage_HJ06_swiper', {
        navigation: {
            nextEl: '.advantage_HJ06_swiper-btn-next',
            prevEl: '.advantage_HJ06_swiper-btn-prev',
        },
        lazy: {
            loadPrevNext: true,
        }
    });
    
    if ($(window).width() > 1365) {
        var adv = $('.advantage_HJ06');
        var dom = adv.get(0);
        if (dom) {
            $(document).scroll(function () {
                var fla = elementInViewport2(dom);
                if (fla) {
                    adv.addClass('active');
                } else {
                    adv.removeClass('active');
                }
            })
        }
    }else if($(window).width() <= 1365){
        $('.advantage_HJ06').addClass('active');
    }
    $('.advantage_HJ06_text_inner').each(function (i) {
        $(this).find('i').text(i + 1);
    });


    // 检查dom是否在文档显示区域（任何部分在显示区域返回true）
    function elementInViewport2(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    };

})

