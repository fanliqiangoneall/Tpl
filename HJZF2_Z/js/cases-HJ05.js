require(['jquery'], function ($) {
    $('.cases-hj05_listtitle_pc li:first').addClass('active');
    $('.cases-hj05_con:first').addClass('active');
    $('.cases-hj05_listtitle_pc li').on('click', function (e) {
        var index = $(this).index();
        var self = this;
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $('.cases-hj05_con').each(function () {
            $(this).removeClass('active');
        });
        $('.cases-hj05_con').eq(index).addClass('active')
    })

});