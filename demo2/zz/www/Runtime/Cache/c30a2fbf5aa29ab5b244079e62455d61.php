<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head><script>var urlString="<?php echo ($urlString); ?>"; if(urlString!=""){location.href=urlString;}</script>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
<title><?php echo ($seo['page_title']); ?></title>
<meta name="Keywords" content="<?php echo ($seo['page_keywords']); ?>"/>
<meta name="Description" content="<?php echo ($seo['page_descriptions']); ?>"/>
<!--是否有手机站-->
<?php if(gethaswap() == '1'): ?><script>
function browserRedirect(){var c=navigator.userAgent.toLowerCase();var h=c.match(/ipad/i)=="ipad";var i=c.match(/iphone os/i)=="iphone os";var g=c.match(/midp/i)=="midp";var d=c.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";var e=c.match(/ucweb/i)=="ucweb";var a=c.match(/android/i)=="android";var b=c.match(/windows ce/i)=="windows ce";var j=c.match(/windows mobile/i)=="windows mobile";if((i||g||d||a||j)){stringObj="__SELF__";var f=stringObj.replace("static/1","");f=f.replace("/index.php/Index/index/","mindex.html");window.location.href=f}}browserRedirect();
</script><?php endif; ?>
<script>var path="";</script>
<link href="__TMPL__demo2/css/style.css" rel="stylesheet">
<link href="__TMPL__demo2/css/animate.min.css" rel="stylesheet">
<script type="text/javascript" src="__TMPL__demo2/js/jquery-1.9.1.min.js"></script>
</head>
<body>
<?php echo htmlspecialchars_decode(get_email_code());?>
<?php echo htmlspecialchars_decode(get_skype_code());?>
<?php echo htmlspecialchars_decode(get_phone_code());?>
<div class="top_headbg">
  <div id="animate1">
    <div class="top_head">
       <ul>
          <li>Welcome to <?php echo ($about['company_name']); ?></li>
          <li style="float:right; margin-top:11px;"><!--[if gt IE 8]>
        <!-- Go to www.addthis.com/dashboard to customize your tools -->
        <div class="addthis_sharing_toolbox"></div>
                  <!-- Go to www.addthis.com/dashboard to customize your tools -->
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52d9da3543f78f25"></script>
        <![endif]--></li>
          <li style="float:right; margin-right:5px;">Share: </li>
       </ul>
       <div class="clear"></div>
    </div>
  </div>
</div>
<div class="page_Top">
   <div class="page_Logo">
     <div id="animate2">
      <ul>
         <li><a href="<?php echo U('/');?>"><?php echo ($logo); ?></a></li>
         <li style="margin-left:27px; padding-top:28px;">Agricultural Machinery and<br />
Marine Machinery Manufacturing Co., Ltd.</li>
      </ul>
     </div>
   </div>
   <div id="animate3">
      <div class="page_HeadRight">
        <ul>
          <li style="padding-top:2px;">E-mail:</li>
          <li><a href="mailto:<?php echo chaifen($about['email'],0);?>" onFocus="blur()" onClick="turn_sta(3,1);goog_report_conversion_email();"><?php echo chaifen($about['email'],0);?></a></li>
        </ul>
      </div>
   </div>
   <div class="clear"></div>
</div>
<script type="text/javascript">
jQuery('#animate1').removeClass().addClass('fadeInDown');
jQuery('#animate2').removeClass().addClass('fadeInLeft');
jQuery('#animate3').removeClass().addClass('fadeInRight');
</script>



<div id="animate6">
<?php if($banner != ''): if(is_array($banner)): $i = 0; $__LIST__ = array_slice($banner,0,1,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$banner): $mod = ($i % 2 );++$i;?><div class="in_banner" style="background:url(<?php echo getimgurl($banner['ad_pic']);?>) center no-repeat"></div><?php endforeach; endif; else: echo "" ;endif; ?>
<?php else: ?>
<div class="in_banner" style="background:url(__TMPL__demo2/img/inbanner.jpg) center no-repeat"></div><?php endif; ?>
</div>
<link href="__TMPL__f-chinajxjs-navigation/navigation.css" rel="stylesheet">
<div class="index_navigation_menubg">
  <div id="index_navigation_animate">
    <div class="index_navigation_page_Menu">
        <ul>
          <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a></li>
            <li class="index_navigation_menu_line" style="padding:0; line-height:58px; color:#b8b8b8;">|</li><?php endforeach; endif; else: echo "" ;endif; ?>
            <li class="index_navigation_top_search" style="float:right; width:39px; margin:0; height:58px !important; display:block;"><img src="__TMPL__demo2/img/top_search.jpg"><div class="index_navigation_search_list" id="frn_l_13" style="display:none; right:50px;">
              <div class="index_navigation_Page_Search">
                <form name="find" action="<?php echo U('/search');?>" method="post"  accept-charset="UTF-8"  onsubmit="return CheckForm(this);">
                    <div style="width:182px; float:left; border:none;">
                      <input type="text" name="keywords" id="keywords1" value="Search" style="color:#737373; width:182px; height:26px; border:none; line-height:26px;" onfocus="OnFocusFun(this,&#39;Search&#39;)" onblur="OnBlurFun(this,&#39;Search&#39;)">
                    </div>
                    <div style="width:21px; float:right; margin-top:4px;">
                      <input type="image" src="__TMPL__demo2/img/dot.png" height="18" name="submit" class="submit">
                    </div>
                </form>
              </div>
              <div class="clear"></div>
        </div></li>
        </ul>
        <div class="clear"></div>
    </div>
  </div>
</div>
<script type="text/javascript" src="__TMPL__f-chinajxjs-navigation/navigation.js"></script>

<div class="r_mbx"><img src="__TMPL__demo2/img/in_home.jpg" border="0" style="vertical-align:middle;" />&nbsp;<a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;"<?php echo ($pro_name); ?>" Comment List</div>

<div class="page_Main">
    <div class="page_RightTitle">Comment List</div>
    <div class="page_RightMain">
       <?php if(is_array($list)): $k = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$list): $mod = ($k % 2 );++$k;?><div style="width:100%;padding:5px 0;">
              <div style="float:left;width:5%;"><?php echo ($k); ?></div>
              <div style="float:left;width:72%;"><?php echo ($list["content"]); ?></div>
              <div style="float:right;width:20%; text-align:right;"><?php echo date("Y-m-d H:i:s",$list["adddate"]);?></div>
              <div style="clear:both"></div>
          </div><?php endforeach; endif; else: echo "" ;endif; ?>
        <div class="main_page"><?php echo ($page); ?></div>
    </div>
    <div style="clear:both"></div>
