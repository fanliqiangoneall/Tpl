/*
 * @Author: your name
 * @Date: 2019-08-12 10:01:44
 * @LastEditTime: 2020-11-26 17:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefined\\wenjian\www\Pc\Tpl\HJZF2_Z\js\jqueryzoom.js
 */
;(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define([ "jquery" ], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function ($) {
    $.fn.jqueryzoom = function (options) {
        var settings = {xzoom: 700, yzoom: 525, offset: 10, position: "right"};
        if (options) {
            $.extend(settings, options)
        }
        var noalt = '';
        function MouseEvent(e) {
            this.x = e.x ? e.x : e.pageX
            this.y = e.y ? e.y : e.pageY
        }
        $(this).hover(function () {
            var imageLeft = $(this).get(0).offsetLeft;
            var imageRight = $(this).get(0).offsetRight;
            var imageTop = $(this).get(0).offsetTop;
			console.log("imageTop",imageTop);
            var imageWidth = $(this).get(0).offsetWidth;
            var imageHeight = $(this).get(0).offsetHeight;
            var bigimage = $(this).find(".swiper-slide-active").find(".jqzoom").attr("src");
            noalt = $(this).find(".swiper-slide-active").find(".jqzoom").attr("src");
            $(this).find(".swiper-slide-active").find(".jqzoom").attr("alt", '');            
            //console.log(imageLeft+"+++++"+imageWidth+'++++++++'+imageHeight);
            if (noalt == '' || noalt == undefined)return false;
            if (noalt != undefined) {
                if ($("div.zoomdiv").get().length == 0) {
                    $(".left").after("<div class='zoomdiv'><img class='bigimg' src='" + bigimage + "'/></div>")
                }
            }
            if (settings.position == "right") {
                leftpos = imageLeft + imageWidth + settings.offset
            } else {
                leftpos = imageLeft - settings.xzoom - settings.offset
            }
            
            $("div.zoomdiv").css({top: imageTop, left: leftpos});
            $("div.zoomdiv").width(settings.xzoom);
            $("div.zoomdiv").height(settings.yzoom);
            $("div.zoomdiv").show();
            $(document.body).mousemove(function (e) {
                var bigwidth = $(".bigimg").get(0).offsetWidth;
                var bigheight = $(".bigimg").get(0).offsetHeight;
                //console.log(bigwidth+"+++++++"+bigheight);
                var scaley = 'x';
                var scalex = 'y';
                if (isNaN(scalex) | isNaN(scaley)) {
                    var scalex = Math.round(bigwidth / imageWidth);
                    var scaley = Math.round(bigheight / imageHeight)
                }
                //console.log(scalex+"+++++++"+scaley);
                mouse = new MouseEvent(e);
                scrolly = mouse.y - imageTop - ($("div.zoomdiv").height() * 1 / scaley)*1.5;
                console.log(scrolly);
                $("div.zoomdiv").get(0).scrollTop = scrolly * scaley;
				console.log("scrolly * scaley",scrolly * scaley);
                scrollx = mouse.x - imageLeft - ($("div.zoomdiv").width() * 1 / scalex)*1.5;
                $("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex;
            })
        }, function () {
            $(this).find(".jqzoom").attr("alt", noalt);
            $("div.zoomdiv").hide();
            $(document.body).unbind("mousemove");
            $(".lenszoom").remove();
            $("div.zoomdiv").remove();
        });
        
    };

}));
