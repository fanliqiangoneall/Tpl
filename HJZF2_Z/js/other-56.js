require(['jquery', 'layer'], function ($, layer) {
    var height = $('.hjzf2_other_56').height();
    if (height) {
        $(window).scroll(function () {
            var top = $('.hjzf2_other_56').offset().top - $(window).scrollTop();
            if (top <= height / 2 && top > -(height - 100)) {
                $('.hjzf2_other_56').addClass('moving');
            }
        })
    };
    if(hjzf_other_56_video != ''){
        $('.hjzf2_other_56 img').css('cursor', 'pointer');
        $('.hjzf2_other_56 img').on('click', function (e) {
            e.preventDefault();
            layer.open({
                type: 2,
                title: false,
                area: ['80%', '70%'],
                shade: 0.8,
                closeBtn: 1,
                shadeClose: true,
                content: hjzf_other_56_video
            });
            return false;
        });
    }

})