require(['jquery'], function ($) {
    
    if(qiehuan_aboutus_23 != ''){
        $('.hjzf2_z_aboutus_23_wrapper li').eq(0).addClass('on');
        $('.hjzf2_z_aboutus_23_title').eq(0).addClass('on');
        $('.hjzf2_z_aboutus_23_wrapper li').hover(function () {
            var index = $(this).index();
            $('.hjzf2_z_aboutus_23_title').eq(index).show().siblings('.hjzf2_z_aboutus_23_title').hide();
            $(this).addClass('on').siblings().removeClass('on');
        });
    }
    
});