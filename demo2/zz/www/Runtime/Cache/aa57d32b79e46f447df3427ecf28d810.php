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


<script>
$(document).ready(function () {
	$('#menu4').removeClass().addClass("menuon1");
});
</script>
<div><img src="__TMPL__WAP/img/in_news.jpg" border="0" width="100%" /></div>
<div data-role="content" style="padding-top:15px;">
    <div class="main_top"><a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;News</div>
  <div style="width:100%; clear:both; height:0;"></div>
     <div class="news">    
           <?php if(is_array($allnewclass)): $i = 0; $__LIST__ = array_slice($allnewclass,0,5,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$allnewclass): $mod = ($i % 2 );++$i;?><div class="lmtitle"><span><a href="<?php echo U('/new_category',array('classid'=>$allnewclass["classid"]));?>" style="color:#000">More>></a></span><?php echo ($allnewclass['class_name']); ?></div>
              <div style="width:100%; height:5px;"></div>
              <div style="width:100%;" <?php echo ($z=0); ?>>
               <?php if(is_array($allnews)): $i = 0; $__LIST__ = $allnews;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$allnews_new): $mod = ($i % 2 );++$i; if($allnews_new['news_class'] == $allnewclass['classid'] ): ?><a data-ajax='false' href="<?php echo U('/new_detail',array('nid'=>$allnews_new["nid"]));?>" key="<?php echo ($z++); ?>" <?php if($z > 5): ?>style="display:none;"<?php endif; ?>>
                     <div style="width:100%; background:#fff; border-bottom:#eaeaea solid 1px;">
                       <div style="width:94%; margin:auto; line-height:22px;padding-top:10px;color:#515151; font-size:16px;"><?php echo ($allnews_new['title']); ?></div>
                       <div style="color:#8e8d8d; font-size:11px; width:94%; margin:auto;"><?php echo date("M d, Y",$allnews_new['created']);?></div>
                       <div style="width:94%; margin:auto; margin-bottom:15px; line-height:22px; color:#515151; font-size:14px;"><?php echo subtxt($allnews_new['news_description'],100);?></div>
                     </div>
                       
              </a><?php endif; endforeach; endif; else: echo "" ;endif; ?>       
              </div>
              <div style="clear:both; height:15px"></div><?php endforeach; endif; else: echo "" ;endif; ?>     
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