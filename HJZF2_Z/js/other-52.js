require(['jquery'], function ($) {
    // 弹出层
    $('.info-alerta').click(function () {
        $('.md-modala').removeClass('closed');
        $('.md-overlaya').removeClass('closed');
    })

    $('.md-closed,.md-overlaya').click(function () {
        $('.md-modala').addClass('closed');
        $('.md-overlaya').addClass('closed');
    })

})