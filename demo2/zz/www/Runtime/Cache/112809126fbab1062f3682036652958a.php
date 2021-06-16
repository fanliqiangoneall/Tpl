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


<style>
#detail img{ max-width:100%;}
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
    <div class="title_pro">News</div>
    <div style="clear:both;"></div>
  </div>        
  	<div style="width:100%; height:10px;"></div>
	<div style='width:90%; padding:12px 5%; text-align:center; border-bottom:1px solid #cccccc;'><span style='font-size:15px; font-weight:bold; color:#252525; line-height:24px;'><?php echo ($news['title']); ?></span><br /><span style='color:#8e8d8d; font-size:13px;'><?php echo date("Y-m-d",$news['created']);?></span></div>
	<div id="detail" style='width:90%; margin:0 auto; padding:15px 0px; color:#515151; font-size:14px; line-height:24px;'><?php echo htmlspecialchars_decode($news['body']);?></div>
	<div class="page_inMore">
     	<span onClick="history.go(-1)">Back</span> 
        <br>
     </div>
     <div style="width:96%;padding:0 2% 20px 2%">
      <ul>
        <li style="float:left; width:100%; list-style:none;line-height:16px;">Prev: 
         <?php if($newprev[0]['title'] == ''): ?>No
         <?php else: ?>
          <a href="<?php echo U('/new_detail',array('nid'=>$newprev[0]['nid']));?>" onfocus="blur()"><?php echo ($newprev[0]['title']); ?></a><?php endif; ?>
        </li>
        <li style="float:left;width:100%;list-style:none; line-height:16px;">Next: 
          <?php if($newnext[0]['title'] == ''): ?>NO
         <?php else: ?>
          <a href="<?php echo U('/new_detail',array('nid'=>$newnext[0]['nid']));?>" onfocus="blur()"><?php echo ($newnext[0]['title']); ?></a><?php endif; ?>
        </li>
      </ul>
      <div style="clear:both"></div>
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