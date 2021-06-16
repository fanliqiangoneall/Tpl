require(['jquery', 'swiper', 'layer'], function ($,swiper , layer) {
    $('.hjzf_advantage_26_lsp').on('click', function (e) {
        e.preventDefault();
        layer.open({
            type: 2,
            title: false,
            area: ['80%', '70%'],
            shade: 0.8,
            closeBtn: 1,
            shadeClose: true,
            content: hjzf_advantage_26_video
        });
        return false;
    })
    
})