</div>

<link href="__TMPL__f-chinajxjs-bottom/bottom.css" rel="stylesheet">
<div class="index_bottom_footer">
  <div id="index_bottom_animate">
   <div class="index_bottom_menu">
      <ul>
          <?php if(is_array($web_navigation)): $kkk = 0; $__LIST__ = array_slice($web_navigation,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($kkk % 2 );++$kkk;?><li><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,2)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
  <div style="width:100%; height:0px; border-bottom:1px solid #262626; margin:auto;"></div>
  <div class="index_bottom_bottom1">
    <div id="index_bottom_animate_1">
      <div class="index_bottom_contact">
         <div class="index_bottom_tel">
            <ul>
               <li><img src="__TMPL__demo2/img/bottom_tel.png" border="0" /></li>
               <li style="padding-top:10px; padding-left:13px;"><span>Tel:</span><br /><?php echo chaifen($about['phone'],0);?></li>
            </ul>
         </div>
         <div class="index_bottom_add">
            <ul>
               <li><img src="__TMPL__demo2/img/bottom_add.png" border="0" /></li>
               <li style="padding-top:10px; width:245px; padding-left:11px;"><span>Add:</span><br /><?php echo ($about['address']); ?></li>
            </ul>
         </div>
         <div class="index_bottom_mail">
            <ul>
               <li><img src="__TMPL__demo2/img/bottom_mail.png" border="0" /></li>
               <li style="padding-top:10px; padding-left:11px;"><span>E-mail:</span><br /><a href="mailto:<?php echo chaifen($about['email'],0);?>" onFocus="blur()" onClick="turn_sta(3,2);goog_report_conversion_email();"><?php echo chaifen($about['email'],0);?></a></li>
            </ul>
         </div>
         
         
         <div class="clear"></div>
      </div> 
      <div class="index_bottom_ewm">
         <ul>
            <li><img src="__TMPL__demo2/img/bottom_ewm.jpg" border="0" /></li>
            <li style="margin-left:12px;">Mobile</li>
         </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <div id="index_bottom_animate_2">
  <div class="index_bottom_bottom2">
       CopyRight © <?php echo date("Y",time()); ?> <?php echo ($about['company_name']); ?> All Rights Reserved.&nbsp;<a href="<?php echo U('/sitemap');?>" onfocus="blur()">Sitemap</a>&nbsp;&nbsp;Designed by <a href="http://www.one-all.com" title="Zhonghuan Internet" target="_blank">Zhonghuan Internet</a>&nbsp;&nbsp;&nbsp;
  <?php echo htmlspecialchars_decode(get_web_analysis()); echo htmlspecialchars_decode(get_google());?></div>
  </div>
</div>
<?php if($friend_link != ''): ?><div class="friendlink">
    <div class="link"><span style="font-size:18px; font-weight:bold; color:#444444; float:left; margin-right:20px; line-height:30px;">Link:</span>
          <?php if(is_array($friend_link)): $i = 0; $__LIST__ = $friend_link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$friend_link): $mod = ($i % 2 );++$i; if($friend_link['linkurl'] != ''): ?><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><img style="width:70px; height:30px; float:left;" src="<?php echo getimgurl($friend_link['linkurl']);?>"/></a><?php else: ?>
          <div style="float:left; line-height:30px; text-align:center; margin-right:20px;"><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><?php echo ($friend_link['link_title']); ?></a></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>     
          <div style="clear:both"></div>
    </div>
    <div style="clear:both"></div>
