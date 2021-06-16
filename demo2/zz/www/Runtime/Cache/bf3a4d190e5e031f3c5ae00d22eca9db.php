<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,height=device-height"/>
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="black" name="apple-mobile-web-app-status-bar-style" />
<meta name="format-detection" content="telephone=no">
<title><?php echo ($seo['title']); ?></title>
<meta name="Keywords" content="<?php echo ($seo['keywords']); ?>"/>
<meta name="Description" content="<?php echo ($seo['description']); ?>"/>
<link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/common.css?<?php echo time();?>.css"/>
<script type="text/javascript" src="__TMPL__WAP/js/jquery.js"></script>
</head>
<body>
<div class="wrap" style="padding-bottom:50px;">
<!--logo代码块开始-->
	<div class="logo"  style="width:96%;margin:0 auto;">
    	<div class="logok">
        	<a href="<?php echo C("yuming");?>"><img src="<?php echo ($logo); ?>" alt="<?php echo ($company_info['logo_title']); ?>" title="<?php echo ($company_info['logo_title']); ?>" border="0"/></a>
        </div>
    </div>
<!--logo代码块结束-->


<!--导航代码块开始-->
<script>
$(function(){

  $(window).scroll(function(){
  if($(document).scrollTop()>50){
  $("#navlist").hide();
  }
  });
  
 var navcount=1;
 $("#shownav").click(function(){
     if(navcount%2==0){
     $("#navlist").hide();
	 }
	 else{
	 $("#navlist").show();
	 }
	 
	  navcount++;
 });
})
</script>
<div style="position:relative;background:#019ddd;padding:10px;color:#ffffff;" id="shownav">
网站导航 >>
	<div class="navigation" style="left:30%;position:absolute;z-index:200;background:#019ddd;top:10px;display:none;" id="navlist">
    	<ul>
        	<?php if(is_array($web_navigation)): $i = 0; $__LIST__ = $web_navigation;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li style="padding-left:30px;"><a href="<?php echo ($vo['url']); ?>"  <?php if( $vo['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($vo['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
        
        </ul>
		<div class="clear"></div>
    </div>
</div>	
<!--导航代码块结束-->


<!--继承内容代码块开始-->

<!--面包屑代码块开始-->
<div class="context">首页 > 客户反馈</div>
 	

		
		<!--询盘提交-->
		<style>
body{font-size:12px;}
.inquiry{width:96%;padding:10px 0;margin:0 auto;}
.inquiry h2{border-bottom:1px solid #ccc;padding-bottom:5px; font-family:'微软雅黑';color:#333333;}
.inquiryinfo{padding-top:10px;padding-bottom:10px;width:100%;}
.inquiryinfo input{height:20px;line-height:20px;padding:2px;border:1px solid #999;width:130px;}
.inquiryinfo textarea{padding:2px;border:1px solid #999;}

.inquiryleft{float:left;width:80px;}
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
$("#message_alert").html("*反馈内容不能为空");
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
$("#phone_alert").html("");
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
			 $("#code_char_alert").html("*验证码错误");
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
<h2>客户反馈</h2>
<form action="__APP__/savefeedback" method="post" onsubmit="return yz_submit();">
<div class="inquiryinfo">
    <div class="inquiryleft">反馈内容 *</div>
	<div class="inquiryright"><textarea rows="5" cols="30" name="message" id="message"></textarea><br><span class="yz_alert" id="message_alert"></span>
	<div class="clear"></div>
	</div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">您的姓名 *</div>
	<div class="inquiryright"><input  name="linkname" id="linkname"><span class="yz_alert" id="linkname_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">您的电话 *</div>
	<div class="inquiryright"><input  name="phone" id="phone"><span class="yz_alert" id="phone_alert"></span></div>
	<div class="clear"></div>
</div>


<div class="inquiryinfo">
    <div class="inquiryleft">联系信箱</div>
	<div class="inquiryright"><input  name="email" id="email"><span class="yz_alert" id="email_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">验证码 *</div>
	<div class="inquiryright"><input type="text" class="input" id="code_char" name="code" maxlength="6" style="width:60px;"/>&nbsp;<img src="__APP__/code_char.php" id="getcode_char" title="看不清，点击换一张" align="absmiddle"><span class="yz_alert" id="code_char_alert"></span></div>
	<div class="clear"></div>
</div>

<div class="inquiryinfo">
<input class="productbutton" type="submit" value="提&nbsp;&nbsp;交"  name="submit"/>
</div>
</form>

<div class="clear"></div>
</div>	


	
<!--代码块结束-->

<!--继承内容代码块结束-->


<script>
$(function(){
  $("#backtop").click(function(){
        $("html,body").scrollTop(0);
  });
  
  $(window).scroll(function(){
			if($(document).scrollTop()>50){
				$("#backtop").show();
			}else{
				$("#backtop").hide();
			}
		})
  
})
</script>
<style>
.backtop{z-index:2000;display:none;width:32px;position:fixed;background:#cccccc;cursor:pointer;border:1px solid #999999;bottom:50px;right:0px;padding:5px;text-align:center;}
.backtop:hover{background:#e69d11;color:#ffffff;}
</style>
<div class="backtop" id="backtop">返回顶部</div>

	<div class="navigation" style="border:0;width:100%;height:40px;line-height:40px;position:fixed;background:#e69d11;z-index:5000;bottom:0;">
    	<div style="float:left;width:22%;margin-left:20px;"><a href="tel:40008888888" style="color:#ffffff;font-size:18px;text-decoration:none;">电话</a></div>
		<div style="float:left;width:22%;margin-left:10px;"><a href="mailto:dzj@one-all.com" style="color:#ffffff;font-size:18px;text-decoration:none;">邮箱</div>
		<div style="float:left;width:22%;margin-left:10px;"><a href="feedback.html" style="color:#ffffff;font-size:18px;text-decoration:none;">反馈</a></div>
		<div style="float:left;width:22%;"><a href="__APP__" style="color:#ffffff;font-size:18px;text-decoration:none;">首页</a></div>
		<div class="clear"></div>
    </div>

</body>
</html>