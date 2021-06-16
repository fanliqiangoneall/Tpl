/*悬浮窗*/
    function move_obj(obj, move_w, move_h, x, y, l, t, m) {
        if (obj == undefined) {
            alert("方法调用错误,请传入正确参数!");
            return;
        }
        move_w = (move_w == undefined || move_w == '') ? $(window).width() : move_w;
        move_h = (move_h == undefined || move_h == '') ? $(window).height() : move_h;
        x = (x == undefined || x == '') ? 3 : x;
        y = (y == undefined || y == '') ? 3 : y;
        l = (l == undefined || l == '') ? 0 : l;
        t = (t == undefined || t == '') ? 0 : t;
        m = (m == undefined || m == '') ? 80 : m;
        function moving() {
            x = (l >= move_w - $(obj).width() || l < 0) ? -x : x;
            y = (t >= move_h - $(obj).height() || t < 0) ? -y : y;
            l += x;
            t += y;
            $(obj).css({left: l, top: t});
        }

        var timer_move = setInterval(function () {
            moving();
        }, m);
        $(obj).mouseover(function () {
            $(this).children(".close_port").show();
            clearInterval(timer_move);
        });
        $(obj).mouseout(function () {
            $(this).children(".close_port").hide();
            timer_move = setInterval(function () {
                moving();
            }, m);
        });
        var close = "<div class=\"close_port\">×</div>";
        $(obj).append(close);
        $(".close_port").css({
            position: 'absolute',
            display: 'none',
            width: '20px',
            height: '20px',
            top: 0,
            right: 0,
            color: 'red',
            border: '1px solid red',
            background: '#ccc',
            textAlign: 'center',
            lineHeight: '20px',
            cursor: 'pointer'
        });
        $(obj).on('click', '.close_port', function () {
            $(obj).find('.close_port').trigger('mouseover');
            clearInterval(timer_move);
            $(this).parent().remove();
        })
    };