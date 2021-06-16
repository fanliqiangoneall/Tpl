//头部添加class menu_on
jQuery(function () {
    var color = "#333";
    var url = window.location.href;
    url = url.toLowerCase();
    jQuery(".navContainer ul li a").each(function () {
        var href = jQuery(this).attr("href");
        //
        url=url.toLowerCase();
        href = href.toLowerCase();
        //当前url
        //console.log("href: "+href);
        //console.log("url："+url);
        if(url != $(".navContent li").eq(0).children("a").attr("href")){
            $(".bottomContainerContent").css("overflow","hidden");
        }else{
            $(".bottomContainerContent").css("overflow","visible");
        }
        if (href == url) {
			//console.log("选中",url);
			jQuery(this).parent("li").siblings().removeClass("menu_on");
            jQuery(this).parent("li").addClass("menu_on");
            return false;
        }else{

            if (url.indexOf("aboutus") != -1) {
                if (href.indexOf("othercate") != -1) {
                    console.log("1");
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
            if (url.indexOf("othercate") != -1) {
                if (href.indexOf("othercate") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
            if (url.indexOf("jobs") != -1) {
                if (href.indexOf("othercate") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
            if (url.indexOf("job") != -1) {
                if (href.indexOf("othercate") != -1) {
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
            if (url.indexOf("case_category") != -1) {
                if (href.indexOf("case") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
            if (url.indexOf("case_detail") != -1) {
                if (href.indexOf("case") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
            if (url.indexOf("product_category") != -1) {
                if (href.indexOf("product") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
            if (url.indexOf("product") != -1) {
                if (href.indexOf("product") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }
        }
    });
});

if($(".headerContainer").length!=0){
    var navtop=$(".headerContainer").offset().top;
    $(document).scroll(function(){
        //获取滚动条滚动的高度
        var scroltop=$(document).scrollTop();
        if (scroltop > navtop){
            $(".headerContainer").css({
                "position":"fixed",
                "left":"0px",
                "top":"0px",
                "width":"100%",
                "z-index":"9",

            });

        }else {
            $(".headerContainer").css({
                "position":"relative",
                "left":"0",

            });

        }
    })
}


//搜索框
$('#keywords').keydown(function() {
    var ordernubmer=$("#keywords").val();
    if (event.keyCode == 13) {
        if(ordernubmer.length<=0){
            alert("请输入关键词");
            return false ;
        }
    }
});

function CheckForm(theForm)
{
    if (theForm.keywords.value=="搜索")
    {
        alert('请输入关键词');
        theForm.keywords.focus();
        return false;
    }

    return true;
}
function OnFocusFun(element,elementvalue)
{
    if(element.value==elementvalue)
    {
        element.value="";
        element.style.color="#999";
    }
}
//离开输入框时触发事件
function OnBlurFun(element,elementvalue)
{
    if(element.value==""||element.value.replace(/\s/g,"")=="")
    {
        element.value=elementvalue;
        element.style.color="#999";
    }
}
jQuery(document).ready(function(){
    jQuery(".searchIcon").click(function(){
        var searchHeight = $(".headerSearchContent").height();
        if(searchHeight ===0){
            $(".headerSearchContent").css({
                height: "40px",
                border: "1px solid #666"
            });
        }else{
            $(".headerSearchContent").css({
                height :"0px",
                border:"none"
            });
        }
    })
});
//视频
$(".videoOpenContainer").hover(function(){
    $(".videoContainer").css("filter","grayscale(100%)")
});
$(".videoContent").mouseleave(function(){
    $(".videoContainer").css("filter","grayscale(0)")
});
$(".videoContainer").hover(function(){
    $(".videoContainer").css("filter","grayscale(100%)")
});

//other03
$(document).ready(function(){
    var ul = $(".other03mainContent");
    var liLength = $(".other03mainContent li").length;
    var liWidth = $(".other03mainList").width();
    ul.css("width",liLength*liWidth);
    var iNumber = 0;
    var speed = 500;
    function move (){
        console.log(iNumber);
        if(iNumber> liLength-1){
            return iNumber = liLength-1;
        }
        if( iNumber < 0){
            $(".other03Next").addClass("disable");
            return iNumber = 0;
        }
        ul.animate({
            left : -iNumber*liWidth
        },speed);
    }
    $(".other03Pre").click(function(){
        $(".other03Next").removeClass("disable");
        iNumber ++;
        if(iNumber >= liLength-1){
            $(".other03Pre").addClass("disable");
        }
        move();
    });
    $(".other03Next").click(function(){
        $(".other03Pre").removeClass("disable");
        iNumber --;
        if( iNumber <= 0){
            $(".other03Next").addClass("disable");
        }
        move();
    })
});
//免责声明
$('#mianze').on('click', function(){
    layer.open({
        type: 2,
        title: ['免责声明', 'font-size:18px;'],
        area: ['1000px', '770px'],
        shadeClose: true, //点击遮罩关闭

        content: 'https://www.one-all.com/mianze.html'
    });
});
//sidebar
function goTop() {
    jQuery('html,body').animate({'scrollTop': 0}, 600)
}
$(function () {
    var nav = $(".side");
    var win = $(window);
    var sc = $(document);
    win.scroll(function () {
        if (sc.scrollTop() >= 550) {
            nav.fadeIn()
        } else {
            nav.fadeOut()
        }
    })
});

var swiper_other04 = new Swiper('.swiper-container.other04-other', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: '.other04-other .swiper-button-next',
            prevEl: '.other04-other .swiper-button-prev',
        },

    });


