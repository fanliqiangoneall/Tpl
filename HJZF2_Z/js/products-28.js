require(['jquery'], function ($) {
    $(function () {
        function triggerEvent(dom) {
            var index = $(dom).index();
            console.log(index);
            $(dom).addClass('on').siblings('li').removeClass('on');
            $('.pro_28_right .products-28--right__content').eq(index).addClass('on').siblings('.products-28--right__content').removeClass('on');
        }
        $('.pro_28_right .products-28--right__content:first-child').addClass('on');
        $('.products-28--left__ul li:first-child').addClass('on');
        if(_products_28_enent != '') {
            $('.products-28--left__ul li').hover(function () {
                triggerEvent(this);
            });
        }else{
            $('.products-28--left__ul li').click(function () {
                triggerEvent(this);
            });
        }
       
        
        
        
        
    });
});