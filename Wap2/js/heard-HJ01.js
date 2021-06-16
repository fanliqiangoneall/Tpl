require(['jquery'], function ($) {
    $(".wap2_header-HJ01__menu").click(function () {
        $(".wap2_header-HJ01_zhezhao").toggleClass("active");
    });
//阴影层点击
    $(".wap2_header-HJ01_zhezhao").click(function (event) {
        $(".wap2_header-HJ01_zhezhao").removeClass("active");
        event.stopPropagation();
    });
    //手机侧边导航层点击阻止冒泡
    $(".wap2_header-HJ01_sideMenu").click(function (event) {
        event.stopPropagation();
    });
    $(".wap2_header-HJ01_sideMenu_close").click(function () {
        $(".wap2_header-HJ01_zhezhao").toggleClass("active");
    });
    if (typeof icon_str != "undefined") {
        var arry = [];
        arry = icon_str.split('<br>');
        for (i = 0; i < arry.length; i++) {
            var icon_class = arry[i];
        }
        $(".hj_navbar_nav>li i").each(function (index) {
            $(this).addClass(arry[index]);
        });
        $(".hj_navbar_nav--mobile>li>a>i").each(function (index) {
            $(this).addClass(arry[index]);
        });
    };

    $(".next-level-button").click(function () {
        if ($(this).is(".active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
    });
$(document).ready(function () {
    $(".language").bind("click", function () {
        $(".language_select").toggle();
    });
    function language(){
		var lan_str=$("#lan_str").html();
        if(typeof lan_str!="undefined"&&lan_str!=""){
            var ul = document.getElementById("lang_ul");
            var _url = window.location.href;
            _url = _url.toLowerCase();

            var arry = [];
            var arry_two = [];
            arry = lan_str.split('<br>');
			console.log("arry",lan_str);
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
                ul.append(li);
            }
        }else{
            return false;
        }

    };
    language();
    $(".head-6__Language p").click(function(){
        $("#lang_ul").slideToggle();
    })

});	
});