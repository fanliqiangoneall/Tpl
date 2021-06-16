require(['jquery'],function($){
    $(function () {
        $('.HJZF2_Z__news_26_list_left_img:first-child').addClass('on');
        $('.HJZF2_Z__news_26_right_list li:first-child').addClass('on');
        $('.HJZF2_Z__news_26_right_list li:first-child').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        $('.HJZF2_Z__news_26_right_list li').click(function () {
            var self = $(this);
            var index = self.index();
            self.find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
            self.siblings('li').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            self.find('.HJZF2_Z__news_26_right_con').css('display', 'flex');
            self.siblings('li').find('.HJZF2_Z__news_26_right_con').css('display', 'none');
            $('.HJZF2_Z__news_26_list_left_img').eq(index).addClass('on').siblings('div').removeClass('on');
            $('.HJZF2_Z__news_26_list_left_img').eq(index).css('display', 'flex').siblings('div').css('display', 'none');
        })
    })
});

