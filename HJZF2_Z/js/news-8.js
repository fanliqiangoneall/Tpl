require(['jquery','lazyload'],function($,lazyload){
	(function($) {
            $.fn.newstitle = function(b) {
                var c, item, httpAdress;
                b = $.extend({
                    Speed: 200,
                    autostart: 1,
                    autohide: 1
                }, b);
                c = $(this);
                item = c.children("ul").parent("li");
                function _item() {
                    var a = $(this);
                    if(a.hasClass("inactive")){
                        a.removeClass("inactive").addClass("active").children("ul.HJZF2_Z__news-8__list").slideDown(b.Speed);
						$(this).siblings().removeClass("active").addClass("inactive").children("ul.HJZF2_Z__news-8__list").slideUp(b.Speed);
                    }else if($(this).siblings().hasClass("active")){
						a.removeClass("active").addClass("inactive").children("ul.HJZF2_Z__news-8__list").slideUp(b.Speed);
					}else{
                    }
                };
                item.unbind("click").click(_item);
            }
        })($);

        $(document).ready(function (){
            $(".newstitle ul li").newstitle();

            $('.HJZF2_Z__news-8__img a.video').on('click', function (e) {
                e.preventDefault();
                layer.open({
                    type: 2,
                    title: false,
                    area: ['80%', '70%'],
                    shade: 0.8,
                    closeBtn: 1,
                    shadeClose: true,
                    content: hjzf_news_8_video
                });
                return false;
            });
            
        });
        $("img.lazy").lazyload({effect: "fadeIn"});
        
        
});

