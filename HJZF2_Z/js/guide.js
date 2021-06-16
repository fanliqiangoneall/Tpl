require(['jquery'], function ($) {
    function handlePreloader() {
        if ($('.loader-wrap').length) {
            $('.loader-wrap').addClass('on');
            $('.loader-wrap').fadeOut(500);
        }
    };
    $(function () {
        handlePreloader();
    });
});