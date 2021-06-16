require(['jquery'], function ($) {


    // 弹出层
    $('.info-alert').click(function () {
        $('.md-modal').removeClass('close');
        $('.md-overlay').removeClass('close');
    })

    $('.md-close,.md-overlay').click(function () {
        $('.md-modal').addClass('close');
        $('.md-overlay').addClass('close');
    })
})