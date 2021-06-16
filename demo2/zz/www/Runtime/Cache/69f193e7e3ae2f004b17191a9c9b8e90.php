<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
<title><?php echo ($seo['page_title']); ?></title>
<meta name="Keywords" content="<?php echo ($seo['page_keywords']); ?>"/>
<meta name="Description" content="<?php echo ($seo['page_descriptions']); ?>"/>
<script>
function browserRedirect(){var c=navigator.userAgent.toLowerCase();var h=c.match(/ipad/i)=="ipad";var i=c.match(/iphone os/i)=="iphone os";var g=c.match(/midp/i)=="midp";var d=c.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";var e=c.match(/ucweb/i)=="ucweb";var a=c.match(/android/i)=="android";var b=c.match(/windows ce/i)=="windows ce";var j=c.match(/windows mobile/i)=="windows mobile";if((h||i||g||d||e||a||b||j)){stringObj="__SELF__";var f=stringObj.replace("static/1","");f=f.replace("/index.php/Index/index/","mindex.html");window.location.href=f}}browserRedirect();var path="";
</script>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/page.css?<?php echo time();?>.css"/>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/common.css?<?php echo time();?>.css"/>
<LINK HREF="Css/Layout.css" REL="stylesheet" TYPE="text/css">
<?php if($company_info['use_icon'] == 1): ?><link rel="bookmark"  type="image/x-icon"  href="<?php echo getimgurl($company_info['icon']);?>"/>
<link rel="shortcut icon" href="<?php echo getimgurl($company_info['icon']);?>"> 
<link rel="icon" href="<?php echo getimgurl($company_info['icon']);?>"><?php endif; ?>
<script type="text/javascript" src="__TMPL__demo2/js/jquery.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/common.js"></script>
</head>
<body>

<div class="content">

<!--logo代码块开始-->
	<div class="Page_Top">
    <div class="Page_Logo">
      <a href="<?php echo U('/');?>"><?php echo ($logo); ?></a>
    </div>
    <!--头部右侧-->
    <div class="Page_TopRight">        
      <div class="Page_TopTel">
        <ul>
          <li><img src="__TMPL__demo2/img/toptel.jpg" /></li>
          <li style="width:116px; overflow:hidden"><?php echo ($about['phone']); ?></li>
          <li><img src="__TMPL__demo2/img/topemail.jpg" /></li>
          <li><a href="mailto:<?php echo chaifen($about['email'],0);?>"><?php echo chaifen($about['email'],0);?></a></li>
        </ul>
      </div>
      <!--搜索-->
      <script type="text/javascript">
		function CheckForm(theForm)
		{
			if (theForm.keywords.value=="Product keywords…")
			{
				alert('Input a keyword!');
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
					element.style.color="#333";
				}
			}
			//离开输入框时触发事件
			function OnBlurFun(element,elementvalue)
			{
				if(element.value==""||element.value.replace(/\s/g,"")=="")
				{
					element.value=elementvalue;    
					element.style.color="#333";
				}
			}
	  </script>
      <div class="Page_Search">
        <form name="find" action="<?php echo U('/search');?>" method="get"  accept-charset="UTF-8"  onsubmit="return CheckForm(this);">
          <ul>
            <li style="width:278px; height:30px; background:url(__TMPL__demo2/img/searchbg.jpg)">
              <input type="text" id="searchin" name="keywords" value="Product keywords…" onfocus="OnFocusFun(this,'Product keywords…')" onblur="OnBlurFun(this,'Product keywords…')" style="color:#333"/>
            </li>
            <li>
              <input type="image" src="__TMPL__demo2/img/searchbtn.jpg"  name='submit' class='submit'/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
<!--logo代码块结束-->
<div class="clear"></div>

<!--导航代码块开始-->
<script type="text/javascript" language="javascript" src="__TMPL__demo2/js/nav.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/navcontrol.js"></script>
    <div class="menu" id="smoothmenu1">
    <ul>
     <?php if(is_array($web_navigation)): $i = 0; $__LIST__ = array_slice($web_navigation,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li class="menu1" style="background:url(__TMPL__demo2/img/menubgon.jpg) center no-repeat"><a href="<?php echo ($vo['url']); ?>" onfocus="blur()"><?php echo ($vo['title']); ?></a>
        <?php if($vo['child'] != ''): ?><ul style="width:180px;">
         <li><a href="/product_category/Plastic-film_1792.html" ="Plastic film">Plastic film</a></li>
         <li><a href="/product_category/Textiles_1812.html" ="Textiles">Textiles</a></li>
         <li><a href="/product_category/Garments_1778.html" ="Garments">Garments</a></li>
        </ul><?php endif; ?>
      </li>
      <li style="padding-top:3px;"><img src="__TMPL__demo2/img/menuline.jpg"/></li><?php endforeach; endif; else: echo "" ;endif; ?>
      <div class="clear"></div>
    </ul>
  </div>
<!--导航代码块结束-->

<!--继承内容代码块开始-->

<!--面包屑代码块开始-->
<div class="crumbs"><img src="__TMPL__demo2/img/home.png" />&nbsp;&nbsp;<a href="<?php echo U('/');?>">首页</a> > 立即询价
</div>
<div class="clear"></div>
<!--代码块结束-->


<!--产品列表代码块开始-->
<div class="inproductlist">
	<div class="inprol">
    	<div class="inprolsit">
        	<div class="inprolist-1"><img src="__TMPL__demo2/img/inprodian.jpg" />&nbsp;&nbsp;产品列表<div class="clear"></div></div>
            <div class="inprolist-2">
                <ul class="inprolist-2-1">
                    <?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "暂无数据" ;else: foreach($__LIST__ as $key=>$allclass): $mod = ($i % 2 );++$i;?><li class="inprolist-2-parenter"><?php echo ($allclass['class_name']); ?></li>
                        <?php if($allclass["childs"] != ""): if(is_array($allclass['childs'])): $i = 0; $__LIST__ = $allclass['childs'];if( count($__LIST__)==0 ) : echo "暂无数据" ;else: foreach($__LIST__ as $key=>$childs): $mod = ($i % 2 );++$i;?><li class="inprolist-2-child"><?php echo ($childs['class_name']); ?></li><?php endforeach; endif; else: echo "暂无数据" ;endif; endif; endforeach; endif; else: echo "暂无数据" ;endif; ?>                  
                </ul>
            </div>
        </div>
        <div class="clear"></div>
        <div style=" width:100%; height:15px;"></div>
        <div class="contact">
        	<div class="contacttext"><img src="__TMPL__demo2/img/quan.png" />&nbsp;&nbsp;联系我们</div>	
            <div class="incon">
            	<img src="__TMPL__demo2/img/intel.png" />
                <div class="intiao"></div>
                <div class="intext">
                	<div class="intext-1">联系电话</div>
                    <div class="intext-2"><?php echo ($about['mobile']); ?></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="incon">
            	<img src="__TMPL__demo2/img/inemail.png" />
                <div class="intiao"></div>
                <div class="intext">
                	<div class="intext-1">邮箱</div>
                    <div class="intext-2"><a href="mailto:<?php echo ($about['email']); ?>"><?php echo ($about['email']); ?></a></div>
                </div>
                <div class="clear"></div>
            </div>            
            <div class="clear"></div>
        </div>
    </div>
    <div class="inpror">
		<!--询盘提交-->
		<style>
body{font-size:12px;}
.inquiry{width:100%;padding:20px 0;}
.inquiry h2{border-bottom:1px solid #ccc;padding-bottom:5px; font-family:'微软雅黑';color:#333333;}
.inquiryinfo{padding-top:10px;padding-bottom:10px;width:100%;}
.inquiryinfo input{height:20px;line-height:20px;padding:2px;border:1px solid #999;width:200px;}
.inquiryinfo textarea{padding:2px;border:1px solid #999;}

.inquiryleft{float:left;width:120px;}
.inquiryright{float:left;}
.productbutton{
background: #e69d11;
color: #ffffff;
border: 0 !important;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
cursor: pointer;
height: 30px !important;
padding: 0 10px 0 10px !important;
width:80px !important;
}
.productbutton:hover {
background: #d78f05;
}
.yz_alert{color:#ff0000;margin-left:10px;}
.clear{clear:both;}
</style>
<script>
$(function(){
$("#message").focus(function(){
$("#message_alert").html("");
});
$("#linkname").focus(function(){
$("#linkname_alert").html("");
});
$("#phone").focus(function(){
$("#phone_alert").html("");
});
$("#email").focus(function(){
$("#email_alert").html("");
});
$("#code_char").focus(function(){
$("#code_char_alert").html("");
});


$("#getcode_char").click(function(){
		$(this).attr("src",'__APP__/code_char.php?' + Math.random());
	});

$("#getcode_char1").click(function(){
		$("#getcode_char").attr("src",'__APP__/code_char.php?' + Math.random());
	});

})


function yz_submit(){
var count=0;
var message=Trims($("#message").val());
var linkname=Trims($("#linkname").val());
var phone=Trims($("#phone").val());
var email=Trims($("#email").val());
if(message.length<=0){
$("#message_alert").html("*咨询内容不能为空");
count++;
}
else{
$("#message_alert").html("");
}

if(linkname.length<=0){
$("#linkname_alert").html("*姓名不能为空");
count++;
}
else{
$("#linkname_alert").html("");
}


if(phone.length<=0){
$("#phone_alert").html("*电话不能为空");
count++;
}
else{

 var str=/[\u4E00-\u9FA5a-zA-Z]/;   
if(str.test($('#phone').val()))   
{
$("#phone_alert").html("*电话信息有误！");
count++;
}else{
$("#phone_alert").html("");
}
}


if(email.length>0 && !is_email(email)){
$("#email_alert").html("*邮箱格式错误");
count++;
}
else{
$("#email_alert").html("");
}

var code_char = $("#code_char").val();
$.ajax({
             type: "POST",
             url: "__APP__/chk_code.php?act=char",
			 async:false,
             data: {code:code_char},
             success: function(data){
			 
			if(data==1){
			  $("#code_char_alert").html("");
			}else{
			 count++;
			 $("#code_char_alert").html("验证码错误");
			}
            }            
         });


if(count>0){
return false;
}
else{
$(".inquirybutton").attr("disabled","true");
return true;
}

}




function Trims(str)
{
return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
} 

function is_email(str)
{
return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str));
}

</script>
<div class="inquiry" id="zixun">
<h2>立即询价</h2>
<form action="__APP__/saveinquiry" method="post" onsubmit="return yz_submit();">
<div class="inquiryinfo">
    <div class="inquiryleft">您要咨询的详细内容 *</div>
	<div class="inquiryright"><textarea rows="6" cols="50" name="message" id="message" style="padding:5px;"><?php echo ($product["pro_name"]); ?></textarea><span class="yz_alert" id="message_alert"></span>
	<div class="clear"></div>
	</div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">请留下您的姓名 *</div>
	<div class="inquiryright"><input  name="linkname" id="linkname"><span class="yz_alert" id="linkname_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">请留下您的电话 *</div>
	<div class="inquiryright"><input  name="phone" id="phone"><span class="yz_alert" id="phone_alert"></span></div>
	<div class="clear"></div>
</div>


<div class="inquiryinfo">
    <div class="inquiryleft">您的常用联系信箱</div>
	<div class="inquiryright"><input  name="email" id="email"><span class="yz_alert" id="email_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">验证码 *</div>
	<div class="inquiryright"><input type="text" class="input" id="code_char" name="code" maxlength="6" />&nbsp;<img src="__APP__/code_char.php" id="getcode_char" title="看不清，点击换一张" align="absmiddle">&nbsp;<a href="javascript:void(0);" id="getcode_char1">看不清，点击换一张</a><span class="yz_alert" id="code_char_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
<input type="hidden" name="prodid" value="<?php echo ($product['pid']); ?>"/>
<input class="productbutton" type="submit" value="提&nbsp;&nbsp;交"  name="submit"/>
</div>
</form>

<div class="clear"></div>
</div>	
    </div>
	
	
    <div class="clear"></div>
</div>
<!--代码块结束-->

<!--继承内容代码块结束-->

<!--公司信息代码块开始-->
<div class="footer">
  <div class="bottom">
    <div  class="foot_right">
      <ul>
       <li style="padding-right:9px;"><img src="__TMPL__demo2/img/ewm.jpg" /></li>
       <li><a href="http://wap.cnbaixing.com" onfocus="blur()" target="_blank"><img src="__TMPL__demo2/img/mobile.jpg" border="0"/></a></li>
      </ul>
    </div>
    <div class="foot_contact">
      <div class="foot_contactTitle">
         <div style="width:541px; float:left; color:#f8f8f8;">
         CONTACT us
         </div>
         <div style="float:left; width:120px; padding-top:18px;"><!-- AddThis Follow BEGIN -->
            <div class="addthis_toolbox addthis_16x16_style addthis_default_style">
            <a class="addthis_button_facebook_follow" addthis:userid="1"></a>
            <a class="addthis_button_twitter_follow" addthis:userid="1"></a>
            <a class="addthis_button_vimeo_follow" addthis:userid="1"></a>
            <a class="addthis_button_foursquare_follow" addthis:userid="1"></a>
            <a class="addthis_button_tumblr_follow" addthis:userid="1"></a>
            <a class="addthis_button_rss_follow" addthis:userid="1"></a>
            </div>
            <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52d9da3543f78f25"></script>
            <!-- AddThis Follow END -->
            </div>
      </div>
      <ul>
        <li style="width:430px;"><img src="__TMPL__demo2/img/tel.jpg" style="vertical-align:middle"/> <?php echo ($about['phone']); ?><br /><img src="__TMPL__demo2/img/add.jpg" style="vertical-align:middle"/> <?php echo ($about['address']); ?><br />
      <img src="__TMPL__demo2/img/web.jpg" style="vertical-align:middle"/> <?php echo ($about['website']); ?></li>
        <li style="padding-left:15px;"><img src="__TMPL__demo2/img/fax.jpg" style="vertical-align:middle"/> <?php echo chaifen($about['fax'],0);?><br /><img src="__TMPL__demo2/img/email.jpg" style="vertical-align:middle"/> <a href="mailto:<?php echo chaifen($about['email'],0);?>" onfocus="blur()"><?php echo chaifen($about['email'],0);?></a></li>
      </ul>
    </div>
  </div>
  
  <div class="Page_Footlan">
      <div><a href="javascript:translator('en|cn')"><img src="__TMPL__demo2/img/lang/ico_cn.gif" width="20" height="13" alt="" /> 中文</a></div>
      <div><a href="javascript:translator('en|hr')"><img src="__TMPL__demo2/img/lang/ico_hr.gif" width="20" height="13" /> Hrvatska</a></div>
      <div><a href="javascript:translator('en|fr')"><img src="__TMPL__demo2/img/lang/ico_fr.gif" width="20" height="13" alt="" /> Français</a></div>
      <div><a href="javascript:translator('en|it')"><img src="__TMPL__demo2/img/lang/ico_it.gif" width="20" height="13" alt="" /> Italiano</a></div>
      <div><a href="javascript:translator('en|pt')"><img src="__TMPL__demo2/img/lang/ico_pt.gif" width="20" height="13" alt="" /> Português</a></div>
      <div><a href="javascript:translator('en|ja')"><img src="__TMPL__demo2/img/lang/ico_ja.gif" width="20" height="13" alt="" /> 日本の</a></div>
      <div><a href="javascript:translator('en|ko')"><img src="__TMPL__demo2/img/lang/ico_ko.gif" width="20" height="13" alt="" /> 한국어</a></div>
      <div><a href="javascript:translator('en|ar')"><img src="__TMPL__demo2/img/lang/ico_ar.gif" width="20" height="13"  alt=""/> العربية</a></div>
      <div><a href="javascript:translator('en|de')"><img src="__TMPL__demo2/img/lang/ico_de.gif" width="20" height="13" alt="" /> Deutsch</a></div>
      <div><a href="javascript:translator('en|cs')"><img src="__TMPL__demo2/img/lang/ico_cs.gif" width="20" height="13"  alt=""/> česky</a></div>
      <div><a href="javascript:translator('en|da')"><img src="__TMPL__demo2/img/lang/ico_da.gif" width="20" height="13"  alt=""/> Dansk</a></div>
      <div><a href="javascript:translator('en|nl')"><img src="__TMPL__demo2/img/lang/ico_nl.gif" width="20" height="13"  alt=""/> Nederlands</a></div>
       <div><a href="javascript:translator('en|fi')"><img src="__TMPL__demo2/img/lang/ico_fi.gif" width="20" height="13"  alt=""/> suomi</a></div>
       <div><a href="javascript:translator('en|el')"><img src="__TMPL__demo2/img/lang/ico_el.gif" width="20" height="13" alt="" /> Ελληνικά</a></div>
       <div><a href="javascript:translator('en|hi')"><img src="__TMPL__demo2/img/lang/ico_hi.gif" width="20" height="13"  alt=""/> हिन्दी</a></div>
      <div><a href="javascript:translator('en|no')"><img src="__TMPL__demo2/img/lang/ico_no.gif" width="20" height="13" alt="" /> norsk</a></div>
      <div><a href="javascript:translator('en|tr')"><img src="__TMPL__demo2/img/lang/ico_tr.gif" width="20" height="13"  alt=""/> Türkiye</a></div>
      <div><a href="javascript:translator('en|th')"><img src="__TMPL__demo2/img/lang/ico_th.gif" width="20" height="13" alt="" /> ประเทศไทย</a></div>
      <div><a href="javascript:translator('en|bg')"><img src="__TMPL__demo2/img/lang/ico_bg.gif" width="20" height="13"  alt=""/> български</a></div>
      <div><a href="javascript:translator('en|ru')"><img src="__TMPL__demo2/img/lang/ico_ru.gif" width="20" height="13"  alt=""/> русский</a></div>
      <div><a href="javascript:translator('en|sv')"><img src="__TMPL__demo2/img/lang/ico_sv.gif" width="20" height="13" alt="" /> Svenska</a></div>
      <div><a href="javascript:translator('en|pl')"><img src="__TMPL__demo2/img/lang/ico_pl.gif" width="20" height="13"  alt=""/> Polski</a></div>
      <div><a href="javascript:translator('en|ro')"><img src="__TMPL__demo2/img/lang/ico_ro.gif" width="20" height="13"  alt=""/> Română</a></div>
      <div><a href="javascript:translator('en|vi')"><img src="__TMPL__demo2/img/lang/ico_vi.gif" width="20" height="13" alt="" /> Việt Nam</a></div>
  </div>

    
  <div class="link">CopyRight © 2014 <?php echo ($about['company_name']); ?> All Rights Reserved. <?php echo htmlspecialchars_decode(get_count());?>
            Designed by&nbsp;&nbsp;<a href="http://www.one-all.com" title="Zhonghuan Internet" target="_blank">Zhonghuan Internet</a>
   </div>
</div>
<!--公司信息代码块结束-->
</div>
<style>
.floatqq{position:fixed;width:110px;height:142px;top:200px;right:5px;background:url('__TMPL__demo2/img/floatqq.png');}
.floatqq a{width:110px;height:142px;cursor:pointer;position: inherit;}
</style>
<script type="text/javascript" src="__TMPL__demo2/js/statitics.js"></script>
<script>
$(function(){
  $("#backtop").click(function(){
        $("html,body").animate({scrollTop:"0px"},400);
  });
  
  $(window).scroll(function(){
			if($(document).scrollTop()>360){
				$("#backtop").show();
			}else{
				$("#backtop").hide();
			}
		})
  
})
</script>
<style>
.backtop{cursor:pointer;display:none;position:fixed; background:url(__TMPL__demo2/img/backtop.png);background-size:100%;bottom:150px;right:10px;text-align:center;}
.backtop:hover{ background:url(__TMPL__demo2/img/backtop1.png);}
</style>
<div class="backtop" id="backtop" style="width:40px;height:40px;"></div>
<div class="floatqq"><?php echo htmlspecialchars_decode(get_QQ());?></div>
</body>
</html>