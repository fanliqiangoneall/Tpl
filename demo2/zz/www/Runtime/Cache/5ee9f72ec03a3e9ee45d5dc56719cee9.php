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
<script type="text/javascript">
if(!document.referrer){
$.ajax({
  type: 'POST',
  url: '<?php echo U("/inchina","","");?>',
  data: '',
  success: function(data){if(data!="cn"){location.href = 'http://en.yue-da.com';}},
  async:false
});
}
</script>
<link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/style.css">
</head>
<body>
<div data-role="page" id="index">

<div style="width:100%;" data-role="header">
  <div style="width:100%; margin:auto; text-align:center"><a href="<?php echo U('/');?>"><img src="__TMPL__WAP/img/logo.jpg" style=" width:100%;display:inline-block" border="0"/></a></div>
</div>
<div class="page_Menu">
  <ul>
    <li id="menu1" style="width:15%"><a href="<?php echo U('/');?>"><h2>Home</h2></a></li>
    <li id="menu2" style="width:22%"><a href="<?php echo U('/aboutus');?>"><h2>About us</h2></a></li>
    <li id="menu3" style="width:22%"><a href="<?php echo U('/product');?>"><h2>Products</h2></a></li>
    <li id="menu4" style="width:16%"><a href="<?php echo U('/new_category/classid/1355');?>"><h2>News</h2></a></li>
    <li id="menu5" style="width:25%"><a href="<?php echo U('/contactus');?>" onclick="turn_sta(2,1)"><h2>Contact us</h2></a></li>
  </ul>
  <div style="clear:both"></div>
</div>


<script type="text/javascript">
$(function(){
	$('#menu4').css('background','#000');
	$('#menu4 h2').css('color','#fff');
})
</script>
<div data-role="content">
  <div class="r_top"><a href="<?php echo U('/');?>">Home</a>&nbsp;>>&nbsp;News</div>
  <div class="page_inlmTitle"><h2><?php echo ($newscate['class_name']); ?></h2></div>	
  <div class="page_main">
          <ul>
            <?php if(is_array($newscatelist)): $i = 0; $__LIST__ = $newscatelist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$newscatelist): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U('/new_detail',array('nid'=>$newscatelist["nid"]));?>"><div style="width:100%; background:#fff; border-bottom:#eaeaea solid 1px;">
       <div style="width:88%; margin:auto; line-height:22px;padding-top:10px;color:#515151; font-size:14px;"><?php echo ($newscatelist['title']); ?></div>
       <div style="color:#8e8d8d; padding-bottom:13px; font-size:11px; width:88%; margin:auto;"><?php echo date('Y-m-d',$newscatelist['created']);?></div></div></a></li><?php endforeach; endif; else: echo "" ;endif; ?>                 
          </ul>
          <div style="clear:both;"></div>
          <div class="main_page"><?php echo ($page); ?></div>
  </div>		

</div>

<div class="page_contact">
  <img src="__TMPL__WAP/img/foot_email.png" style="vertical-align:middle"/>&nbsp;<a data-ajax="false" href="mailto:<?php echo chaifen($about['email'],0);?>" onclick="turn_sta(3,2)" style=" color:#fff;"><?php echo chaifen($about['email'],0);?></a><br><br>
  <!--<a href="<?php echo U('/');?>"><img src="__TMPL__WAP/img/en.png" style="vertical-align:middle" border="0">&nbsp;English</a>&nbsp;&nbsp;<a href="http://m.lhcoffeetime.com"><img src="__TMPL__WAP/img/cn.png" style="vertical-align:middle" border="0">&nbsp;中文</a>
  <br>-->
  Copyright&nbsp;©2017 <a href="<?php echo U('/');?>" style="color: #575757;"><?php echo ($about['company_name']); ?></a> All Rights Reserved.<br>Tel: <?php echo chaifen($about['phone'],0); echo htmlspecialchars_decode(get_web_analysis());?> 
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
<div style="width:100%; height:48px; margin:0 auto">&nbsp;</div>
<div data-role="footer" data-position="fixed" class="foot" data-tap-toggle="false">
  <div data-role="navbar" style="padding:0px; margin:0px;">
    <ul style="width:100%; background:#797979;" id="nav" data-shadow="false" >
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

<div id="share" style=" display:none;background:url(__TMPL__WAP/img/skypeshare.png) no-repeat; background-size:100%; width:100%; height:100%; position:fixed; top:0px; z-index:999999;">&nbsp;</div>
</body>
</html>