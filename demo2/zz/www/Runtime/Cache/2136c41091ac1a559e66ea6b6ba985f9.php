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
<script type="text/javascript" src="__TMPL__WAP/js/jquery.js"></script>
<script>var path="";</script>
<script type="text/javascript" src="__TMPL__WAP/js/statitics.js"></script>
<script src="__TMPL__WAP/js/jquery-1.8.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/style.css">
<?php echo htmlspecialchars_decode(get_web_analysis_head());?>

<?php echo htmlspecialchars_decode(get_email_code());?>
<?php echo htmlspecialchars_decode(get_skype_code());?>
<?php echo htmlspecialchars_decode(get_phone_code());?>
<?php echo htmlspecialchars_decode(get_qq_code());?>
</head>
<body>
<script>
  $(document).ready(function(){
    $("#menu_btn").click(function(){
      $('.menu').animate({left:'0'},100);
      $('.menu_rsp').show();
    });
    $('.menu_rsp').click(function() {
      $(this).hide();
      $('.menu').animate({left:'-52%'},100);
    });
  })
</script>
<div data-role="page" id="index">
<div style="width:100%; "data-role="header">
  <div style="width:100%; margin:auto; background:#333333;"><a href="<?php echo U('/');?>"><img src="__TMPL__WAP/img/logo.jpg" style="display:block; max-width:100%;" border="0"/></a></div>
</div>
<div id="menu_btn"><img src="__TMPL__WAP/img/menu_btn.png" alt="" width="25" /></div>
<div class="menu_rsp"></div>
<div class="menu ">
  <h1 style="border-bottom: 1px dashed #e3e3e3;padding: 3% 0;text-align: center;">MENU</h1>
  <ul>
    <li id="menu1"><a data-ajax="false" href="<?php echo U('/');?>"> Home</a></li>
    <li id="menu3"><a data-ajax="false" href="<?php echo U('/aboutus');?>">About Us</a></li>
    <li id="menu2"><a data-ajax="false" href="<?php echo U('/product');?>">Products</a></li>
    <li id="menu4"><a data-ajax="false" href="<?php echo U('/news');?>">News</a></li>
    <li id="menu5"><a data-ajax="false" href="<?php echo U('/contactus');?>" onclick="turn_sta(2,1)">Contact Us</a></li>
  </ul>
</div>


<div><img src="__TMPL__WAP/img/in_banner.jpg" border="0" width="100%" /></div>
<div data-role="content" style="padding-top:15px;">
  <div class="main_top"><a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;Inquiry</div>
  <div class="lmtitle">Inquiry</div>
  <div style="width:100%; height:10px;"></div>
  <div class="page_main">
  <style>
