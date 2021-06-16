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
<link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/style.css?<?php echo time();?>.css"/>
<script type="text/javascript" src="__TMPL__WAP/js/jquery.js"></script>
<script>var path="";</script>
<script type="text/javascript" src="__TMPL__WAP/js/statitics.js"></script>
</head>
<body>
<div class="container" style=" padding-bottom:50px;">
<div class="header">
    <div class="logo">
    	 
<a href="<?php echo C("yuming");?>"><?php echo ($logo); ?></a>
</div>
<div class="menu"><a href="<?php echo U('/');?>">Home</a>&nbsp;&nbsp;<a href="<?php echo U('/aboutus');?>">About</a>&nbsp;&nbsp;<a href="<?php echo U('/contactus');?>">Contact</a>&nbsp;&nbsp;<a href="<?php echo U('/product');?>">Product</a>&nbsp;&nbsp;<a href="<?php echo U('/inquiry');?>">Inquiry</a></div>
   
</div>
<!--继承内容代码块开始-->

<div class="content">
  <div class="region region-content">
    <div id="block-system-main" class="block block-system">
      <div class="content">
        <div class="title">Inquiry</div>
        <div class="content">
          <table width="500" border="1" align="center" cellpadding="3" cellspacing="0">
       <tr>
        <th bgcolor="#cccccc" style="text-align:center">MESSAGE</th>
       </tr>
       <tr>
        <td style="text-align:center; padding:15px 0"> 
         Thanks for your information,we will answer you as soon as possible !
      </td>
       </tr>
      </table>
<?php echo htmlspecialchars_decode(get_inquiry_code());?>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--继承内容代码块结束-->


  <div style="margin:auto; text-align:center; padding-top:10px;">Copyright&nbsp;&nbsp;© <a href="<?php echo U('/');?>"><?php echo ($about['company_name']); ?></a><br>
    All rights Reserved<br>
    Designed by: <a href="http://www.one-all.com" target="_blank" title="ZHONG HUAN INTERNET">ZHONG HUAN INTERNET</a> <br>
    <?php echo htmlspecialchars_decode(get_web_analysis()); echo htmlspecialchars_decode(get_google());?>
  </div>
</div>
<div style="position:fixed; z-index:999; width:100%; left:0px; bottom:0px; height:42px; font-size:0; background:#ccc">
  <script type="text/javascript">
        function jump(){
			var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
	location.href="<?php echo U('/inquiry');?>"
 	}
			
			}
        </script>
  <span class="bottom_button" style="background-image:url(__TMPL__WAP/img/tel.png); background-position:50% 25%; background-repeat:no-repeat; "><a href="tel:<?php echo chaifen($about['phone'],0);?>" onclick="call('<?php echo chaifen($about['phone'],0);?>');turn_sta(6,2)" onblur="blur()">Tel</a></span>
  <span class="bottom_button" style="background-image:url(__TMPL__WAP/img/mail.png); background-position:50% 25%; background-repeat:no-repeat; "><a href="mailto:<?php echo chaifen($about['email'],0);?>" onblur="blur()" onclick="jump();turn_sta(3,2)">Mail</a></span>
  <span class="bottom_button" style="background-image:url(__TMPL__WAP/img/map.png); background-position:50% 25%; background-repeat:no-repeat; "><a href="<?php echo U('/contactus');?>" onblur="blur()">Contact</a></span>
  <span class="bottom_button" style="background-image:url(__TMPL__WAP/img/share.png); background-position:50% 25%; background-repeat:no-repeat; "><a onblur="blur()" href="<?php echo U('/product');?>">Product</a></span>
  <span class="bottom_button" style="background-image:url(__TMPL__WAP/img/contact.png); background-position:50% 25%; background-repeat:no-repeat; "><a href="<?php echo U('/inquiry');?>" onblur="blur()">Inquiry</a></span> 
</div>

</body>
</html>