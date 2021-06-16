
require(['jquery','swiper'],function($,Swiper){
    $(".hjzf2_other_44_wrapper li").each(function () {
        var self = $(this);
        var self_i = $(this).find('i');
        self_i.click(function () {
            self.toggleClass('on');
            self.siblings('li').removeClass('on');
        })
    })
})
