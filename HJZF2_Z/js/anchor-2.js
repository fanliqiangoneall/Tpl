require(['jquery', 'mousewheel'], function ($, mousewheel) {
    $(function () {
        var index, speed = 800;
        var body_html = $('html,body');
        if (!index) {
            index = 1;
        };
        var len = $('.hjzf_anchor_wrapper li').length;
        $('.hjzf_anchor_wrapper li a').click(function (e) {
            e.preventDefault();
            index = $(this).parent().index() - 1;
            bindEvent(index);
        });

        $('.toNest').click(function () {
            index++;
            if (index >= len - 1) {
                index = len -1;
            }
            bindEvent( index);
        });
        $('.toPrev').click(function () {
            index--;
            if (index <= 0) {
                index = 0;
            }
            bindEvent(index);
        });

        /* 点击滚动 */
        function bindEvent(index) {
            addCla(index);
            var ida = $('.hjzf_anchor_wrapper li a').eq(index).attr('href');
            body_html.animate({
                scrollTop: ($(ida).offset().top)
            }, speed);
        };
        /* 添加css样式 */
        function addCla(index) {
            var self = $('.hjzf_anchor_wrapper li').eq(index);
            self.addClass('active').siblings('li').removeClass('active');
            if(index > 0){
                $('.hjzf_anchor').addClass('on');
            }else{
                $('.hjzf_anchor').removeClass('on');
            }
        };
        /* 鼠标滚动 修改锚点样式 */
        $(window).scroll(function () {
            $('.hjzf_anchor_wrapper li a').each(function (i) {
                var acId = $(this).attr('href');
                if($(acId).offset()){
                    var top = $(acId).offset().top -  $(window).scrollTop();
                    if(top < 600) {
                        index = i;
                        addCla(index);
                    };
                };
                
            });
        });

    });

});