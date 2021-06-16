function CheckForm(theForm)
{
  if (theForm.keywords.value=="输入关键词")
  {
    alert('请输入关键词！');
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
    element.style.color="#888888";
  }
}
//离开输入框时触发事件
function OnBlurFun(element,elementvalue)
{
  if(element.value==""||element.value.replace(/\s/g,"")=="")
  {
    element.value=elementvalue;
    element.style.color="#888888";
  }
}
$('#keyword').keydown(function() {
  var keyword=$("#keyword").val();
  if (event.keyCode == 13) {
    if(keyword.length<=0){
      alert("请输入关键词！");
    }
    else{

      window.location.href="{:U('/search','','')}"+"?keywords="+keyword;
    }
  }
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

function show(i)
{
  switch(i)
  {
    case 1:
      document.getElementById("class1").className="class_nameon";
      document.getElementById("class2").className="class_name1";
      document.getElementById("class3").className="class_name1";
      document.getElementById("classlist1").style.display="block";
      document.getElementById("classlist2").style.display="none";
      document.getElementById("classlist3").style.display="none";
      break;
    case 2:
      document.getElementById("class1").className="class_name1";
      document.getElementById("class2").className="class_nameon";
      document.getElementById("class3").className="class_name1";
      document.getElementById("classlist1").style.display="none";
      document.getElementById("classlist2").style.display="block";
      document.getElementById("classlist3").style.display="none";
      break;
    case 3:
      document.getElementById("class1").className="class_name1";
      document.getElementById("class2").className="class_name1";
      document.getElementById("class3").className="class_nameon";
      document.getElementById("classlist1").style.display="none";
      document.getElementById("classlist2").style.display="none";
      document.getElementById("classlist3").style.display="block";
      break;
  }
}

$(document).ready(function () {
  $dragBln = false;
  $(".main_image").touchSlider({
    flexible : true,
    speed : 600,
    mouseTouch: false,
    btn_prev : $("#btn_prev"),
    btn_next : $("#btn_next"),
    paging : $(".flicking_con a"),
    counter : function (e) {
      $(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
    }
  });
  timer = setInterval(function() { $("#btn_next").click();}, 6000);
  $(".main_visual").hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval(function() { $("#btn_next").click();}, 6000);
  })
  $(".main_image").bind("touchstart", function() {
    clearInterval(timer);
  }).bind("touchend", function() {
    timer = setInterval(function() { $("#btn_next").click();}, 6000);
  })
});

$(document).ready(function(){
  $(".asd .text").hide();
  $(".asd").hover(function(){
        $(this).find(".in_proname_a ").stop().fadeTo(500,0)
        $(this).find(".text").stop().show().animate({left:'0'}, {duration: 500})
      },
      function(){

        $(this).find(".in_proname_a ").stop().fadeTo(500,1)
        $(this).find(".text").stop().animate({left:'284'}, {duration: "fast"}).hide()
      });
});

$(window).scroll( function() {
  var scrollTop=$(document).scrollTop();
  if($(".ab_pic").length>0){
    var offset_top=$(".ab_pic").offset().top;
  }
  if($("#qbox1").length>0){
    var offset_top1=$("#qbox1").offset().top;
  }
  if($(".news_text").length>0){
    var offset_top2=$(".news_text").offset().top;
  }
  if(offset_top-scrollTop<390){
    $('.ab_pic').show().addClass('fadeInRight');

  }
  if(offset_top1-scrollTop<374){
    $('#qbox1').show().addClass('fadeInRight');
    $('#qbox3').show().addClass('fadeInLeft');
  }
  if(offset_top2-scrollTop<845){
    $('.news_text').show().addClass('fadeInUp');

  }
});

