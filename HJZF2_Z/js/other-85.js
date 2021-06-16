require(['jquery', 'swiper', 'layer'], function ($, swiper, layer) {
    if (hjzf_other_85_video != '') {
        $('.HJZF2_Z_other_84_left').on('click', function (e) {
            e.preventDefault();
            layer.open({
                type: 2,
                title: false,
                area: ['80%', '70%'],
                shade: 0.8,
                closeBtn: 1,
                shadeClose: true,
                content: hjzf_other_85_video
            });
            return false;
        });
    };
})