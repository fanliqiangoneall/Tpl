<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head><script>var urlString="<?php echo ($urlString); ?>"; if(urlString!=""){location.href=urlString;}</script>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,height=device-height"/>
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="black" name="apple-mobile-web-app-status-bar-style" />
<meta name="format-detection" content="telephone=no">
<title><?php echo ($seo['page_title']); ?></title>
<meta name="Keywords" content="<?php echo ($seo['page_keywords']); ?>"/>
<meta name="Description" content="<?php echo ($seo['page_descriptions']); ?>"/>
<link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/style.css?<?php echo time();?>.css"/>
<script type="text/javascript" src="__TMPL__WAP/js/jquery.js"></script>
<script>var path="";</script>
<script type="text/javascript" src="__TMPL__WAP/js/statitics.js"></script>
<script src="__TMPL__WAP/js/jquery-1.8.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/style.css">
</head>
<body>
<div data-role="page" id="index">
<div style="width:100%; text-align:center;" data-role="header">
  <a href="<?php echo U("/");?>"><img src="__TMPL__WAP/img/logo.jpg" border="0" style="width:100%; display:block;"/></a>
</div>


<style type="text/css">
#detail img{ max-width:100% !important;height:auto !important;}
#detail table{width:100% !important;}
table{ width:100%;}
table td{}
</style>
<link href="__TMPL__WAP/css/flexslider.css" rel="stylesheet" type="text/css">
<script src="__TMPL__WAP/scripts/jquery.flexslider-min.js" ></script>
<script src="__TMPL__WAP/scripts/custom.js" ></script>
<div class="flexslider" style="width:100%;">
  <ul class="slides">

    <li class="ui-block-a"><a href="<?php echo U('/');?>"><img src="__TMPL__WAP/img/banner1.jpg"  width="100%" style="display:block;" border="0"/></a></li>
    <li class="ui-block-a"><a href="<?php echo U('/');?>"><img src="__TMPL__WAP/img/banner2.jpg"  width="100%" style="display:block;" border="0"/></a></li>
    <li class="ui-block-a"><a href="<?php echo U('/');?>"><img src="__TMPL__WAP/img/banner3.jpg"  width="100%" style="display:block;" border="0"/></a></li>

  </ul>
</div>
<div class="page_pic">
  <ul>
      <li><a data-ajax="false" href="<?php echo U('/');?>" onFocus="blur()"><img src="__TMPL__WAP/img/menu_1.jpg" width="80%" /><br />Home</a></li>
     <li><a data-ajax="false" href="<?php echo U('/aboutus');?>" onFocus="blur()"><img src="__TMPL__WAP/img/menu_2.jpg" width="80%" /><br />About us</a></li>
     <li><a data-ajax="false" href="<?php echo U('/product');?>" onFocus="blur()"><img src="__TMPL__WAP/img/menu_3.jpg" width="80%" /><br />Products</a></li>
     <li><a data-ajax="false" href="<?php echo U('/news');?>" onFocus="blur()"><img src="__TMPL__WAP/img/menu_4.jpg" width="80%" /><br />News</a></li>
     <li><a data-ajax="false" href="<?php echo U('/contactus');?>" onclick="turn_sta(2,5)"><img src="__TMPL__WAP/img/menu_5.jpg" width="80%" /><br />Contact us</a></li>
  </ul>
  <div style="clear:both;"></div>
</div>
<div data-role="content">
  <div class="page_indexlmTitle" style="margin-top:20px;clear: both;">
    <div class="title_pro" style="font-size: 18px;">Product Description</div>
    <div style="clear:both;"></div>
  </div>
      <div style="width:100%; height:10px;"></div>
      <div class="page_main" id="detail">
        <h4 style="line-height:16px; padding:8px 0;"><b>Name: </b> <?php echo ($product['pro_name']); ?></h4>
        <div style="width:100%; margin:0 auto; text-align:center;"><img src="<?php echo getimgurl($product['main_img']);?>" title="<?php echo ($product['pro_name']); ?>" style="max-width:100%">
        <?php if(is_array($proimg)): $i = 0; $__LIST__ = $proimg;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$proimg): $mod = ($i % 2 );++$i; if(getimgurl($proimg['field_auxiliary_fid']) != '/Public/img/nopic.gif'): ?><br /><img src="<?php echo getimgurl($proimg['field_auxiliary_fid']);?>" width="100%" alt="<?php echo ($product['pro_name']); ?>"/><?php endif; endforeach; endif; else: echo "" ;endif; ?>
        </div>
      <?php if( $product['is_pc_to_mobile'] == 0): echo htmlspecialchars_decode($product['pro_profile_mobile']); endif; if( $product['is_pc_to_mobile'] == 1 or $product['is_pc_to_mobile'] == '' ): echo htmlspecialchars_decode($product['pro_profile']); endif; ?>
      </div>
      <div class="page_inMore">
    <span onClick="history.go(-1)">Back</span>
    </div>
    <div class="page_indexlmTitle" style="margin-top:20px;clear: both;">
    <div class="title_pro" style="font-size: 18px;">Immediately Consult</div>
    <div style="clear:both;"></div>
  </div>
    <div class="page_main"><style>
