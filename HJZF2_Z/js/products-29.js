require(['jquery'], function ( $) {
    $('.hjzf_z_products_29_title li:first').addClass('on');
    $('.hjzf_z_products_29_wrapper:first').addClass('on');


    $('.hjzf_z_products_29_title li').hover(function () {
        var index = $(this).index();
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.hjzf_z_products_29_wrapper').eq(index).addClass('on').siblings('.hjzf_z_products_29_wrapper').removeClass('on');
    })
})
