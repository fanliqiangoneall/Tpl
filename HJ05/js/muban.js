    /*banner*/
    var swiper = new Swiper('.hj05-banner',{
        direction : 'vertical',
        followFinger : false,
        speed:800,
        mousewheel: false,
        pagination : {
            el:'.hj05-banner .hj-banner-pagination',
        },
        effect : 'cube',
        autoplay:true,
        loop:true,
        navigation: {
            nextEl: '.hj05-banner .hj-banner-next',
            prevEl: '.hj05-banner .hj-banner-prev',
        },
        on:{
            init:function(swiper){
                slide=this.slides.eq(0);
                slide.addClass('ani-slide');
            },
            transitionStart: function(){
                for(i=0;i<this.slides.length;i++){
                    slide=this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function(){
                slide=this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');

            },
        }
    });

    /*banner*/
/*index product*/
var swiper_pro = new Swiper('.hj05-product', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loop: true,
    navigation: {
        nextEl: '.hj05-pro-next',
        prevEl: '.hj05-pro-prev',
    },
});
/*index product*/
/*hj02-other1*/
    var swiper2 = new Swiper('.hj05-banner2',{
        followFinger : false,
        speed:800,
        mousewheel: false,
       /* autoplay:true,*/
        loop:false,
        navigation: {
            nextEl: '.hj05-banner2 .hj-banner-next',
            prevEl: '.hj05-banner2 .hj-banner-prev',
        },
        on:{
            init:function(swiper2){
                slide=this.slides.eq(0);
                slide.addClass('ani-slide');
            },
            transitionStart: function(){
                for(i=0;i<this.slides.length;i++){
                    slide=this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function(){
                slide=this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
            },
        }
    });
    if(swiper2.slides){
        if(swiper2.slides.length ==1){
            $(".hj05-banner2 .hj-banner-next").hide();
            $(".hj05-banner2 .hj-banner-prev").hide();
        }
    }


/*hj02-other1*/
    /*index-news*/
    var swiper_news = new Swiper('.HJ05-news', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: '.HJ05-news .swiper-button-next',
            prevEl: '.HJ05-news .swiper-button-prev',
        },
    });
    /*index-news*/
    /*index-case*/
    var swiper_case = new Swiper('.HJ05-case', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: '.HJ05-case .swiper-button-next',
            prevEl: '.HJ05-case .swiper-button-prev',
        },
    });
    /*index-case*/
/*index_hj02-aboutus*/
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
    var mp4=$(this).parent().attr("href");
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
    $('#payment img').on('click', function(){
        var mp4 = $(this).parent.attr("href");
        if(mp4){
            if(mp4.indexOf('.mp4')>0){
                layer.open({
                    type: 2,
                    title: ['video', 'font-size:18px;'],
                    area: ['80%', '80%'],
                    shadeClose: true, //点击遮罩关闭
                    maxmin: true,
                    content: data
                });
                return false;
            }else{
                $('#payment a').has('img').not(".pdf").lightBox();
            }
        }
    });
    $('#adv_video1').on('click', function(){
        layer.open({
            type: 2,
            title: ['video', 'font-size:18px;'],
            area: ['80%', '80%'],
            shadeClose: true,
            maxmin: true,
            content: $('#adv_video1').attr("data-video")
        });
    });