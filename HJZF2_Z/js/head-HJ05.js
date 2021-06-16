require(['jquery', 'swiper'], function ($, Swiper) {
    /*移动端导航栏*/
    $(".dt-mobile-menu-icon").click(function () {
        $(".mobile-sticky-header-overlay").toggleClass("active");
    });
    //手机侧边导航层点击阻止冒泡
    $("#mobile-menu-Sidebar").click(function (event) {
        event.stopPropagation();
    });
    $(".mobile-menu-Sidebar-close").click(function () {
        $(".mobile-sticky-header-overlay").toggleClass("active");

    });
    $(".next-level-button").click(function () {
        $(this).toggleClass("active");
        $(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
    });
    //阴影层点击
    $(".mobile-sticky-header-overlay").click(function (event) {
        $(".mobile-sticky-header-overlay").removeClass("active");
        event.stopPropagation();
    });
    /*移动端搜索框*/
    $(".mobile_searchbutton").click(function () {
        $(".mobile_search_content ").toggleClass("active");
        $(".mobile-sticky-header-overlay").removeClass("active");
    });
    $(".mobile_search_close").click(function () {
        $(".mobile_search_content ").toggleClass("active");
    });
    /*移动端语言版本切换*/
    $(".mobile_languagebutton").click(function () {
        $(this).toggleClass("active");
        $(".mobile_languagelist").toggleClass("active");
    });



    // 判断url 是否和 data-url中的news,pro等属性相同
    function urlDate(data_url) {
        var flag = isLocal(data_url);
        if (!flag) {
            var onurl = window.location.href;
            var rega = /\.[\w]+\/(\w+)/;
            var arr, arra;
            arr = rega.exec(onurl);
            arra = rega.exec(data_url);
            // console.log(onurl, ': ', arr, data_url, ' :', arra);
            if (!arr && !arra) {
                return true;
            }
            return arr && arra ? arr[1] === arra[1] ?  true : false : false;
        }
        return false;
    }
    function isLocal() {
        var reg = /https?\:\/\/[0-9\.]+/;
        var url = window.location.href;
        if (reg.exec(url)) {
            return true;
        }
        return false;
    }
    
    $(function () {
        var onurl = window.location.href;
        $('.nav_li').each(function (i) {
            var that = $(this);
            var xiala = that.find('.xiala_nav');
            if (xiala.length >= 1) {
                that.find('i').removeClass('hidden');
            };

            /* 导航添加高亮 */
            var data_url = that.attr('data-url');
            var flag = urlDate(data_url);
            if (flag) {
                that.addClass('on');
            }
            that.find('a').each(function () {
                var url = $(this).attr('data-url');
            })
            
        });

        /* 微信图标 */
        $('.guanhui a').hover(function () {
            $('.guanhui_ewm').slideToggle();
        });

        /* 语言下拉 */
        $('.pc_language').hover(function () {
            $('.pc_language_dropdown').slideToggle();
        });
        //* 导航 */
        navEvent();

        function navEvent() {
            if ($(window).width() > 1200) {
                /*  (刷新时候不在顶部就执行)函数执行 start */
                var top_len = $(this).scrollTop();
                var top = $('.header_bott').height();
                if (top_len > top / 2) {
                    $('.header_bott').addClass('fixed');
                    $('.header_bott_empty').addClass('fixed');
                } else {
                    $('.header_bott').removeClass('fixed');
                    $('.header_bott_empty').removeClass('fixed');
                }
                /* (刷新时候不在顶部就执行)函数执行 end */
                /* 函数执行 start */
                $(window).scroll(function () {
                    var top_len = $(this).scrollTop();
                    var top = $('.header_bott').height();
                    if (top_len > top / 2) {
                        $('.header_bott').addClass('fixed');
                        $('.header_bott_empty').addClass('fixed');
                    } else {
                        $('.header_bott').removeClass('fixed');
                        $('.header_bott_empty').removeClass('fixed');
                    }
                });
                /* 函数执行 end */
            }
        };

        $(window).resize(function () {
            var cc = $(window).width();
            if (cc > 1200) {
                navEvent();
            };
        });


        /* 导航 */
        var flag = false;
        $('.inav_wrapper .nav_li').mouseover(function () {
            var self = this;
            var xiala = $(self).find('.xiala_nav');
            if (!flag) {
                xiala.addClass('active');
                flag = true;
            } else {
                $(self).mouseout(function () {
                    xiala.removeClass('active');
                    flag = false;
                });
            };

        });

        //* pc 搜索下拉 start */

        /* pc 搜索下拉 end */
        var sss = $(window).width();
        if (sss > 1200) {
            $('.h_search.nolink').click(function () {
                var top = $('.search-alert').attr('top');
                $('.search-alert').animate({
                    top: 0
                });
            });
            $('.search-alert .close').click(function () {
                $('.search-alert').animate({
                    top: '-100%'
                });
            });
        } else {
            bindEvent();

            function bindEvent() {
                $('.h_search.nolink').click(function () {
                    $('.mSearch').slideToggle(400);
                    $('.m_nav').slideUp();
                });
            };
            $(window).resize(function () {
                bindEvent();
            });

        };

        /* 手机导航 start */
        var height = $('.header_bott').outerHeight();
        $('.mSearch').css('top', height);
        $('.mobile_key').click(function () {
            $('.header_bott').toggleClass('open');
            $('.m_nav').slideToggle(500).css('top', height);
            $('.mSearch').slideUp();
        });
        /* 手机导航 end */


        /* 手机下拉点击下拉 */
        $('.m_secNav').each(function (i) {
            var self = $(this);
            var m_xiala = self.next(".m_erji")[0];
            var self_sib_i = self.siblings('a').find('i');
            var par = self.parent('li').siblings('li');
            if (!m_xiala) {
                self_sib_i.toggleClass('fa-plus');
                self_sib_i.toggleClass('fa-link');
            } else {
                self_sib_i.click(function () {
                    self.siblings('.m_erji').slideToggle();
                    self_sib_i.toggleClass('fa-plus');
                    self_sib_i.toggleClass('active');
                    self.slideToggle();
                    par.find('.m_erji').slideUp();
                    par.find('.m_secNav').slideUp();
                });
            };
        });

    });

    /* 语言版本 */
    $(function () {
        if (typeof lan_str != "undefined" && lan_str != '') {
            var ul = document.getElementById("lang_ul");
            var lang_ul_mobile = document.getElementById("lang_ul_mobile");
            var _url = window.location.href;
            _url = _url.toLowerCase();
            var arry = [];
            var arry_two = [];
            arry = lan_str.split('<br>');

            for (i = 0; i < arry.length; i++) {
                var country_src = arry[i].substring(arry[i].indexOf("：") + 1, arry[i].length);
                var country_name = arry[i].substring(0, arry[i].indexOf("："));
                var li = document.createElement("li");
                li.className += country_name;

                if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                    li.className += " count_hide";
                } else {
                    li.classList.remove("count_hide");
                }
                li.setAttribute('data-count', country_name);
                li.innerHTML = "<a href=" + country_src + " target='_blank'>" + country_name + "</a>";
                if ($(".language_ul").length > 0) {
                    $(".language_ul").append(li);
                }
            }
        } else {
            $(".language_ul").hide();
            return false;
        }
    });


});