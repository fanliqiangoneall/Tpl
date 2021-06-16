require(['jquery'],function($){
    $(document).ready(function(){
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
                    if(ul){
                        ul.append(li);
                    }
                }
            }else{
                return false;
            }
        };
        language();
        $(".head-13__search").hover(function(){
            $(".head-13__searchWrap").addClass("fadeInRight_search");
        },function(){
            $(".head-13__searchWrap").removeClass("fadeInRight_search");
        });
        $(".head-13__mail").hover(function(){
            $(".head-13__mailWrap").addClass("fadeInRight_search");
        },function(){
            $(".head-13__mailWrap").removeClass("fadeInRight_search");
        });
        $(".head-13__menu .head-13__navbar>li").hover(function(){
            $(this).find("ul").stop().slideDown(200).parent().siblings("li").find("ul").stop().slideUp();
        },function(){
            $(this).find("ul").stop().slideUp(200).parent().siblings("li").find("ul").stop();
        });
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>30){
            $(".head-13").stop().animate({'top':'0'})
        }else{
            $(".head-13").stop().animate({'top':'23px'})
        }
    })

});


