$(document).ready(function () {
    /*search*/
    $(".head_seach").on('click',function(){
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
        $('#HJ02-banner1').slick({infinite: true, slidesToShow: 1, slidesToScroll: 1, lazyLoad: 'ondemand',cssEase:'ease',autoplay:'true',dots:true});
    /*banner*/
})
/*index product*/
var swiper_pro = new Swiper('.index_pro_slickbox', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup:3,
    loop: true,
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
    if (theForm.keywords.value == "検索する") {
        alert('キーワードを入力してください');
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
            alert("キーワードを入力してください!")
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
            console.log(href);+console.log(url)

            if(jQuery(this).parent("li").parent().parent().hasClass("nav_more")){
                jQuery(this).parent().parent().parent().addClass('menu_on2')
                return false;
            }else{
                jQuery(this).parent("li").addClass("menu_on");
                return false;
            }


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
$('#mianze').on('click', function(){
    layer.open({
        type: 2,
        title: ['免责声明', 'font-size:18px;'],
        area: ['1000px', '770px'],
        shadeClose: true, //点击遮罩关闭

        content: 'https://www.one-all.com/mianze.html'
    });
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
