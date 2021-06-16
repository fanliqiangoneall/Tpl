require(['jquery'],function($){
    $(".menu_product").parent().css("position",'inherit');
    $(".menu_product").parent().hover(function(){
        $(".HJZF2__header-14__dropMenu").fadeIn();
    },function(){
        $(".HJZF2__header-14__dropMenu").fadeOut();
    });
    $(".HJZF2__header-14__dropMenu").hover(function(){
        $(this).show()
    },function(){
        $(this).hide()
    });
    if($(".HJZF2__header-14").length!=0){
        var navtop=$(".HJZF2__header-14").offset().top;
        $(document).scroll(function(){
            //获取滚动条滚动的高度
            var scroltop=$(document).scrollTop();
            if (scroltop > navtop){
                $(".HJZF2__header-14").css({
                    "position":"fixed",
                    "left":"0px",
                    "top":"0px",
                    "z-index":"96"
                }).addClass("active");

            }else {
                $(".HJZF2__header-14").css({
                    "position":"relative",
                    "left":"0",
                    "top":"0"
                }).removeClass("active");
            }
        })
    };
    $(".head-14__Language>ul>li").click(function(){
        $(".head-14__Language ul li ul").slideToggle();
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
                    $(".HJZF2__header-14 .head-14__Language>ul>li p").text(country_name);
                    $(".HJZF2__header-14 .head-14__Language>ul>li p").attr("data-count",country_name);
                }
            }


            if($(".HJZF2__header-14 .head-14__Language>ul>li ul li.count_hide").length>1){
                $(".HJZF2__header-14 .head-14__Language>ul>li ul li.count_hide:last").siblings("li").removeClass("count_hide");

                var current_href = $(".HJZF2__header-14 .head-14__Language>ul>li ul li.count_hide:last").find("a").attr("href");
                /*console.log(current_href);*/
                var replaced = current_href.split(".")[0];
                /*console.log(replaced);*/
                if(current_href.inde.indexOf('https://www')!=-1){
                    var new_cout = current_href.replace(replaced,"https://www") ;
                }else{
                    var new_cout = current_href.replace(replaced,"http://www") ;
                }

                /* console.log("+++++++"+new_cout);*/
                $(".HJZF2__header-14 .head-14__Language>ul>li ul li:first-child").find("a").attr("href",new_cout);
            }
        }else{
            return false;
        }

    };
    language();

});

