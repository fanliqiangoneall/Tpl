require(['jquery'],function($){
    jQuery(function () {
        $(".hj02-pro-menu").parent().addClass("nav_more");
        var color = "#333";
        var url = window.location.href;
        var list_on = $(".yijion").children().children("h3").text();
        url = url.toLowerCase();
        jQuery(".head-12__navbar ul li a").each(function () {
            var href = jQuery(this).attr("href");
            href = href.toLowerCase();
            //当前url
            if (href == url) {
                jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");
                return false;
            }else{
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
                if (url.indexOf("new_category") != -1) {
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
                if ($(this).children().text() == list_on) {
                    $(this).parent().addClass("menu_on").siblings("li").removeClass("menu_on");
                    /*if (href.indexOf("product") != -1) {
                     jQuery(this).parent("li").addClass("menu_on");

                     }*/
                }else if(url.indexOf("product") != -1){
                    if ((href.indexOf("product") != -1) && (href.indexOf("category") == -1)) {
                        jQuery(this).parent("li").addClass("menu_on");

                    }
                }
                if (url.indexOf("cases") != -1) {
                    if (href.indexOf("cases") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("contactus") != -1) {
                    if (href.indexOf("contactus") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
            }
        });
        $(".head-12__msn li").hover(function(){
            if(!$(this).find(".head-12__msnBtn").is(".active")){
                $(this).find(".head-12__msnBtn").addClass("active").parent().siblings("li").find(".active").removeClass("active");
                $(this).find(".head-12__msnBtn").next().fadeIn();
                $(this).find(".head-12__msnBtn").parent().siblings("li").find(".head-12__msnContent").fadeOut();
            }else{
                $(this).find(".head-12__msnBtn").removeClass("active");
                $(this).find(".head-12__msnBtn").next().fadeOut();
            }
        });
        $("#head-12 .head-12__language p").click(function(){
            $("#head-12 .head-12__language ul li ul").slideToggle();
        });
        function language(){
            if(typeof lan_str!="undefined"){
                var ul = document.getElementById("lang_ul");
                var _url = window.location.href;
                _url = _url.toLowerCase();

                var arry = [];
                var arry_two = [];
                arry = lan_str.split('<br>');
                for (i=0;i<arry.length ;i++){
                    var country_src = arry[i].substring(arry[i].indexOf("：")+1,arry[i].length);
                    var country_name = arry[i].substring(0,arry[i].indexOf("："));
                    var li = document.createElement("li");
                    li.className += country_name;

                    if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                        li.className += " count_hide";
                    }else{
                        li.classList.remove("count_hide");
                    }
                    li.setAttribute('data-count',country_name);
                    li.innerHTML="<a href="+country_src+">"+country_name+"</a>";
                    ul.append(li);

                    if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                        $("#head-12 .head-12__language>ul>li p").text(country_name);
                        $("#head-12 .head-12__language>ul>li p").attr("data-count",country_name);
                    }
                }
            }else{
                return false;
            }

        };
        if($(".head-12__language").length > 0){
            language();
        }

    });
});