.inquiry{width:96%;padding:0 0;margin:0 auto;}
.inquiry h2{border-bottom:1px solid #ccc;padding-bottom:5px; font-family:'Arial';color:#333333;}
.inquiryinfo{padding-bottom:10px;width:100%;}
.inquiryinfo input{height:20px;line-height:20px;padding:2px;border:1px solid #999;width:130px; text-align:left}
.inquiryinfo textarea{padding:2px;border:1px solid #999; width:100%;font-family:'Arial'}

.inquiryleft{float:left;width:100%;}
.inquiryright{float:left;width:100%;}
.inquiryinfo input[type=submit]{
background: #000;
color: #fff;
border: 0 !important;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
cursor: pointer;
height: 30px !important;
padding: 0 10px 0 10px !important;
width:80px !important;
}
.inquiryinfo input[type=submit]:hover {
background: #000
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
$("#message_alert").html("*Consulting content cannot be empty");
count++;
}
else{
$("#message_alert").html("");
}

if(linkname.length<=0){
$("#linkname_alert").html("*The name cannot be empty");
count++;
}
else{
$("#linkname_alert").html("");
}
 var str=/[\u4E00-\u9FA5a-zA-Z]/;  
if(phone.length>0 && str.test(jQuery('#phone').val()))   
{
jQuery("#phone_alert").html("*Telephone information is wrong!");
count++;
}else{
jQuery("#phone_alert").html("");
}

if(email.length<=0){
  jQuery("#email_alert").html("*The email can not be empty");
  count++;
}
else{
		  if(!is_email(email)){
		  	jQuery("#email_alert").html("*Email format error");
		  	count++;
		  }
		else {
			  jQuery("#email_alert").html("");
			  }
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
			 $("#code_char_alert").html("*Verification code error");
			}
            }            
         });


if(count>0){
return false;
}
else{
jQuery("#inbut").html('<h5 style="color:#F00;">Please wait</h5>');

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
<form action="__APP__/saveinquiry" method="post" onsubmit="return yz_submit();">
<div class="inquiryinfo">
    <div class="inquiryleft">Message *</div>
	<div class="inquiryright"><textarea rows="5" cols="30" name="message" id="message"><?php echo ($product["pro_name"]); ?></textarea><br><span class="yz_alert" id="message_alert"></span>
	<div class="clear"></div>
	</div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">Name *</div>
	<div class="inquiryright"><input  name="linkname" id="linkname"><span class="yz_alert" id="linkname_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">Phone</div>
	<div class="inquiryright"><input  name="phone" id="phone"><span class="yz_alert" id="phone_alert"></span></div>
	<div class="clear"></div>
</div>


<div class="inquiryinfo">
    <div class="inquiryleft">E-mail *</div>
	<div class="inquiryright"><input  name="email" id="email"><span class="yz_alert" id="email_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">Code *</div>
	<div class="inquiryright"><input type="text" class="input" id="code_char" name="code" maxlength="6" style="width:60px;"/>&nbsp;<img src="__APP__/code_char.php" id="getcode_char" title="Click Refresh" align="absmiddle" style="height:25px"><span class="yz_alert" id="code_char_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
<input type="hidden" name="prodid" value="<?php echo ($product['pid']); ?>"/>
<div id="inbut"><input class="productbutton" type="submit" value="Submit"  name="submit" style="text-align:center"/></div>
</div>
</form>

<div class="clear"></div>
</div>
</div>
</div>

<script type="text/javascript">
function jump(){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
  location.href="<?php echo U('/inquiry');?>"
  }
}
</script>



<!--<div style="width:100%; height:85px; margin:0 auto;">
  <div style="text-align:center; width:100%; margin-bottom:20px;"><a href="http://m.czwayon.com/" onFocus="blur()"><img src="__TMPL__WAP/img/cn.jpg" style="vertical-align:middle;">&nbsp;中文版</a>&nbsp;&nbsp;&nbsp;<a href="http://wap.czwayon.com/" onFocus="blur()"><img src="__TMPL__WAP/img/en.jpg" style="vertical-align:middle;">&nbsp;English</a>&nbsp;&nbsp;&nbsp;</div>
