require(['jquery'], function ($) {
    $(function () {
        var side_first = $('.side_first');
        if (side_first.length > 0) {
            var flag = false;
            $('.side_first_r_top').click(function () {
                side_first.addClass('active');
            });
            $('.side_first_l').click(function () {
                side_first.removeClass('active');
            });
        };  
        $('.form_fixed_button').click(function () {
            $('.side_third_inquiry').toggleClass('closed');
        });
        $('#btn_closed').click(function () {
            $('.side_third_inquiry').toggleClass('closed');
        });
        $('.sidexp .sidebox').on('mouseenter', function (){
            $(this).next('.side_3').find('.side_third_inquiry').addClass('closed');
        })
    })
});