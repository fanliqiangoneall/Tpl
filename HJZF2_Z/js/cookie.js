require(['jquery'], function ($) {
    function setCookie(key, val) {
        document.cookie = key + '=' + val;
    };


    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
    }
    $('.hjzf_cookie button').click(function () {
        $('.hjzf_cookie').fadeOut();
        setCookie('_button', true);
    });
    if (getCookie('_button') != "true") {
        $('.hjzf_cookie').fadeIn();
    }
});