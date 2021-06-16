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
<body style="background: #f7f7f7">
<?php echo htmlspecialchars_decode(get_email_code());?>
<?php echo htmlspecialchars_decode(get_skype_code());?>
<?php echo htmlspecialchars_decode(get_phone_code());?>
<div style="background: #f7f7f7">
<div class="page_Top">
   <div class="page_Logo">
     <div id="animate2">
      <ul>
         <li><a href="<?php echo U('/');?>"><?php echo ($logo); ?></a></li>
         <li style="margin-left:15px; padding-top:50px;">
           <span style="font-size: 24px;font-weight: bold;">Jiangsu Handing Machinery Co.,Ltd.</span><br />
           <span>Changzhou Handing International Trading Co.,Ltd.</span>
         </li>
      </ul>
     </div>
   </div>
   <div id="animate3">
      <div class="page_HeadRight">
        <ul>
          <li><a href="mailto:<?php echo chaifen($about['email'],0);?>" onFocus="blur()" onClick="turn_sta(3,1);goog_report_conversion_email();"><?php echo chaifen($about['email'],0);?></a></li>
        </ul>
      </div>
      <div class="page_HeadRight2">
        <ul>
          <li><?php echo chaifen($about['mobile'],0);?></li>
        </ul>
      </div>
   </div>
   <div class="clear"></div>
</div>
</div>
<script type="text/javascript">
jQuery('#animate1').removeClass().addClass('fadeInDown');
jQuery('#animate2').removeClass().addClass('fadeInLeft');
jQuery('#animate3').removeClass().addClass('fadeInRight');
</script>


<link href="__TMPL__f-hdcablemachinery-navigation/navigation.css" rel="stylesheet">
<div class="index_navigation_menubg">
  <div id="index_navigation_animate">
    <div class="index_navigation_page_Menu">
        <ul>
          <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,7,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"> <?php if($key == 1): ?><img src="__TMPL__demo2/img/menu_dot1.png" border="0" style="float: left;margin-top:13px;" /><?php endif; echo ($vo['title']); if($key == 2): ?><img src="__TMPL__demo2/img/menu_dot2.png" border="0" style="float: right;margin-top:13px;" /><?php endif; ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
            <li class="index_navigation_top_search" style="float:right; width:36px; margin:0; height:47px !important; display:block;"><img src="__TMPL__demo2/img/top_search.jpg"><div class="index_navigation_search_list" id="frn_l_8" style="display:none; right:50px;">
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
<script type="text/javascript" src="__TMPL__f-hdcablemachinery-navigation/navigation.js"></script>


<div id="animate_banner">
<div class="in_banner" style="background:url(__TMPL__demo2/img/inbanner.jpg) center no-repeat"></div>
</div>
<script>
$(document).ready(function () {
	$('#menu3').removeClass().addClass("menuon");
});
$(document).ready(function(){	
  $(".in_asd .in_rsp").hide();	
  $(".in_asd").hover(function(){
	  $(this).find(".in_rsp").stop().fadeTo(500,0.7)
	  $(this).find(".in_text").stop().animate({left:'0'}, {duration: 500})
  },
  function(){
	  $(this).find(".in_rsp").stop().fadeTo(500,0)
	  $(this).find(".in_text").stop().animate({left:'375'}, {duration: "fast"})
	  $(this).find(".in_text").animate({left:'-375'}, {duration: 0})
  });
  });
</script>

<div class="r_mbx"><img src="__TMPL__demo2/img/in_home.jpg" border="0" style="vertical-align:middle;" />&nbsp;<a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;<a href="<?php echo U('/product');?>">Products</a>&nbsp;>&nbsp;<?php echo ($type); ?></div>

<div style="width: 1190px;margin:0 auto">

