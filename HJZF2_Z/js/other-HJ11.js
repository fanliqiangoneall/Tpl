require(['jquery'], function ($) {
    $(window).resize(function () {
        winWidth();
    });
    winWidth();
    function winWidth() {
        if ($(window).width() > 1200) {
            var HJZF_Z_other_HJ11 = $('.HJZF_Z_other_HJ11 .HJZF_Z_other_HJ11_cont li');
            HJZF_Z_other_HJ11.removeClass('active').eq(0).addClass('active');
            HJZF_Z_other_HJ11.hover(function () {
                var self = $(this);
                self.siblings('li').removeClass('active');
                self.addClass('active');
            });
        }
    }

});