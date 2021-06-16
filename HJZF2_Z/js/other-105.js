require(['jquery'], function ($) {
    $(function () {
        $('.other_105_down').click(function () {
            $(this).parents('.index_pd HJZF2_Z_other_105_wrapper').next();
            $('html, body').animate({
                scrollTop: $(this).parents('.HJZF2_Z_other_105_wrapper').next('.HJZF2_Z_other_105_wrapper').offset().top - 97
            }, 500);
        });
        
    });
});