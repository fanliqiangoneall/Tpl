require(['jquery'],function($){
	$(window).resize(function(){
	var height=$(".story_container").eq(0).height();
$(".left_story").eq(0).height(height);
	})
$(function() {
var height=$(".story_container").eq(0).height();
$(".left_story").eq(0).height(height);
        //菜单框架自动获取高度

        var tabTitle = ".xuanxiang1 .xuanxiang1-1";

        $(tabTitle + ":first").addClass("xuanxiang1-1xuanzhong");



        $(".xuanxiang1-1").mouseenter(function() {



            $(this).siblings().removeClass("xuanxiang1-1xuanzhong").end().addClass("xuanxiang1-1xuanzhong");

            var i = $(this).index();

            $('.xuanxiang2zong').stop(true, true).eq(i).siblings().fadeOut(1500);

            $('.xuanxiang2zong').stop(true, true).eq(i).fadeIn(1500);



        });


var size=$(".xuanzhuan1-1 .dian").size();

var i=-1;

        $(".dian").hover(function() {

            var i = $(this).index();

		$(this).addClass("dianxuanzhong").siblings().removeClass("dianxuanzhong");
		   $('.xuanzhuan2-1').stop(true, true).eq(i).css({"visibility": "visible"}).animate({opacity: 1.0},800).siblings().css({"visibility": "hidden"}).animate({opacity: 0.2},800);
			$('.xuanzhuan1-2-1').stop(true, true).eq(i).css({"visibility": "visible"}).animate({opacity: 1.0},1200).siblings().css({"visibility": "hidden"}).animate({opacity: 0.2},800);

        });//旋转选项卡


			/*自动轮播*/
	var t=setInterval(function(){
		i++;

		move()
	},3000)
		/*对banner定时器的操作*/
	$(".dian").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},3000)
	})

	function move(){
			if(i==size){

		$(".dian").eq(0).addClass("dianxuanzhong").siblings().removeClass("dianxuanzhong");
			i=0;
		}
	$(".dian").eq(i).addClass("dianxuanzhong").siblings().removeClass("dianxuanzhong");
	$('.xuanzhuan2-1').stop(true, true).eq(i).css({"visibility": "visible"}).animate({opacity: 1.0},800).siblings().css({"visibility": "hidden"}).animate({opacity: 0.2},800);
			$('.xuanzhuan1-2-1').stop(true, true).eq(i).css({"visibility": "visible"}).animate({opacity: 1.0},1200).siblings().css({"visibility": "hidden"}).animate({opacity: 0.2},800);
}




        $(".tubiao1").mouseenter(function() {

            var i = $(this).index();

            $('.beijing1').stop(true, true).eq(i).css({

                "z-index": "10"

            }).animate({

                opacity: 1.0

            },

            800).siblings().css({

                "z-index": "1"

            }).animate({

                opacity: 0.5

            },

            800);

        });



       


        
    });
	
})