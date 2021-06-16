require(['jquery'], function ($) {
    $(function () {
        if(isOpenFirst != '') {
            $('.new_hjzf_product36_wrapper li').eq(0).addClass('on').siblings('li').removeClass('on').addClass('active');
            $('.new_hjzf_product36_wrapper li').on('mouseenter',function () {
                $(this).addClass('on').siblings('li').removeClass('on').addClass('active');
            })
        }else{
            $('.new_hjzf_product36_wrapper li').on('mouseenter',function () {
                $(this).addClass('on').siblings('li').removeClass('on').addClass('active');
            }).on('mouseleave', function () {
                $(this).removeClass('on').siblings('li').removeClass('active');
            });
        }
        
    });
});