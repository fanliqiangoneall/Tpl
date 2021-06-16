require(['jquery'],function($){

   $(function(){
       $(".hj02-pro-menu").parent().addClass("nav-more");
       var color = "#333";
       var url = window.location.href;

       url = url.toLowerCase();
       jQuery(".head_menu_navbar ul li a").each(function () {
           var href = jQuery(this).attr("href");
           href = href.toLowerCase();
           //��ǰurl

           if (href == url) {
               jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");

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
               if (url.indexOf("job") != -1) {
                   if (href.indexOf("job") != -1) {
                       jQuery(this).parent("li").addClass("menu_on")
                   }
               }
               if (url.indexOf("download_category") != -1) {
                   if (href.indexOf("download") != -1) {
                       jQuery(this).parent("li").addClass("menu_on")
                   }
               }
               if (url.indexOf("download_detail") != -1) {
                   if (href.indexOf("download") != -1) {
                       jQuery(this).parent("li").addClass("menu_on")
                   }
               }
           }
       });
   });









    if($(".head_menu").length!=0){
        var navtop=$(".head_menu").offset().top;
        $(document).scroll(function(){
            //获取滚动条滚动的高度
            var scroltop=$(document).scrollTop();
            if (scroltop > navtop){
                $(".head_menu2").css({
                    "position":"fixed",
                    "left":"0px",
                    "top":"0px",
                    "width":"100%",
                    "z-index":"999",
                    "opacity":"1",
                    "visibility":"visible"
                });

            }else {
                $(".head_menu2").css({
                    "position":"absolute",
                    "opacity":"0",
                    "left":"0",
                    "top":"-100px",
                    "width":"100%",
                    "visibility":"hidden"

                });

            }
        })
    }

})