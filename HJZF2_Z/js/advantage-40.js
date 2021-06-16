require(['jquery'], function ($) {
    $('.hjzf_advantage_40_wrapper li').each(function (i){
        i++;
        if(i < 10) {
            i = "0" + i;
        }
        $(this).find('em').text( i );
    })
})