</div> -->

<div style="width:100%; margin-top:20px; padding:2% 0; background:#223c7c; text-align:center; font-size:16px; color:#FFFFFF; line-height:20px;"><a href="mailto:<?php echo chaifen($about['email'],0);?>" onclick="jump();turn_sta(3,2)" style="font-size: 16px;color: #fff">E-mail: <?php echo chaifen($about['email'],0);?></a><!----></div>
<div class="page_contact" style="margin-top:10px;"><span> <?php $nowtime=date("Y",time()); $currtime=2018; ?>
            <?php if($nowtime > $currtime): ?>CopyRight&nbsp;©&nbsp;<?php echo ($currtime); ?>-<?php echo ($nowtime); else: ?>CopyRight&nbsp;©&nbsp;<?php echo ($nowtime); ?>&nbsp;-<?php endif; ?>             
             &nbsp; <?php echo ($about['company_name']); ?> All Rights Reserved.</span><br />Tel: <a data-ajax="false" href="tel:<?php echo chaifen($about['mobile'],0);?>" style="font-size:14px;color: #333333; "data-shadow="false" onclick="turn_sta(6,2);call('<?php echo chaifen($about['mobile'],0);?>');"><?php echo chaifen($about['phone'],0);?></a>&nbsp;<a data-ajax="false" href="tel:<?php echo chaifen($about['phone'],1);?>" style="font-size:14px; color:#333333;"data-shadow="false" onclick="turn_sta(6,2);call('<?php echo chaifen($about['phone'],1);?>');"><?php echo chaifen($about['phone'],1);?></a><br/><span style="font-size:14px;color: #333333; ">Fax: <?php echo chaifen($about['fax'],0);?> </span>&nbsp;&nbsp;&nbsp;<br />Add: <?php echo ($about['address']); ?><br />
</div>

<script type="text/javascript">
function jump(){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
  location.href="<?php echo U('/inquiry');?>"
  }
}
function skypeCheck(){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
  wechatwar();
  } else{
  $('#skypeCheckNotice').css('display','block');}
  } 
  function hrefskp(){
    location.href="skype:<?php echo chaifen($about['msn'],0);?>?chat";
  }
  function wechatwar(){
    $('#share').css('display', 'block');
  }
</script>
<div style="width:100%; height:48px; margin:0 auto">&nbsp;</div>
<div data-role="footer" data-position="fixed" class="foot" data-tap-toggle="false">
  <div data-role="navbar" style="padding:0px; margin:0px;">
    <ul style="width:100%; background:#223c7c;" id="nav" data-shadow="false" >
      <li><a data-ajax="false" href="<?php echo U('/');?>" style="font-size:14px;"data-shadow="false"><img  src="__TMPL__WAP/img/home.png"></br>
        Home</a></li>
      <li><a data-ajax="false" style="font-size:15px;" data-shadow="false" onclick="skypeCheck();turn_sta(4,2)"><img src="__TMPL__WAP/img/skype.png" border="0" alt="Skype"><br>Skype</a></li>
      <li><a data-ajax="false" href="mailto:<?php echo chaifen($about['email'],0);?>" style="font-size:14px;" onclick="jump();turn_sta(3,2)"><img  src="__TMPL__WAP/img/email.png"></br>
        E-mail</a></li>
      <li><a data-ajax="false" href="<?php echo U('/contactus');?>" data-transition="slide" style="font-size:14px;" onclick="turn_sta(2,2)"><img src="__TMPL__WAP/img/add.png" border="0"><br>Contact</a></li>
      <li style="background:none"><a data-ajax="false" href="<?php echo U('/inquiry');?>"  style="font-size:14px;"><img src="__TMPL__WAP/img/msg.png"></br>
        Inquiry</a></li>
      <div style="clear:both"></div>
    </ul>
  </div>
</div>
</div>

<div id="skypeCheckNotice" style=" position:fixed;z-index: 10000; bottom:85px; width:100%; text-align:center; display:none;">
<img src="__TMPL__WAP/img/skypeshow.png" style="width:100%"/>
    <form action="http://www.skype.com/go/download" method="get" target="_blank" style="padding:0 1%; position:relative; max-width:440px; margin-top:-35px; z-index:1000;">
      <input type="submit" value="Download Skype" style="float: left; padding:3px 5px">
      <input type="button" name="haveskype" onclick="hrefskp()" value="Already have Skype" style="float: right;padding:3px 5px">
    </form>
</div>  

<div id="share" style=" display:none;background-size:100%; width:100%; height:100%; position:fixed; top:0px; z-index:999999;">&nbsp;</div>
</body>
</html>