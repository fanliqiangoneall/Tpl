$(document).ready(function () {
    /*banner*/
    var banner_swiper = new Swiper('.hj03-banner', {
        loop: true,
        pagination: {
            el: '.hj03-banner1-pagination',
            clickable: true,
        },
        autoplay:true,
        navigation: {
            nextEl: '.hj03-banner1-next',
            prevEl: '.hj03-banner1-prev',
        },
    });
    /*banner*/
    $('.count_shuzi').countUp();//banner 数字滚动
})
/*index product*/
var swiper_indexpro = new Swiper('.index_prolist_wai', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    pagination: {
        el: '.index-product-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.index-product-next',
        prevEl: '.index-product-prev',
    },
});
var swiper_indexpro = new Swiper('.index_prolist_wai2', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.index-product-pagination2',
        clickable: true,
    },

});
/*index product*/
/*index_hj03-aboutus*/
if($("#ab_picbox ul li").length>1){
    var isround = "";
    var scrollmove = "";
    var masktime = 10;
    var focus_cur = 1;
    var p = document.getElementById("pic").getElementsByTagName("li");
    var h = document.getElementById("tip").getElementsByTagName("li");
    isround = setTimeout("change(2)",5000);
    $('#tip ul li:first-child').addClass('current');

    function change(id){

        clearTimeout(isround);
        clearInterval(scrollmove);
        for (var i = 1; i <= h.length; i++) {
            if(i == id){
                document.getElementById("smallimg_"+i).className="current";
            }else{
                document.getElementById("smallimg_"+i).className="";
            }
        }
        if ((next = id + 1) > h.length){
            next = 1;
        }
        isround = setTimeout("change("+next+")",4000);
        scrollmove = setInterval("scrollMove("+id+")",masktime);
        focus_cur = id;
    }
    function scrollMove(m){
        var srl = document.getElementById("pic").scrollLeft;
        var dsrl = Math.floor((p[0].clientWidth*(m-1)-srl)/5);
        var xsrl = Math.ceil((p[0].clientWidth*(m-1)-srl)/5);
        if(srl > p[0].clientWidth*(m-1)){
            document.getElementById("pic").scrollLeft = srl + dsrl;
        }else if(srl < p[0].clientWidth*(m-1)){
            document.getElementById("pic").scrollLeft = srl + xsrl;
        }else{
            clearInterval(scrollmove);
        }
    }
}
if($("#tip ul li").length==1){
    $("#tip").hide();
}
/*index_hj03-aboutus*/

/*index_hj03-aboutus2*/
    if($(".aboutus2-swiper").length>0){
        var swiper_indexabus2 = new Swiper('.aboutus2-swiper', {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.aboutus2-next',
                prevEl: '.aboutus2-prev',
            },
        });
    };
	$("a[data-video]").click(function(){

		layer.open({
			type: 2,
			title: ['video', 'font-size:18px;'],
			area: ['80%', '80%'],
			shadeClose: true,
			maxmin: true,
			content: $(this).attr("data-video")
		});
	});
/*index_hj03-aboutus2*/

/*hj03-other1*/
var swiper_other1= new Swiper('.hj03-other1', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.hj03-other1-next',
        prevEl: '.hj03-other1-prev',
    },
});
/*hj03-other1*/
/*HJ03-cusomer*/
var swiper_customer = new Swiper('.hj03-customer', {
    navigation: {
        nextEl: '.hj03-customer-next',
        prevEl: '.hj03-customer-prev',
    },
    loop: true,
});
/*HJ03-cusomer*/

/*动画监听*/
if ($("#index_product_title_left1").length > 0) {
    var waypoint_indexprotitle = new Waypoint({
        element: document.getElementById('index_product_title_left1'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInLeft')
            } else {
                $(this.element).removeClass('fadeInLeft')
            }
        },
        offset: '90%'
    })
}
if ($("#hj02_index_videoBox_left").length > 0) {
    var case_right = new Waypoint({
        element: document.getElementById('hj02_index_videoBox_left'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInLeft')
            } else {
                $(this.element).removeClass('fadeInLeft')
            }
        },
        offset: '80%'
    })
}
if ($("#hj02_index_videoBox_right").length > 0) {
    var case_right = new Waypoint({
        element: document.getElementById('hj02_index_videoBox_right'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '80%'
    })
}

if ($("#news_item").length > 0) {
    var case_right = new Waypoint({
        element: document.getElementById('news_item'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInLeft')
            } else {
                $(this.element).removeClass('fadeInLeft')
            }
        },
        offset: '80%'
    })
}
if ($("#news_item_right_box").length > 0) {
    var waypoint_indexprotitle = new Waypoint({
        element: document.getElementById('news_item_right_box'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '80%'
    })
}
/*search form*/
function CheckForm(theForm) {
    if (theForm.keywords.value == "产品搜索") {
        alert('请输入一个关键词');
        theForm.keywords.focus();
        return false
    }
    return true
}
function OnFocusFun(element, elementvalue) {
    if (element.value == elementvalue) {
        element.value = "";
        element.style.color = "#292929"
    }
}
function OnBlurFun(element, elementvalue) {
    if (element.value == "" || element.value.replace(/\s/g, "") == "") {
        element.value = elementvalue;
        element.style.color = "#292929"
    }
}
$('#keyword').keydown(function () {
    var keyword = $("#keyword").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            alert("请输入一个关键词！")
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword
        }
    }
});
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
jQuery(function () {
    $(".hj02-pro-menu").parent().addClass("nav_more");
    var color = "#333";
    var url = window.location.href;
    url = url.toLowerCase();
    jQuery(".hj-navbar ul li a").each(function () {
        var href = jQuery(this).attr("href");
        href = href.toLowerCase();
		//当前url
        if (href == url) {
            jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");
			return false;
        }else{
            /*if (url.indexOf("othercate") != -1) {
                if (href.indexOf("othercate") != -1) {
                    jQuery(this).parent("li").addClass("menu_on")
                }
            }*/
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
        }
    });
})
var path = "";
$(function () {
    var nav = $(".side");
    var win = $(window);
    var sc = $(document);
    $(".HJ02-banner1-box_other ul div").show().addClass("fadeInDown");
    $(".page_Logo").addClass("fadeInRight");

    win.scroll(function () {
        if (sc.scrollTop() >= 550) {
            nav.fadeIn()
        } else {
            nav.fadeOut()
        }
    })
});
function goTop() {
    jQuery('html,body').animate({'scrollTop': 0}, 600)
}
jQuery(function () {
    jQuery('.weixing-show').hide();
    jQuery(".weixing-container").bind('mouseenter', function () {
        jQuery('.weixing-show').show()
    })
    jQuery(".weixing-container").bind('mouseleave', function () {
        jQuery('.weixing-show').hide()
    })
});
$('#mianze').on('click', function(){
    layer.open({
        type: 2,
        title: ['免责声明', 'font-size:18px;'],
        area: ['1000px', '770px'],
        shadeClose: true, //点击遮罩关闭

        content: 'https://www.one-all.com/mianze.html'
    });
});

//获取nav距离顶部的距离
if($(".hj03_header").length>0){
    var navtop=$(".hj03_header").offset().top;
    $(document).scroll(function(){
        //获取滚动条滚动的高度
        var scroltop=$(document).scrollTop();
        if (scroltop > navtop){
            $(".hj03_header").css({
                "position":"fixed",
                "left":"0px",
                "top":"-90px",
                "width":"100%",
                "z-index":"99"
            })

        }else {
            $(".hj03_header").css({
                "position":"fixed",
                "left":"0",
                "top":"0",
                "width":"100%"
            })
        }
    })
}
