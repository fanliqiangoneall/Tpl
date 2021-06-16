/*search form*/
function CheckForm(theForm) {
    if (theForm.keywords.value == "Search") {
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "Product Search"){
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "产品搜索"){
        alert('请输入关键字');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "製品検索"){
        alert('キーワードを入力してください');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "Stichwort"){
        alert('Bitte geben Sie einen Suchbegriff ein!');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "Recherche"){
        alert('Entrez des mots-clés');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "buscar"){
        alert('Por favor, introduzca las palabras clave');
        theForm.keywords.focus();
        return false
    }else{
        return true
    }

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
            if($("#keyword").attr("data-language") == 'ja' || $("#keyword2").attr("data-language") == 'jp'){
                alert("キーワードを入力してください！")
            }else if($("#keyword").attr("data-language") == 'de'){
                alert("Bitte geben Sie einen Suchbegriff ein!")
            }else if($("#keyword").attr("data-language") == 'fra'|| $("#keyword2").attr("data-language") == 'fr'){
                alert("Veuillez saisir des mots clés!")
            }else if($("#keyword").attr("data-language") == 'spa'|| $("#keyword2").attr("data-language") == 'esp'){
                alert("Por favor, introduzca palabras clave!")
            }else if($("#keyword").attr("data-language") == 'en'){
                alert("Please enter the keywords!")
            }else{
                alert("请输入关键字!")
            }
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword
        }
    }
});
$('#keyword2').keydown(function () {
    var keyword = $("#keyword2").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            if($("#keyword2").attr("data-language") == 'ja' || $("#keyword2").attr("data-language") == 'jp'){
                alert("キーワードを入力してください！")
            }else if($("#keyword2").attr("data-language") == 'de'){
                alert("Bitte geben Sie einen Suchbegriff ein!")
            }else if($("#keyword2").attr("data-language") == 'fra'|| $("#keyword2").attr("data-language") == 'fr'){
                alert("Veuillez saisir des mots clés!")
            }else if($("#keyword2").attr("data-language") == 'spa'|| $("#keyword2").attr("data-language") == 'esp'){
                alert("Por favor, introduzca palabras clave!")
            }else if($("#keyword2").attr("data-language") == 'en'){
                alert("Please enter the keywords!")
            }else{
                alert("请输入关键字!")
            }
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword
        }
    }
});
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 150) {
            $(".HJZF2__side").addClass("active");
            $(".HJZF2__side").show()
        } else {
            $(".HJZF2__side").removeClass("active");
            $(".HJZF2__side").hide()
        }
    });

});

