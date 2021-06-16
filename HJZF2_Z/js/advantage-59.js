require(['jquery'], function ($) {
    $(function () {
        $('.hjzf_advantage_59_list_top li:first-child').addClass('on');
        $('.hjzf_advantage_59_list_bottom').eq(0).addClass('on');
        var type;
        if(isClick) {
            type = 'hover';
        }else{
            type = 'click';
        }
        $('.hjzf_advantage_59_list_top li')[type](function () {
            var self = $(this);
            var index = self.index();
            $('.hjzf_advantage_59_list_bottom').eq(index).addClass('on').removeClass('onover').siblings('.hjzf_advantage_59_list_bottom').addClass('onover').removeClass('on');
            self.toggleClass('on').siblings().removeClass('on');
        })
    })
})