<div class="page_LeftClass">
  <div class="left_title">
     products
  </div>
  <div class="left_con">
      <?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "no" ;else: foreach($__LIST__ as $key=>$allclass_left): $mod = ($i % 2 );++$i;?><li <?php if($classid == $allclass_left['pcid'] or $prolist['parent_id'] == $allclass_left['pcid'] or $product['class_id'] == $allclass_left['pcid'] or $procate['parent_id'] == $allclass_left['pcid']): ?>class="yijion"<?php else: ?>class="yiji"<?php endif; ?>><a href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($allclass_left['pcid']);?>"><?php echo ($allclass_left['class_name']); ?></a></li>
                        <?php if($allclass_left["childs"] != ""): if(is_array($allclass_left['childs'])): $i = 0; $__LIST__ = $allclass_left['childs'];if( count($__LIST__)==0 ) : echo "no" ;else: foreach($__LIST__ as $key=>$childs): $mod = ($i % 2 );++$i;?><li <?php if($classid == $allclass_left['pcid'] or $prolist['parent_id'] == $allclass_left['pcid'] or $product['class_id'] == $allclass_left['pcid'] or $procate['parent_id'] == $allclass_left['pcid']): ?>class="erji"<?php else: ?>class="erjion"<?php endif; ?> <?php if($classid == $allclass_left['pcid'] or $prolist['parent_id'] == $allclass_left['pcid'] or $product['class_id'] == $allclass_left['pcid'] or $procate['parent_id'] == $allclass_left['pcid']): ?>style="display:block"<?php else: ?>style="display:none"<?php endif; ?>><a href="<?php echo U('/Product_category','','');?>/<?php echo getprocatename($childs['pcid']);?>"><?php echo ($childs['class_name']); ?></a></li><?php endforeach; endif; else: echo "no" ;endif; endif; endforeach; endif; else: echo "no" ;endif; ?>   
  </div>
<div class="clear"></div>

<div class="left_title" style="margin-top: 23px;">
    contact us
  </div>
  <div class="left_con">
    <img src="__TMPL__demo2/img/contact.jpg" style="width: 260px;margin-top: 10px;">
    <div style="width: 210px;margin-left: 24px;">
       <li style="padding-left: 60px;background: url(__TMPL__demo2/img/l_em.jpg) 10px center no-repeat;margin-top: 15px;">
         <a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(5,4)" style="color:#404040;font-size: 16px"><?php echo chaifen($about['email'],0);?></a>
       </li>
       <li style="padding-left: 60px;background: url(__TMPL__demo2/img/w.jpg) 10px center no-repeat;padding-bottom: 5px;margin-top: 20px;">
         <?php echo chaifen($about['phone'],0);?>
       </li>
    </div>
  </div>  
</div>
<div class="page_Main">
    <div class="page_RightTitle"><?php echo ($type); ?></div>
    <div class="page_RightMain">
       <?php if(is_array($pro)): $i = 0; $__LIST__ = $pro;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$pro): $mod = ($i % 2 );++$i;?><div class="asd2">
                <div class="img2" ><a href="<?php echo U('/Product','','');?>/<?php echo getproname($pro['pid']);?>"><img src="<?php echo getpcimgurl($pro['main_img']);?>" <?php if($pro['proalt'] != ''): ?>alt="<?php echo ($pro['proalt']); ?>"<?php else: ?>alt="<?php echo ($pro['pro_name']); ?>"<?php endif; ?> /></a>
                </div>
 
                <div class="in_proname2">
                   <a href="<?php echo U('/Product','','');?>/<?php echo getproname($pro['pid']);?>"><?php echo ($pro['pro_name']); ?></a>
                   <div class="index_prode2"><?php echo subtxt($pro['pro_description'],60);?></div>
                   <div class="index_promore2"><a href="<?php echo U('/Product','','');?>/<?php echo getproname($pro['pid']);?>">Read More  >></a></div>
                </div>
              </div>
            <?php if(($key+1)%3 == 0): ?><div style="clear:both; width: 100%; height:26px;"></div>
          <?php else: ?>
              <div style="width:25px; height:10px; background:none; float:left;"></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>  
       <div class="clear"></div>
       <div class="main_page"><?php echo ($page); ?></div>
    </div>
    <div style="clear:both"></div>
  </div>  
