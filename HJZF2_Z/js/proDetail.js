define(['jquery', 'lightBox'], function ($, lightBox) {
    var todo = function () {
        /* $('.product_detail_01').on('click', 'a', function (e) {
            e.preventDefault();
            $(this).lightBox();
            return false;
        }) */
		
        $("#payment img").click(function () {
           
            var mp4 = $(this).parent().attr('href');
            if (mp4) {
                if (mp4.indexOf(".mp4") > 0) {
                    var open = openvideo(mp4);
                    if(open) return false;
                } else if (mp4.indexOf("jpg") > 0 || mp4.indexOf("png") > 0 || mp4.indexOf("gif") > 0) {
				   if($webid == '1819') {
					   return;
				   }
                    $('#payment a').has('img').not(".pdf").lightBox();
                } else {
                    return;
                }
            };
        });
        $(".otherpage1791_video img").click(function () {           
            var _href= $(this).parent().parent().attr('href');
            if (_href) {
                layer.open({
                    type: 2,
                    title: '&nbsp;',
                    shadeClose: true,
                    shade: 0.8,
                    area: ['80%', '80%'],
                    maxmin: true,
                    content: [_href, 'no'],//iframe的url
                });
                return false;                
            };
        });
       
        $("#payment1 img").click(function (e) {
            //如果提供了事件对象，则这是一个非IE浏览器 
            if ( e && e.stopPropagation ) {
                e.stopPropagation(); 
            }else {
            //否则，我们需要使用IE的方式来取消事件冒泡 
                window.event.cancelBubble = true; 
            };
            var mp4 = $(this).parent().attr('href');
            if (mp4) {
                if (mp4.indexOf(".mp4") > 0) {
                    var open = openvideo(mp4);
                    if(open) return false;
                } else if (mp4.indexOf("jpg") > 0 || mp4.indexOf("png") > 0 || mp4.indexOf("gif") > 0) {
                    $('#payment a').has('img').not(".pdf").lightBox();
                } else {
                    return;
                };
            };
        });
        
        $("#payment span").click(function () {
            var mp4 = $(this).parent().attr('href');
            if (mp4) {
                if (mp4.indexOf(".mp4") > 0) {
                    var open = openvideo(mp4);
                    if(open) return false;
                } else if (mp4.indexOf("jpg") > 0 || mp4.indexOf("png") > 0 || mp4.indexOf("gif") > 0) {
                    $('#payment a').lightBox();
                } else {
                    return;
                }
            };
        });

        $(".pro_detail img").click(function () {
            var mp4 = $(this).parent().attr('href');
            if (mp4) {
                if (mp4.indexOf(".mp4") > 0) {
                    var open = openvideo(mp4);
                    if(open) return false;
                } else {
                    $('#payment a').has('img').not(".pdf").lightBox();
                };
            };
        });

        function openvideo(url) {
            //iframe窗
            // 绿能内页图片链接
            var reg = /(iPhone|baiiPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i;
            var navReg = navigator.userAgent.match(reg);
            var w = $(window).width();
            // navReg返回true是手机端，否则是PC端
            // console.log(w, navReg);
            if(!navReg || w > 1200){
                layer.open({
                    type: 2,
                    title: '&nbsp;',
                    shadeClose: true,
                    shade: 0.8,
                    area: ['80%', '80%'],
                    maxmin: true,
                    content: url //iframe的url
                });
                return true;
            }else{
                return false;
            };
           
        };



    };
    return {
        todo: todo
    };




});