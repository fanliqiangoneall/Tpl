require(['jquery'],function($){
    jQuery(function () {
        $(".hj02-pro-menu").parent().addClass("nav_more");
        var color = "#333";
        var url = window.location.href;
        var list_on = $(".yijion").children().children("h3").text();
        url = url.toLowerCase();
        jQuery(".head-6__navbar ul li a").each(function () {
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

        $(".hjzf-header6-searchBut").click(function(){
            $(".hjzf-header6-search").slideToggle();
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
                    var country_name_full = country_name.split(',')[0];
                    var country_name_jian = country_name.split(',')[1];

                    var li = document.createElement("li");
                    li.className += country_name_full;

                    if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                        li.className += " count_hide";
                    }else{
                        li.classList.remove("count_hide");
                    }
                    li.setAttribute('data-count',country_name_full);
                    li.setAttribute('data-country',country_name_jian);
                    li.innerHTML="<a href="+country_src+">"+country_name_full+"</a>";
                    if(ul){
                        ul.append(li);
                    }


                    if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                        $(".head-6__Language>ul>li p").text(country_name_full);
                        $(".head-6__Language>ul>li p").attr("data-count",country_name_full);
                    }
                }


                if($(".head-6__Language>ul>li ul li.count_hide").length>1){
                    $(".head-6__Language>ul>li ul li.count_hide:last").siblings("li").removeClass("count_hide");

                    var current_href = $(".head-6__Language>ul>li ul li.count_hide:last").find("a").attr("href");
                    var replaced = current_href.split(".")[0];
                    var new_cout = current_href.replace(replaced,"http://www");
                    $(".head-6__Language>ul>li ul li:first-child").find("a").attr("href",new_cout);
                }
            }else{
                return false;
            }

        };
        language();
    });
});


