require([ 'jquery'], function ($) {
    $('.products_25_container_inner').eq(0).show();
    $('.products_25_container_list li').eq(0).addClass('on');

    $('.products_25_container_list li').hover(function () {
        var index = $(this).index();
        $(this).addClass("on").siblings('li').removeClass('on');
        $('.products_25_container_inner').eq(index).show().siblings('div').hide();
    })
})