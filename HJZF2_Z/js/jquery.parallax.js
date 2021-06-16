/*
Parallax Plugin V 1.0
Author: Nino Zumstein
Date  : 12.09.2016
*/
/*DO NOT USE THIS VERSION OF THE PARALLAX.JS, THIS IS FOR DEMO PURPOSE ONLY*/
;(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define([ "jquery" ], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function ($) {
    $.fn.parallax = function (options) {
        var parallax_element = this;
        var settings = {
            speed: '100',
            ascending: true,
            delay: '1000'
        };
        if (options) {
            $.extend(settings, options);
        }
        var ad = "+";
        if (!settings['ascending'] == true) {
            var ad = "-";
        }
        $(window).scroll(function () {
            var wScroll = $(this).scrollTop();
            parallax_element.css({
                "transform": "translate(0px, " + ad + wScroll / settings['speed'] + "%)",
                "transition-duration": settings['delay'] + "ms"
            });
        });
    }
}));