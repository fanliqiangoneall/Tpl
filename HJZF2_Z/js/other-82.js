require(['jquery'], function ($) {
    $(function () {
        $('.hjzf_other_82_img .hjzf_other_82_img_ico:first-child').addClass('on').show();
        $('.hjzf2_other_82_wrapper_con li:first-child').addClass('on');
        $('.hjzf2_other_82_wrapper_con li').hover(function () {
            var index = $(this).index();
            $(this).addClass('on').siblings('li').removeClass('on');
            $('.hjzf_other_82_img .hjzf_other_82_img_ico').eq(index).addClass('on').show().siblings('.hjzf_other_82_img_ico').removeClass('on').hide();
        })
    })
})

