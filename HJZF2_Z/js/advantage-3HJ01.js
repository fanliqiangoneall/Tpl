require(['jquery'], function ($) {
    $('.new_hjzf_advantage-3HJ01__list li').click(function () {
        var self = this;
        $(this).next('div').addClass('open');
        $('.modal .modal-header .close').click(function () {
            $(self).next('div').removeClass('open');
        });
    });
    $('.modal').click(function () {
        $('.modal-dialog').click(function (e) {
            e.stopPropagation();
        });
        $(this).removeClass('open');
    });
});