require(['swiper','jquery'],function(Swiper,$){
    $(function(){
        var other3flag = -1;
        var win_width = $(window).width();
        var win_height = $(window).height();
        var url = window.location.href;
        url = url.toLowerCase();
        $(".other-3").width(win_width);
        $(".other-3").height(win_height);
        var other3flag = sessionStorage.getItem("other3flag");
        var ref = '';
        if (document.referrer.length > 0) {
            ref = document.referrer;
        }
        try {
            if (ref.length == 0 && opener.location.href.length > 0) {
                ref = opener.location.href;
            }
        } catch (e) {}
        ref.toLowerCase();
        if(ref !='' &&  ref !=url){
            $(".other-3").hide();
        }else{
            if(other3flag != 1){
                $(".other-3__pic").click(function(e){
                    sessionStorage.setItem("other3flag", "1");
                    sessionStorage.setItem("toNew", "1");
                    e.preventDefault();
                    var href = $(this).attr("href");
                    href = href.toLowerCase();
                    console.log("url++++"+url);
                    console.log("href++++"+href);
                    console.log(url == href);
                    if(url === href){
                        $(".other-3").hide();
                        other3flag  = 1;
                    }else{
                         window.open(href,'_blank');
                    }
                })
            }else{
                $(".other-3").hide();
            }
        }

    })
})






