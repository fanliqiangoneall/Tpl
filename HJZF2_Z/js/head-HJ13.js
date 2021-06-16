require(['jquery', 'swiper'], function ($, Swiper) {
	$(window).load(function () {
		$('.limei_ryk img').each(function () {
			var self = $(this);
			var img = self.attr('data-src');
			var alt = self.attr('data-alt');
			self.attr('src', img);
			self.attr('alt', alt);
			self.removeClass("loading");
		});
	});

	// 孙润舒 三诺 要求
	if (sungou) {
		addFixed();
		function addFixed() {
			var t = $(window).scrollTop();
			if (t > 100) {
				$('.head_hj13_menu_fixed').addClass('on');
			} else {
				$('.head_hj13_menu_fixed').removeClass('on');
			}
		}
		$(window).scroll(function () {
			addFixed();
		});
		$('.nav > ul > li').hover(function () {
			$(this).find('.sannuo_box').stop(true, false).slideToggle();
			return false;
		});
		
	};
	// 孙润舒 三诺 要求

	$(function () {
		$('.nav_li.pro ,.limei_ryk').mouseenter(function () {
			$('.head_hj13_nav .menu').addClass('on');
		}).mouseleave(function () {
			$('.head_hj13_nav .menu').removeClass('on');
		});
	});
	/*移动端导航栏*/
	$(".dt-mobile-menu-icon").click(function () {
		$(".mobile-sticky-header-overlay").toggleClass("active");
	});
	/* 手机侧边导航层点击阻止冒泡 */
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
	/* 阴影层点击 */
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


	/* pc站 */
	$('.hj13_search span').click(function () {
		$(this).next('.hj13_search_form').fadeToggle(300);
	});

	function urlDate(data_url) {
		var flag = isLocal(data_url);
		if (!flag) {
			var onurl = window.location.href;
			var rega = /\.[\w]+\/(\w+)/;
			var arr, arra;
			arr = rega.exec(onurl);
			arra = rega.exec(data_url);
			if (!arr && !arra) {
				return true;
			}
			return arr && arra ? arr[1] === arra[1] ? true : false : false;
		}
		return false;
	};

	function isLocal() {
		var reg = /https?\:\/\/[0-9\.]+/;
		var url = window.location.href;
		if (reg.exec(url)) {
			return true;
		}
		return false;
	};

	$(function () {
		var onurl = window.location.href;
		$('.nav_li').each(function (i) {
			var that = $(this);
			var xiala = that.find('.nav_drop');
			if (xiala.length >= 1) {
				that.find('i').removeClass('hidden');
			};

			/* 导航添加高亮 */
			var data_url = that.attr('data-url');
			var flag = urlDate(data_url);
			if (flag) {
				that.addClass('active');
			}
			that.find('a').each(function () {
				var url = $(this).attr('data-url');
			})

		});
	});

	/* pc */
	$(document).click(function () {
		$('.head_hj13_contact_nav').next().slideUp();
	}).on('click', '.head_hj13_contact_nav', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next().slideToggle();
		return false;
	});


	$('.nav>ul>li').hover(function () {
		$('.head_hj13_fix_empty').addClass('active');
	}, function () {
		$('.head_hj13_fix_empty').removeClass('active');
	});

	function addActive() {
		var top = $(window).scrollTop();
		if (top > 150) {
			$('.head_hj13_fix.open').addClass('active');
		} else {
			$('.head_hj13_fix.open').removeClass('active');
		}
	};
	addActive();
	$(window).scroll(function () {
		addActive();
	});

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

});