function goTop() {
    jQuery('html,body').animate({'scrollTop': 0}, 600)
};
jQuery(document).ready(function () {
    jQuery(".HJZF2__side ul li").hover(function () {
        jQuery(this).find(".sidebox").stop().animate({"width": "330px"}, 200);
        jQuery(this).find(".sidebox2").stop().animate({"width": "300px"}, 200);
        jQuery(this).find(".sidebox3").stop().animate({"width": "220px"}, 200);
    }, function () {
        jQuery(this).find(".sidebox").stop().animate({"width": "60px"}, 200);
        jQuery(this).find(".sidebox2").stop().animate({"width": "60px"}, 200);
        jQuery(this).find(".sidebox3").stop().animate({"width": "60px"}, 200);
    });
    jQuery(".HJZF2__side2 ul li").hover(function () {
        jQuery(this).find(".sidebox").stop().animate({"width": "280px"}, 200);
        jQuery(this).find(".sidebox2").stop().animate({"width": "300px"}, 200);
        jQuery(this).find(".sidebox3").stop().animate({"width": "220px"}, 200);
    }, function () {
        jQuery(this).find(".sidebox").stop().animate({"width": "60px"}, 200);
        jQuery(this).find(".sidebox2").stop().animate({"width": "60px"}, 200);
        jQuery(this).find(".sidebox3").stop().animate({"width": "60px"}, 200);
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

$(".othercate_page img").each(function(){
    $(this).parent().click(function(){
        event.preventDefault();
    })
    $(this).on('click', function(){      
        var _href = $(this).parent().attr("href");  
        layer.open({
            type: 2,
            title: ['', 'font-size:18px;'],
            area: ['90%', '90%'],
            shadeClose: true, //点击遮罩关闭
    
            content: _href
        });
    });
})


require(['proDetail','jquery'],function(proDetail,$){
    proDetail.todo();
});
require(['jqueryzoom','jquery'],function(jqueryzoom,$){
    /*$(function(){
        $("#gallery .jqzoom").jqueryzoom({xzoom:380,yzoom:410});
    })
*/
    $("#gallery .jqzoom").jqueryzoom({xzoom: 326, yzoom: 241, offset: 10, position: "right"})
});

require(['jquery','swiper'],function($,Swiper){
    if($('.InsidePage--3__contentNavWrap--100').length>0){
        var swiper = new Swiper('.InsidePage--3__contentNavWrap--100', {
            slidesPerView: 4,
            spaceBetween: 10,
            navigation: {
                nextEl: '.InsidePage--3-button-next',
                prevEl: '.InsidePage--3-button-prev',
            },
            on:{
                init:function(swiper){
                    if(this.slides.length>4){
                        $(".InsidePage--3-button-next").show();
                        $(".InsidePage--3-button-prev").show();
                        $(".InsidePage--3__contentNavWrap--100 .InsidePage--3__contentNavWrap--100__list").css("justify-content","inherit");
                    }

                }
            },
        });
    }
});

$(document).ready(function(){
    /*内页模板第一套产品名称高度控制*/
    (function(){
        var muban1_arr_height=[];
        for(var i=0;i<$(".main_proitem").length;i++){
            var item_height_arr= $('.main_proitem').eq(i).find('.main_proitem_name').height();
            muban1_arr_height.push(item_height_arr)
        }
        var max_main_proitem_name = Math.max.apply(null, muban1_arr_height);
        if(max_main_proitem_name>48){
            $('.main_proitem_name').css({"height":'48px','overflow':'hidden'});
        }else{
            $('.main_proitem_name').css("height",max_main_proitem_name);
        }
    })();
    /*内页模板第一套案例名称高度控制*/
    (function(){
        var muban1_arr_height=[];
        for(var i=0;i<$(".main_caseitem").length;i++){
            var item_height_arr= $('.main_caseitem').eq(i).find('.case_item-title').height();
            muban1_arr_height.push(item_height_arr)
        }
        var max_main_proitem_name = Math.max.apply(null, muban1_arr_height);
        if(max_main_proitem_name>48){
            $('.case_item-title').css({"height":'48px','overflow':'hidden'});
        }else{
            $('.case_item-title').css("height",max_main_proitem_name);
        }
    })();
    /*内页模板第一套新闻高度控制*/

    (function(){
        $(document).ready(function(){
            var news_arrary = [];
            for(var i=0;i<$(".main_newslist li").length;i++){
                var item_height_arr= $(".main_newslist li").eq(i).find('.main_newsimg').height();
                news_arrary.push(item_height_arr);
                $(".main_newslist li").eq(i).find(".main_news_right").css("height",news_arrary[i]);
            }
        })
    })();






    /*内页模板第二套产品名称高度统一设置*/
    (function(){
        var muban2_arr_height=[];
        for(var i=0;i<$(".inner_module2__inPage-proitem").length;i++){
            var item_height_arr= $('.inner_module2__inPage-proitem').eq(i).find('.inner_module2__inPage-proitemText').height();
            muban2_arr_height.push(item_height_arr)
        }
        var max_main_proitem_name = Math.max.apply(null, muban2_arr_height);
        if(max_main_proitem_name>80){
            $('.inner_module2__inPage-proitemText').css({"height":'80px','overflow':'hidden'});
        }else{
            $('.inner_module2__inPage-proitemText').css("height",max_main_proitem_name);
        }
    })();
    /*内页banner加载动画控制（transform: scale(1)）*/
    $(".InsidePage--3__banner").addClass("on");

    if($(".FAQ.faqActive").length>-1){
        $(".FAQ.faqActive p:nth-child(2n)").addClass("InsidePages_answer");
        $(".FAQ.faqActive p:nth-child(2n+1)").addClass("InsidePages_question");
        $(".FAQ.faqActive p:first-child").addClass("active").next("p").addClass("active").slideDown();
        $(".FAQ.faqActive p.InsidePages_question").click(function(){
            $(this).addClass("active").siblings(".InsidePages_question").removeClass("active");
            $(this).next("p").addClass("active").slideDown().siblings(".InsidePages_answer").removeClass("active").slideUp()
        })
    };

    if($("#switch_btn").length>-1){
        $("#in_grid").click(function(){
            $(this).addClass("select").siblings("div").removeClass("select");
            $(".InsidePage--3__prolist").addClass("grid");
        });
        $("#in_list").click(function(){
            $(this).addClass("select").siblings("div").removeClass("select");
            $(".InsidePage--3__prolist").removeClass("grid");
        });
    }


});