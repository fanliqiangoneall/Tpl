require(['jquery','move_port'],function($,move_port){
    $(function(){
        if($("#HJZF2_floatWindow").length>0){
            function close(){
                var close = "<div class=\"close_port\">×</div>";
                $("#HJZF2_floatWindow").append(close);
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
                $("#HJZF2_floatWindow").hover(function(){
                    $(this).find('.close_port').show();
                },function(){
                    $(this).find('.close_port').hide();
                });
                $("#HJZF2_floatWindow").find('.close_port').on('click',function(){
                    $(this).parent().remove();
                });
            }
            if(typeof window_type!="undefined" && window_type===0){
                //去除浮窗
                $("#HJZF2_floatWindow").remove();
            }else if(typeof window_type!="undefined" && window_type===1){
                //靠左漂浮
                $("#HJZF2_floatWindow").addClass("left_show");
                close();
            }else if(typeof window_type!="undefined" && window_type===2){
                //靠右漂浮
                $("#HJZF2_floatWindow").addClass("right_show");
                close();

            }else if(typeof window_type!="undefined" && window_type===3){
                $("#HJZF2_floatWindow").addClass("window_fei");
                $("#HJZF2_floatWindow").css("zIndex","10000");
                move_port.move_obj("#HJZF2_floatWindow");
            }else{
                return false;
            }
        }
    });
});
