require(['jquery'], function ($) {
    $('.HJZF2_Z_other_98_title_list li:first-child').addClass('on');
    $('.HJZF2_Z_other_98_wrapper').eq(1).addClass('on');
    $('.HJZF2_Z_other_98_title_list li').hover(function () {
        var index = $(this).index();
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.HJZF2_Z_other_98_wrapper').eq(index).addClass('on').removeClass('active').siblings('.HJZF2_Z_other_98_wrapper').addClass('active').removeClass('on');
    });
});
