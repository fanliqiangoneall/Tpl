require(['jquery'],function($){
    jQuery(function () {
        $(window).scroll(function () {
            var top = $(window).scrollTop();
            if(top > 90){
                $('.hjzf_head1_header').addClass('on');
            }else{
                $('.hjzf_head1_header').removeClass('on');
            }
        });

        
		//点击图标搜索
		$(".new_hjzf_heard-HJ01 .mobile_search_btn").click(function(){
			$("#searchALL").submit();
		});
		
        $(".dt-mobile-menu-icon").click(function () {
            $(".mobile-sticky-header-overlay").toggleClass("active");
        });
        //阴影层点击
        $(".mobile-sticky-header-overlay").click(function (event) {
            $(".mobile-sticky-header-overlay").removeClass("active");
            event.stopPropagation();
        });
        //手机侧边导航层点击阻止冒泡
        $("#mobile-menu-Sidebar").click(function (event) {
            event.stopPropagation();
        });
        /*移动端搜索框*/
        $(".mobile_searchbutton").click(function(){
            $(".mobile_search_content ").toggleClass("active");
            $(".mobile-sticky-header-overlay").removeClass("active");
        });
        $(".mobile_search_close").click(function(){
            $(".mobile_search_content ").toggleClass("active");
        });
        /*移动端语言版本切换*/
        $(".mobile_languagebutton").click(function(){
            $(this).toggleClass("active");
            $(".mobile_languagelist").toggleClass("active");
        });
        $(".mobile-menu-Sidebar-close").click(function () {
            $(".mobile-sticky-header-overlay").removeClass("active");
        });
        $(".next-level-button").click(function () {
            $(this).toggleClass("active");
            $(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
        });
        /*language*/
        if(typeof lan_str!="undefined"){
            var ul = document.getElementById("lang_ul");
            var lang_ul_mobile = document.getElementById("lang_ul_mobile");
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
                };
                li.setAttribute('data-count',country_name);
                li.innerHTML="<a href="+country_src+">"+country_name+"</a>";
                if($(".language_ul").length>0){$(".language_ul").append(li)}
            }
        }else{
            return false;
        };
        $(".hj02-pro-menu").parent().addClass("nav_more");
		var window_height =$(window).height();
    	var left_product_nav_height = window_height - 387;
    	// $(".left_product_nav").height(left_product_nav_height);
        var color = "#333";
        var url = window.location.href;
        var list_on = $(".yijion").children().children("h3").text();
        url = url.toLowerCase();
        jQuery(".hj-navbar ul li a").each(function () {
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
                    if (href.indexOf("product.html") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("all_isnew") != -1) {
                    if (href.indexOf("product.html") != -1) {
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
    });

});


