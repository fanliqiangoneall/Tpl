/*search form*/
function CheckForm(theForm) {
    if (theForm.keywords.value == "Product Search") {
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false;
    } else if (theForm.keywords.value == "产品搜索") {
        alert('请输入关键字');
        theForm.keywords.focus();
        return false
    } else if (theForm.keywords.value == "keyword") {
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false;
    } else if(theForm.keywords.value == ''){
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false;
    }

}
function OnFocusFun(element, elementvalue) {
    if (element.value == elementvalue) {
        element.value = "";
        element.style.color = "#292929"
    }
};
function OnBlurFun(element, elementvalue) {
    if (element.value == "" || element.value.replace(/\s/g, "") == "") {
        element.value = elementvalue;
        element.style.color = "#292929"
    }
};
function OnFocusFun_m(element, elementvalue) {
    if (element.value == elementvalue) {
        element.value = "";
        element.style.color = "#fff"
    }
};
function OnBlurFun_m(element, elementvalue) {
    if (element.value == "" || element.value.replace(/\s/g, "") == "") {
        element.value = elementvalue;
        element.style.color = "#fff"
    }
};
$('#keyword').keydown(function () {    
    var keyword = $("#keyword").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            alert("Please enter the keywords!");
            return false
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword;
        }
    }
});
$('#keyword_m').keydown(function () {
    var keyword = $("#keyword_m").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            alert("Please enter the keywords!");
            return false
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword;
        }
    }
});
$('#keyword_mcn').keydown(function () { 
    var keyword = $("#keyword_mcn").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {           
            alert("请输入关键字!");
            return false
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword;
        }
    }
});
$('#keyword1').keydown(function () {
    var keyword = $("#keyword1").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            alert("Please enter the keywords!");
            return false
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword;
        }
    }
});
$('#keyword2').keydown(function () {
    var keyword = $("#keyword2").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            alert("请输入关键字!");
            return false
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword;
        }
    }
});

$(function () {
    var nav = $(".side");
    var win = $(window);
    var sc = $(document);
    win.scroll(function () {
        if (win.width() >= 992) {
            if (sc.scrollTop() >= 450) {
                nav.fadeIn();
            } else {
                nav.fadeOut();
            }
        } else {
            if (sc.scrollTop() >= 150) {

                	$(".mobile_sidebar").css({"transform": "scale(1)", "transitionDuration": '1s'});
				if( document.referrer == ''){
					$(".mfb-component__button--back").css({"transform": "scale(0)"});
				}	
            } else {
                $(".mobile_sidebar").css({"transform": "scale(0)", "transitionDuration": '1s'});
            }
        }
    })
});
function goTop() {
    jQuery('html,body').animate({'scrollTop': 0}, 600);
};

// slidebar 3
jQuery(function () {
    jQuery('.mysidebar_btn').click(function () {
        console.log('fadein')
        jQuery('.mysidebar_wrapper').fadeIn();
    })
})
function mysidebar_wrapper_close() {
    $('.mysidebar_wrapper').fadeOut();
}
// slidebar 3 end

$(function () {
    $(".mfb-component__button--main").click(function () {
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass("open");
        } else {
            $(this).parent().addClass("open");
        }
    });
});


(function () {
    var muban1_arr_height = [];
    for (var i = 0; i < $(".main_caseitem").length; i++) {
        var item_height_arr = $('.main_caseitem').eq(i).find('.case_item-title').height();
        muban1_arr_height.push(item_height_arr)
    }
    var max_main_proitem_name = Math.max.apply(null, muban1_arr_height);
    if (max_main_proitem_name > 48) {
        $('.case_item-title').css({"height": '48px', 'overflow': 'hidden'});
    } else {
        $('.case_item-title').css("height", max_main_proitem_name);
    }
})();
$('#mianze').on('click', function () {
    layer.open({
        type: 2,
        title: ['免责声明', 'font-size:18px;'],
        area: ['1000px', '770px'],
        shadeClose: true, //点击遮罩关闭

        content: 'https://www.one-all.com/mianze.html'
    });
});
require(['proDetail','jquery'],function(proDetail,$){
    proDetail.todo();
    
    if($(window).width()<768){
        $("#payment img").parent("a").click(function(){
            event.preventDefault();
        });
        $("#payment1 img").parent("a").click(function(){
            event.preventDefault();
        });
    }
});
require(['jquery', 'lightBox'], function ($, lightBox) {
    $(document).ready(function () {
        if ($(".main_page")) {
            if ($(".main_page").children().length == 0) {
                $(".main_page").hide();
            }
        };
    });
});
require(['jquery','swiper'],function($,Swiper){
    if($('.InsidePages_navswiper').length>0){
        var leftSwiper = new Swiper('.InsidePages_navswiper', {
            slidesPerView: 'auto',
            spaceBetween: 40,
            navigation: {
                nextEl: '.InsidePages_list-next',
                prevEl: '.InsidePages_list-prev',
            },
            on:{
                init:function(leftSwiper){
                    if(this.slides.length>6){
                        $(".InsidePages_list-next").show();
                        $(".InsidePages_list-prev").show();
                    }
                }
            }
        });
    };
    if($('.hjzf_innertop_navlist').length>0){
        var leftSwiper = new Swiper('.hjzf_innertop_navlist', {
            slidesPerView:4,
            spaceBetween: 10,
            pagination: {
                el: '.hjzf_innertop_nav_pageation',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
            on:{
                init:function(leftSwiper){
                   /* if(this.slides.length>6){
                        $(".InsidePages_list-next").show();
                        $(".InsidePages_list-prev").show();
                    }*/
                }
            },
            resize: function(){
                leftSwiper.update(true)
            },
        });
    };
});
/*require(['jqueryzoom', 'jquery'], function (jqueryzoom, $) {
 $("#gallery .jqzoom").jqueryzoom({xzoom: 326, yzoom: 241, offset: 10, position: "right"});
 });*/
jQuery(function () {
    jQuery('.skype-show').hide();
    jQuery(".skype-container").bind('mouseenter', function () {
        jQuery('.skype-show').show();
    })
    jQuery(".skype-container").bind('mouseleave', function () {
        jQuery('.skype-show').hide();
    });
});
jQuery(function () {
    jQuery('.whatsapp-show').hide();
    jQuery(".whatsapp-container").bind('mouseenter', function () {
        jQuery('.whatsapp-show').show();
    })
    jQuery(".whatsapp-container").bind('mouseleave', function () {
        jQuery('.whatsapp-show').hide();
    });
});
jQuery(function () {
    jQuery('.email-show').hide();
    jQuery(".email-container").bind('mouseenter', function () {
        jQuery('.email-show').show();
    })
    jQuery(".email-container").bind('mouseleave', function () {
        jQuery('.email-show').hide();
    });
});
/*第三套分类内页*/
require(['jquery'], function ($) {
    $(document).ready(function () {
        $(".inner-3__anchorUl li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
        })
    })
});