</div>

<link href="__TMPL__f-hdcablemachinery-bottom/bottom.css" rel="stylesheet">
<div class="index_bottom_footer">
 <div style="width: 1190px;height: 240px;margin: 0 auto">
 <div class="index_bottom_left">
   <div class="index_bottom_left_title">
     contact us
   </div>
   <div class="index_bottom_left_d">
     <li style="background:url(__TMPL__demo2/img/b_tel.jpg) left no-repeat; ">
       Tel:<?php echo chaifen($about['phone'],0);?>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_w.jpg) left no-repeat; ">
       Mobile/WhatsApp:<?php echo chaifen($about['mobile'],0);?>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_skype.jpg) left no-repeat; ">
       Skype:<a href="skype:<?php echo chaifen($about['msn'],0);?>?chat" onclick="turn_sta(4,4);goog_report_conversion_skype();" style="color:#fff"><?php echo chaifen($about['msn'],0);?></a>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_email.jpg) left no-repeat; ">
       Email:<a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4)" style="color:#fff"><?php echo chaifen($about['email'],0);?></a>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_add.jpg) left no-repeat;padding-top: 5px;padding-bottom: 5px; ">
       Add:<?php echo ($about['address']); ?>
     </li>
   </div>
 </div>
 <div class="index_bottom_con">
   <div style="padding: 30px 10px;border: 1px solid #8e8e8e">
     <div class="index_bottom_Page_Search">
                <form name="find" action="<?php echo U('/search');?>" method="post"  accept-charset="UTF-8"  onsubmit="return CheckForm(this);">
                    <div style="width:288px; float:left; border:none;">
                      <input type="text" name="keywords" id="keywords1" value="Search" style="color:#737373;background: none; width:288px; height:30px; border:1px solid #fff; line-height:30px;" onfocus="OnFocusFun(this,&#39;Search&#39;)" onblur="OnBlurFun(this,&#39;Search&#39;)">
                    </div>
                    <div style="width:32px; float:right;">
                      <input type="image" src="__TMPL__demo2/img/search.jpg" height="34" name="submit" class="submit">
                    </div>
                </form>
              </div>
      <div style="margin-left: 35px;margin-top: 10px;color: #fff">
        <span style="float:left;font-size: 16px;">Follow us:</span><div style="float:left; margin-left:5px;"><!--[if gt IE 8]>
      <!-- Go to www.addthis.com/dashboard to customize your tools -->
  <div class="addthis_sharing_toolbox"></div>
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-573a7b508824f77c"></script>
  <![endif]-->
      </div>       
   </div>
   <div>
     
   </div> 
 </div>

 </div>  
 <div class="index_bottom_right">
    <div style="border: 1px solid #8e8e8e;padding: 5px">
      <span style="float: left;text-align: center;color: #fff;line-height: 95px;width: 109px;">（Mobile）</span>
      <span style="width: 95px;float: right;height: 95px;"><img src="__TMPL__demo2/img/erwei.jpg" style="width: 95px;"></span>
      <div style="clear: both;"></div>
    </div>
 </div>

  </div>
</div>
  <div class="index_bottom_bottom2">
    <div style="width: 1190px;margin: 0 auto;line-height: 38px;color: #fff">
       CopyRight © <?php echo date("Y",time()); ?> <?php echo ($about['company_name']); ?> All Rights Reserved.&nbsp;&nbsp;&nbsp;<a href="<?php echo U('/sitemap');?>" onfocus="blur()">Sitemap</a>&nbsp;&nbsp;&nbsp;&nbsp;Designed by <a href="http://www.one-all.com" title="Zhonghuan Internet" target="_blank">Zhonghuan Internet</a>&nbsp;&nbsp;&nbsp;
  <?php echo htmlspecialchars_decode(get_web_analysis()); echo htmlspecialchars_decode(get_google());?></div>
    </div>
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