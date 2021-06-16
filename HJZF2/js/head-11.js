require(['jquery'],function($){
    $(".head_seach").on('click',function(){
        if($(this).is(".head_seachshow")){
            $(this).removeClass("head_seachshow");
        }else{
            $(this).addClass("head_seachshow");
        }
        if($("#ins-header-search").width()==0){
            $("#ins-header-search").css({"width":'250px',"opacity":'1',"marginRight":'20px'})
        }else{
            $("#ins-header-search").css({"width":'0',"opacity":'0',"marginRight":'0'})
        }
        if ($(".head_search_icon").css("opacity") == "1") {
            $(".head_search_icon").css("opacity", "0");

        } else {
            $(".head_search_icon").css("opacity", "1")
        }
        if ($(".head_search_close").css("opacity") == "0") {
            $(".head_search_close").css("opacity", "1");

        } else {
            $(".head_search_close").css("opacity", "0")
        }
    });
    jQuery(function () {
        $(".new_hjzf_head-8 .hj02-pro-menu").parent().addClass("nav_more");
        var color = "#333";
        var url = window.location.href;

        url = url.toLowerCase();
        jQuery(".HJ02_head_menu ul li a").each(function () {
            var href = jQuery(this).attr("href");
            href = href.toLowerCase();
            //当前url

            if (href == url) {
                // .new_hjzf_head-8 .HJ02_head_menu>div>ul>li:hover a::before{
                //     width: 100%;
                // }
                jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");
                jQuery(this).children("h2").addClass("h2").parent('a').parent('li').siblings("li").children('a').children('h2').removeClass("h2");
                
                jQuery(this).children('befor').css('width','100%');

                return false;

            }else{
                if (url.indexOf("othercate") != -1) {
                    if (href.indexOf("othercate") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("aboutus") != -1) {
                    if (href.indexOf("aboutus") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }

                if (url.indexOf("all_ishot") != -1) {
                    if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("all_isnew") != -1) {



                    if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("news") != -1) {
                    if (href.indexOf("news") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }

                if (url.indexOf("new_detail") != -1) {
                    if (href.indexOf("news") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("case_detail") != -1) {
                    if (href.indexOf("cases") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("case_category") != -1) {
                    if (href.indexOf("cases") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("product") != -1) {
                    if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
            }
        });
    });
    window.onload=function(){
        if($(".HJ02_head_menu>div>ul>li").length==9){
            $(".HJ02_head_menu>div>ul>li").css('width','11%');
        }else if($(".HJ02_head_menu>div>ul>li").length==7){
            $(".HJ02_head_menu>div>ul>li").css('width','14.28%');
        }else if($(".HJ02_head_menu>div>ul>li").length==6){
            $(".HJ02_head_menu>div>ul>li").css('width','16.66%');
        }else if($(".HJ02_head_menu>div>ul>li").length==5){
            $(".HJ02_head_menu>div>ul>li").css('width','20%');
        }else{
            $(".HJ02_head_menu>div>ul>li").css('width','12.5%');
        };
    };
    $("#brower_sc").click(function(){
        var url = window.location;
        var title = document.title;
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("360se") > -1) {
            alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
        }
        else if (ua.indexOf("msie 8") > -1) {
            window.external.AddToFavoritesBar(url, title); //IE8
        }
        else if (document.all) {//IE类浏览器
            try{
                window.external.addFavorite(url, title);
            }catch(e){
                alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
            }
        }
        else if (window.sidebar) {//firfox等浏览器；
            window.sidebar.addPanel(title, url, "");
        }
        else {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    })

});
//baidu 翻译逻辑
function translator(pattern) {
    var browserName = navigator.appName;
    var browserVer = parseInt(navigator.appVersion);
    var condition = !(( (browserName.indexOf("Explorer") >= 0 ) && (browserVer < 4) ) || ((browserName.indexOf("Netscape") >= 0 ) && (browserVer < 2) ) );
    if (condition == true)
        CanAnimate = true;
    else
        CanAnimate = false;
    /// Configuration parameters //////////////
    var open_in_same_window = 0;
    //////////// End Of Configuration /////////////

    var my_location = unescape(document.location.toString());
    var new_location = '';
    var new_pattern = '';
    if (my_location.indexOf('transpage?') != -1) {
        /// From google...
        var indexof_u = my_location.indexOf('query=');
        if (indexof_u == -1) {
            new_location = document.location;
        }
        else {
            var subs = my_location.substring(indexof_u, my_location.length);
            var ss = subs.split('&');
            new_location = ss[0].substring(6, ss[0].length);
        }
    }
    else {
        new_location = document.location;
    }
//alert("new_location"+new_location);
    indexof_p = pattern.indexOf('|');

    var isen = '';
    if (indexof_p == -1) {
        indexof_p1 = pattern.indexOf('><');
        if (indexof_p1 == -1) {
            new_pattern = pattern;

        }
        else {
            var psplit = pattern.split('><');
            if (psplit[1] == "es") {
                psplit[1] = "spa"
            }
            ;
            if (psplit[1] == "fr") {
                psplit[1] = "fra"
            }
            ;
            if (psplit[1] == "ja") {
                psplit[1] = "jp"
            }
            ;
            if (psplit[1] == "ar") {
                psplit[1] = "ara"
            }
            ;
            if (psplit[1] == "ko") {
                psplit[1] = "kor"
            }
            ;
            new_pattern = psplit[0] + '&to=' + psplit[1];

        }
    }
    else {
        var psplit = pattern.split('|');
        if (psplit[1] == "es") {
            psplit[1] = "spa"
        }
        ;
        if (psplit[1] == "fr") {
            psplit[1] = "fra"
        }
        ;
        if (psplit[1] == "ja") {
            psplit[1] = "jp"
        }
        ;
        if (psplit[1] == "ar") {
            psplit[1] = "ara"
        }
        ;
        if (psplit[1] == "ko") {
            psplit[1] = "kor"
        }
        ;
        new_pattern = psplit[0] + '&to=' + psplit[1];

    }
    var thisurl = '';
    if (isen == 1) {
        thisurl = new_location;
    }
    else {
        thisurl = "http://fanyi.baidu.com/transpage?query=" + new_location + "&from=" + new_pattern + "&source=url&render=1"
        //thisurl = 'http://translate.google.com/translate_c?langpair=' + new_pattern + "&u=" + new_location;
    }

    if (open_in_same_window == 1) {
        window.location.href = thisurl;
    }
    else {
        if (CanAnimate) {
            msgWindow = window.open('', 'subwindow', 'toolbar=yes,location=yes,directories=yes,status=yes,scrollbars=yes,menubar=yes,resizable=yes,left=0,top=0');
            msgWindow.focus();
            msgWindow.location.href = thisurl;
        }
        else {
            msgWindow = window.open(thisurl, 'subwindow', 'toolbar=yes,location=yes,directories=yes,status=yes,scrollbars=yes,menubar=yes,resizable=yes,left=0,top=0');
        }
    }

//alert(new_pattern);
}