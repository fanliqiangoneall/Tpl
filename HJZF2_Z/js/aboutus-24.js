require(['jquery'], function ($) {
    $(function () {
        if($(window).width() < 767){
            // $('.hjzf2_z_aboutus_24 .index_title').find('br').after('&nbsp;').remove();
            $('.aboutus_24_text').find('br:odd').hide();
        };
    });
});
    