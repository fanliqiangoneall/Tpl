require(['jquery'], function ($) {

    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= 400) {
            $('.foregin_msn').fadeIn();
        } else {
            $('.foregin_msn').fadeOut();
        }
    });
    if ($(window).scrollTop() < 400) {
        $('.foregin_msn').hide();
    }

});