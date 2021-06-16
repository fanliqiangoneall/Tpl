require(['jquery'], function ($){
	$(".head-6__search_btn").click(function(){
		$(".head-6__search").toggleClass("active");
		if($(".head-6__search").hasClass("active")){
			$(".nav-head").css("top","50px");
		}else{
			$(".nav-head").css("top","0px");
		}
		
	});
	$(".head-6__submit").click(function(){
		$(this).parent().submit();
	});
	$(".head-6__search__close").click(function(){
		$(".head-6__search").toggleClass("active");
		if($(".head-6__search").hasClass("active")){
			$(".nav-head").css("top","50px");
		}else{
			$(".nav-head").css("top","0px");
		}	
	});
	
	//弹层
	$(".head-6__m__menu,.head-6_error").click(function(event){
		console.log($(this));
		 if (!$(this).hasClass("head-6__m_nav")){
					   $(".head-6__m__menu").hide();
					}
		event.stopPropagation(); //阻止事件冒泡    
	});	
	
	$(".head-6__m_nav").click(function(){
	 event.stopPropagation()
	});
	
	
	$(".mobile_menu").click(function(){
		$(".head-6__m__menu").show();
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
	$(".mobile-menu-Sidebar-close").click(function () {
		$(".mobile-sticky-header-overlay").removeClass("active");
	});
	$(".next-level-button").click(function () {
		$(this).toggleClass("active");
		$(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
	});


	/* 语言版本 */ 
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

            li.setAttribute('data-count', country_name);
            li.innerHTML = "<a href=" + country_src + " target='_blank'>" + country_name + "</a>";
            if ($(".language_ul").length > 0) {
                $(".language_ul").append(li);
            }
        }
    } else {
        $(".language_ul").hide();
        return false;
    };
	
	

	$(function () {

		var url = window.location.href;
		if(url){
			url = url.toLowerCase();
		}
		$(".head-6__navbox ul li a").each(function () {
			var href = $(this).attr("href");
			if(href){
			href = href.toLowerCase();
			}
			//当前url
			if (href == url) {
				$(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on");
				return false;

			} else {
				if (url.indexOf("othercate") != -1) {
					if (href.indexOf("othercate") != -1) {
						$(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on");
					}
				}
				if (url.indexOf("aboutus") != -1) {
					if (href.indexOf("aboutus") != -1) {
						$(this).parent("li").addClass("menu_on")
					}
				}

				if ((url.indexOf("all_ishot") != -1) || (url.indexOf("all_isnew") != -1) || (url.indexOf("product_category") != -1) || (url.indexOf("search") != -1)) {
					if (href.indexOf("product") != -1) {
						$(this).parent("li").addClass("menu_on")
					}
				}

				if ((url.indexOf("new_category") != -1) || (url.indexOf("new_detail") != -1)) {
					if (href.indexOf("news") != -1) {
						$(this).parent("li").addClass("menu_on")
					}
				}

				if ((url.indexOf("case_detail") != -1) || (url.indexOf("case_category") != -1)) {
					if (href.indexOf("cases") != -1) {
						$(this).parent("li").addClass("menu_on")
					}
				}
				if ((url.indexOf("download_category") != -1) || (url.indexOf("download_detail") != -1)) {
					if (href.indexOf("download") != -1) {
						$(this).parent("li").addClass("menu_on")
					}
				}
				if (url.indexOf("job") != -1) {
					if (href.indexOf("jobs") != -1) {
						$(this).parent("li").addClass("menu_on")
					}
				}
			}
		});
	});


});
