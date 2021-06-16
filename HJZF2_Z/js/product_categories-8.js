require(['jquery'],function($){
    $('.hjzf_procate_8_right li').eq(0).addClass('on');
    $('.hjzf_procate_8_right li').hover(function () {
        $(this).addClass('on').siblings('li').removeClass('on');
    });
});
