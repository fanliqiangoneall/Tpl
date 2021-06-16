require(['jquery', 'lightBox'], function ($) {
    $(document).ready(function () {
        var videoMusic = $('#video').get(0);
        $('.openvideo').click(function (e) {
            e.preventDefault();
            $('.hjzf2_other_47_fix').addClass('open');
            videoMusic.paused = false;
            videoMusic.play();
        });
        $('.hjzf2_other_47_fix .colsed').click(function () {
            $('.hjzf2_other_47_fix').removeClass('open');
            videoMusic.pause();
        });
    });
    $('.hjzf2_other_47 a.video').on('click', function (e) {
        e.preventDefault();
        layer.open({
            type: 2,
            title: false,
            area: ['80%', '70%'],
            shade: 0.8,
            closeBtn: 1,
            shadeClose: true,
            content: hjzf_other_47_video
        });
        return false;
    })
});