$(document).ready(function () {
    /*search*/
    $(".head_seach").on('click',function(){
        if($(this).is(".head_seachshow")){
            $(this).removeClass("head_seachshow");
        }else{
            $(this).addClass("head_seachshow");
        }
        if($("#ins-header-search").width()==0){
            $("#ins-header-search").css({"width":'250px',"opacity":'1',"marginRight":'20px'})
        }else{
            $("#ins-header-search").css({"width":'0',"opacity":'0',"marginRight":'0'})
        }
        if ($(".head_search_icon").css("opacity") == "1") {
            $(".head_search_icon").css("opacity", "0");

        } else {
            $(".head_search_icon").css("opacity", "1")
        }
        if ($(".head_search_close").css("opacity") == "0") {
            $(".head_search_close").css("opacity", "1");

        } else {
            $(".head_search_close").css("opacity", "0")
        }
    })
    /*search*/
    /*banner*/
    if($(".HJ02-banner1-box_other ul>div").length>3){
        $('#HJ02-banner1').slick({infinite: true, slidesToShow: 1, slidesToScroll: 1, lazyLoad: 'ondemand',cssEase:'ease',autoplay:'true'});
    }else{
        $('#HJ02-banner1').slick({infinite: true, slidesToShow: 1, slidesToScroll: 1, lazyLoad: 'ondemand',cssEase:'ease',autoplay:'true',dots:true});
    }
    if($(".slick-dots li").length<2){
        $(".slick-dots").hide();
    }

    /*banner*/
})
/*index product*/
var swiper_pro = new Swiper('.index_pro_slickbox', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loop:(function(){
		var loops=$(".index_pro_slickbox").eq(0).attr("loop-off");
		//console.log($(".index_pro_slickbox").eq(0).parent().html());
		//console.log(loops);
		if(loops=="loop-off"){
			return false;
		}else{
			return true;
		}
		})(),
    autoplay:true,
    pagination: {
        el: '.hj02-pro-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.hj02-pro-next',
        prevEl: '.hj02-pro-prev',
    },
});


/*index product*/
/*index_hj02-aboutus*/
var swiper_abus = new Swiper('.hj02_abus_right_honor_box', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    autoplay:true,
    pagination: {
        el: '.hj02_abus_pagination',
        clickable: true,
    },

});

if($("#ab_picbox").length>0){
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
/*index_hj02-aboutus*/

/*company left picture lazyload*/
$('.hj02_abus_left_content_left img').imagesLoaded(function () {
});
/*company left picture lazyload*/

/*hj02-case*/
var swiper = new Swiper('#index_caselist', {
    slidesPerView: 2,
    spaceBetween: 24,
    slidesPerGroup:2,
    loop:true,
    navigation: {
        nextEl: '.hj02-case-next',
        prevEl: '.hj02-case-prev',
    },
    pagination: {
        el: '.hj02-case-pagination',
        clickable: true,
    },
});
/*hj02-case*/

/*hj02-other1*/
$('.count_shuzi').countUp();
/*hj02-other1*/
/*HJ02-CUSOMER*/
var swiper_customer = new Swiper('.hj02-customer', {
    navigation: {
        nextEl: '.hj02-customer-next',
        prevEl: '.hj02-customer-prev',
    },
    loop: true,
});
/*HJ02-cusomer*/
/*index advantage*/
var swiper_adv = new Swiper('.advantages_list', {
    pagination: {
        el: '.hj02-adv-pagination',
        type: 'fraction',
    },
    loop:true,
    navigation: {
        nextEl: '.hj02-adv-next',
        prevEl: '.hj02-adv-prev',
    },
});




if ($(".advantages2_list .swiper-slide").length<4) {
    $(".advantages2_list .swiper-pagination").hide();
    $(".advantages2_list .swiper-button-prev").hide();
    $(".advantages2_list .swiper-button-next").hide();
}
/*index advantage*/



/*if ($("#hj01_advlist").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('hj01_advlist'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        },
        offset: '80%'
    })
}*/
/*if ($("#hj01_adv_right_title").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('hj01_adv_right_title'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '80%'
    })
}*/
/*if ($("#ab_text").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('ab_text'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        }, offset: '80%'
    })
}*/
/*if ($("#ab_title").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('ab_title'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        }, offset: '85%'
    })
}*/
/*if ($("#advantage3_title").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('advantage3_title'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        }, offset: '85%'
    })
}*/

/*动画监听*/


if ($("#HJ02-aboutus2-content").length > 0) {
 var waypoint_advleft = new Waypoint({
 element: document.getElementById('HJ02-aboutus2-content'),
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

if ($("#index_product_title_right1").length > 0) {
    var waypoint_indexprotitle = new Waypoint({
        element: document.getElementById('index_product_title_right1'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '90%'
    })
}

if ($("#hj02_advantage_right_box").length > 0) {
    var case_right = new Waypoint({
        element: document.getElementById('hj02_advantage_right_box'),
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
    if (theForm.keywords.value == "Search") {
        alert('Please enter the keywords');
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
            alert("Please enter the keywords!")
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword
        }
    }
});
jQuery(function () {
    $(".hj02-pro-menu").parent().addClass("nav_more");
    var color = "#333";
    var url = window.location.href;

    url = url.toLowerCase();
    jQuery(".HJ02_head_menu ul li a").each(function () {
        var href = jQuery(this).attr("href");
        href = href.toLowerCase();
		//当前url

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
$("#payment img").click(function(){
    console.log($(this).parent().attr("href"));
    var mp4=$(this).parent().attr('href');
    if(mp4){
        if(mp4.indexOf(".mp4")>0){
            openvideo(mp4);
            return false;
        }else{
            $('#payment a').has('img').not(".pdf").lightBox();
        }
    }
});
function openvideo(url){
//iframe窗
    layer.open({
        type: 2,
        title: 'Video',
        shadeClose: true,
        shade: 0.8,
        area: ['800px', '600px'],
        maxmin: true,
        content: url //iframe的url
    });
}

$('#hj02_video').on('click', function(){
    var data=$('#hj02_video').attr("data-video");
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true, //点击遮罩关闭
        maxmin: true,
        //content: '__TMPL__ZERO/video/a/demo.htm'
        content: $('#hj02_video').attr("data-video")
    });
});
$('#adv_video1').on('click', function(){
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true, //点击遮罩关闭
        maxmin: true,
        content: $('#adv_video1').attr("data-video")
    });
});