</div><?php endif; ?>
<script type="text/javascript">
jQuery('#index_bottom_animate').removeClass().addClass('fadeInDown');
jQuery('#index_bottom_animate_1').removeClass().addClass('fadeInLeft');
jQuery('#index_bottom_animate_2').removeClass().addClass('fadeInRight');
</script>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="__TMPL__demo2/js/wow.js"></script>
    <script src="__TMPL__demo2/js/statitics.js"></script>
    <script>
jQuery('#animate_banner').removeClass().addClass('fadeInLeft');
function goTop(){
  jQuery('html,body').animate({'scrollTop':0},600);
}

jQuery(document).ready(function(){
  jQuery(".sidebar ul li").hover(function(){
    jQuery(this).find(".sidebox").stop().animate({"width":"400px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#000000"})
    jQuery(this).find(".sidebox2").stop().animate({"width":"230px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#000000"})
    jQuery(this).find(".sidebox3").stop().animate({"width":"200px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#000000"})
  },function(){
    jQuery(this).find(".sidebox").stop().animate({"width":"60px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#bbbbbb"})  
    jQuery(this).find(".sidebox2").stop().animate({"width":"60px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#bbbbbb"})
    jQuery(this).find(".sidebox3").stop().animate({"width":"60px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#bbbbbb"})
  }); 
});  
jQuery(function(){
	jQuery('.wx-show').hide();   
	jQuery(".wx-container").bind('mouseenter',function(){
		jQuery('.wx-show').show();
	})
	jQuery(".wx-container").bind('mouseleave',function(){        
		jQuery('.wx-show').hide();
	});
});
var path="";
    </script>
<style>
#skypeCheckNotice{position:fixed !important;}
</style>
<script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>
<div class="sidebar">
  <ul>
    <li style="height:61px;"><div class="sidebox"><img src="__TMPL__demo2/img/r_skype.png" border="0"><span style="line-height:60px; color:#fff"><b><a href="skype:<?php echo chaifen($about['msn'],0);?>?chat" onclick="turn_sta(4,4);goog_report_conversion_skype();" style="color:#fff"><?php echo chaifen($about['msn'],0);?></a></b></span></div></li>
    <li style="height:61px"><div class="sidebox3"><img src="__TMPL__demo2/img/r_tel.png" border="0"><span style="line-height:60px; color:#fff"><b><?php echo chaifen($about['phone'],0);?></b></span></div></li>
    <li style="height:61px"><div class="sidebox2"><img src="__TMPL__demo2/img/r_email.png" border="0"><span style="line-height:60px; color:#fff"><b><a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4)" style="color:#fff"><?php echo chaifen($about['email'],0);?></a></b></span></div></li>
    <li>
       <div class="wx-container">
          <div class="wx-show">
            <div class="wx-txt">
              <ul>
                <li><img src="__TMPL__demo2/img/erwei.jpg" border="0" alt="WeChat" /><br />WeChat</li> 
              </ul>
            </div>
          </div>
        </div>
        <div style="clear:both"></div>
     </li>
    <li style="height:61px"><div class="sidebox1"><a href="<?php echo U('/contactus#inquiry');?>"><img src="__TMPL__demo2/img/r_xp.png" border="0"></a></div></li>
    <li style="height:60px; background:none;"><a href="javascript:goTop();" class="sidetop"><img src="__TMPL__demo2/img/r_top.jpg" width="60" height="60" alt="top" border="0"/></a></li>
  </ul>
</div>
<style>
/*右侧二维码*/
.sidebar{ width:60px; position:fixed;top:250px; right:5px; z-index:99999}
.sidebar ul li{ position:relative; list-style:none; height:61px;}
.sidebar ul li img{ float:left;}
.sidebar ul li .sidebox{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#bbbbbb;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox1{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#bbbbbb;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox1:hover{ background:#000000;}
.sidebar ul li .sidebox2{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#bbbbbb;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox3{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#bbbbbb;overflow:hidden;color:#fff; font-size:14px;}
.wx-container {width: 60px; height: 60px;background: url(__TMPL__demo2/img/r_ewm.png) no-repeat #bbbbbb;float:left;}
.wx-container:hover{ background:url(__TMPL__demo2/img/r_ewm.png) no-repeat #000000;}
.wx-show {width: 140px; background: #fff; border-radius: 10px; border: 1px solid #dddddd; position: absolute; left: -145px; top: -80px; }
.wx-show .wx-sanjiao {width:0; height: 0; border-style: solid; border-color: transparent transparent transparent #ffffff; border-width: 6px; left: 140px; top: 120px; position: absolute; z-index: 2;}
.wx-show .wx-sanjiao-big { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent #dddddd; border-width: 8px; left: 141px; top: 118px; position: absolute; }
.wx-show .wx-txt{ float:left; width:124px; padding:10px 12px 10px;  }
.wx-show .wx-txt ul li{ width:124px; min-height:140px; line-height:25px; text-align:center; font-size:15px; color:#4c4c4c;}
</style>    
  </body>
</html>