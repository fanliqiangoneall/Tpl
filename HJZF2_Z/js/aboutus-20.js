require(['jquery', 'lightBox'], function ($) {
    $('.hjzf_aboutus_20_right a.video').on('click', function (e) {
        e.preventDefault();
        layer.open({
            type: 2,
            title: false,
            area: ['80%', '70%'],
            shade: 0.8,
            closeBtn: 1,
            shadeClose: true,
            content: hjzf_aboutus_20_video
        });
        return false;
    })
});