body{font-size:12px;}
.inquiry{width:96%;padding:0 0;margin:0 auto;}
.inquiry h2{border-bottom:1px solid #ccc;padding-bottom:5px; font-family:'Arial';color:#333333;}
.inquiryinfo{padding-bottom:10px;width:100%;}
.inquiryinfo input{height:20px;line-height:20px;padding:2px;border:1px solid #999;width:130px; font-family:'Arial';}
.inquiryinfo textarea{padding:2px;border:1px solid #999; width:100%; font-family:'Arial';}

.inquiryleft{float:left;width:100%;}
.inquiryright{float:left;width:100%;}
.productbutton{
background: #353535;
color: #ffffff;
border: 0 !important;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
cursor: pointer;
height: 30px !important;
padding: 0 10px 0 10px !important;
width:80px !important;
font-family:'Arial';
}
.productbutton:hover {
background: #353535;
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

</script>
<script src="__TMPL__WAP/js/is_email.js"></script>
<div class="inquiry" id="zixun">
<form action="__APP__/saveinquiry" method="post" onsubmit="return yz_submit();">
<div class="inquiryinfo">
    <div class="inquiryleft">Message *</div>
	<div class="inquiryright"><textarea rows="5" cols="30" name="message" id="message"><?php echo ($product["pro_name"]); ?></textarea><span class="yz_alert" id="message_alert"></span>
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
	<div class="inquiryright"><input type="text" class="input" id="code_char" name="code" maxlength="6" style="width:60px;"/>&nbsp;<img src="__APP__/code_char.php" id="getcode_char" title="Click Refresh" align="absmiddle"><span class="yz_alert" id="code_char_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
<input type="hidden" name="prodid" value="<?php echo ($product['pid']); ?>"/>
<div id="inbut"><input class="productbutton" type="submit" value="Submit"  name="submit" data-ajax="false"/></div>
</div>
</form>

<div class="clear"></div>
</div>

  </div>
</div>

<div class="page_bottom_mail"><a href="mailto:<?php echo chaifen($about['email'],0);?>" onFocus="blur()" onClick="turn_sta(3,2);gtag_report_conversion_email();"><img src="__TMPL__WAP/img/bottom_mail.png" border="0" style="vertical-align:middle;" />&nbsp;&nbsp;<?php echo chaifen($about['email'],0);?></a></div>
<div class="page_contact">
  <?php $nowtime=date("Y",time()); $currtime=2018; ?>
            <?php if($nowtime > $currtime): ?>CopyRight&nbsp;©&nbsp;<?php echo ($currtime); ?>-<?php echo ($nowtime); else: ?>CopyRight&nbsp;©&nbsp;<?php echo ($nowtime); ?>&nbsp;-<?php endif; ?>&nbsp;<?php echo ($about['company_name']); ?>　<?php echo htmlspecialchars_decode(get_web_analysis());?>
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
}	else{
$('#skypeCheckNotice').css('display','block');}
}	
function hrefskp(){
	location.href="skype:<?php echo chaifen($about['msn'],0);?>?chat";
}
function wechatwar(){
	$('#share').css('display', 'block');
}
</script>
<div style="width:100%; height:50px; margin:0 auto">&nbsp;</div>
<div data-role="footer" data-position="fixed" class="foot" data-tap-toggle="false">
  <div data-role="navbar" style="padding:0px; margin:0px;">
    <ul style="width:100%; background:#363636;" id="nav" data-shadow="false" >
      <li><a data-ajax="false" href="<?php echo U('/');?>" style="font-size:15px;" data-shadow="false"><img src="__TMPL__WAP/img/home.png" border="0" alt="Home"><br>Home</a></li>
      <li><a data-ajax="false" onclick="skypeCheck();turn_sta(4,2);gtag_report_conversion_skype();" style="font-size:15px;" data-shadow="false"><img src="__TMPL__WAP/img/footerimg/skype.png" border="0"></br>
          Skype</a></li>
      <li><a data-ajax="false" href="mailto:<?php echo chaifen($about['email'],0);?>" style="font-size:15px;" onclick="jump();turn_sta(3,2);gtag_report_conversion_email();"><img  src="__TMPL__WAP/img/footerimg/2.png"></br>
        E-mail</a></li>
      <li><a data-ajax="false" href="<?php echo U('/contactus');?>"  data-transition="slide" style="font-size:15px;" onclick="turn_sta(2,2)"><img  src="__TMPL__WAP/img/footerimg/4.png"></br>
        Contact</a></li>
      <li><a data-ajax="false" href="<?php echo U('/inquiry');?>"  style="font-size:15px;"><img src="__TMPL__WAP/img/footerimg/5.png"></br>
        Inquiry </a></li>
      <div style="clear:both"></div>
    </ul>
  </div>
</div>
</div>
<div id="skypeCheckNotice" style=" position:fixed;z-index: 10000; bottom: 69px; width:100%; text-align:center; display:none;">
<img src="__TMPL__WAP/img/skypeshow.png" style="width:100%"  class="img-responsive" />
    <form action="http://www.skype.com/go/download" method="get" target="_blank" style=" padding:0 1%; position:relative; max-width:440px; margin-top:-30px; z-index:1000;">
      <input type="submit" value="Download Skype" style="float: left;">
      <input type="button" name="haveskype" onclick="hrefskp()" value="Already have Skype" style="float: right;">
    </form>
</div>
<div id="share" style=" display:none;background:url(__TMPL__WAP/img/share.png) no-repeat; background-size:100%; width:100%; height:100%; position:fixed; top:0px; z-index:99999;">&nbsp;</div>
<div id="goTop"><a href="javascript:jumpTop()"><img src="__TMPL__WAP/img/top.png" alt=""/></a></div>
<script>
  $(window).scroll( function() {
    scrollTop=$(document).scrollTop();
    if(scrollTop>50){
      $('#goTop').show();
    }else if(scrollTop<50){
      $('#goTop').hide();
    }
  });
  function jumpTop(){
    $('html,body').animate({scrollTop:'0'},1000);
  }
</script>
</body>
</html>