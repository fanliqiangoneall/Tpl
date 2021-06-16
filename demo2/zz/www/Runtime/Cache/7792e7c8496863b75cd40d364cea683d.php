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
<?php echo htmlspecialchars_decode(get_web_analysis_head());?>
<?php echo htmlspecialchars_decode(get_email_code());?>
<?php echo htmlspecialchars_decode(get_skype_code());?>
<?php echo htmlspecialchars_decode(get_phone_code());?>
<?php echo htmlspecialchars_decode(get_qq_code());?>
</head>
<body>
<div>
<div class="page_Top">
   <div class="page_Logo">
     <div id="animate2">
      <ul>
         <li><a href="<?php echo U('/');?>"><?php echo ($logo); ?></a></li>
      </ul>
     </div>
   </div>
   <div id="animate3">
      <div class="page_HeadRight">
        <ul>
          <li><a href="mailto:<?php echo chaifen($about['email'],0);?>" onFocus="blur()" onClick="turn_sta(3,1);gtag_report_conversion_email();"><?php echo chaifen($about['email'],0);?></a></li>
        </ul>
      </div>
      <div class="page_HeadRight2">
      <div class="index_navigation_Page_Search">
                <form name="find" action="<?php echo U('/search');?>" method="post"  accept-charset="UTF-8"  onsubmit="return CheckForm(this);">
                    <div style="width:182px; float:left; border:none;margin-top: 1px; margin-left: 5px;">
                      <input type="text" name="keywords" id="keywords1" value="Search" style="color:#737373; width:165px; height:28px; border:none; line-height:28px;" onfocus="OnFocusFun(this,&#39;Search&#39;)" onblur="OnBlurFun(this,&#39;Search&#39;)">
                    </div>
                    <div style="width:21px; float:right;margin-top: 7px;margin-right: 7px;">
                      <input type="image" src="__TMPL__demo2/img/dot.png" height="18" name="submit" class="submit">
                    </div>
                </form>
              </div>
      </div>
   </div>
   <div class="clear"></div>
</div>
</div>

<!--[if gt IE 8]>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52d9da3543f78f25"></script>
<![endif]-->

<script type="text/javascript">
jQuery('#animate1').removeClass().addClass('fadeInDown');
jQuery('#animate2').removeClass().addClass('fadeInLeft');
jQuery('#animate3').removeClass().addClass('fadeInRight');
</script>


<link href="__TMPL__f-hopechemical-navigation/navigation.css" rel="stylesheet">
<script type="text/javascript" src="__TMPL__demo2/js/navigation.js"></script>
<script type="text/javascript" language="javascript" src="__TMPL__demo2/js/nav.js"></script>
<div class="index_navigation_page_Menubg">
    <div class="index_navigation_page_Menu" id="smoothmenu1">
      <ul>
        <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,7,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a>
            <?php if($vo['child'] != ''): ?><ul>
                <?php if(is_array($vo['child'])): $i = 0; $__LIST__ = $vo['child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$navchild): $mod = ($i % 2 );++$i;?><li><a href="<?php echo ($navchild['url']); ?>"><h3><?php echo ($navchild['title']); ?></h3></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
              </ul>
            <?php elseif(strstr($vo['url'],'/product.html') == '/product.html'): ?>
            <ul style="width:200px;">
            <?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$allclass_menu): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($allclass_menu['pcid']);?>"><?php echo ($allclass_menu['class_name']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
            </ul><?php endif; ?>
          </li><?php endforeach; endif; else: echo "" ;endif; ?>
      </ul>
      <div class="clear"></div>
    </div>
</div>



<div id="animate_banner">
<div class="in_banner" style="background:url(__TMPL__demo2/img/inbanner.jpg) center no-repeat"></div>
</div>


<div class="r_mbx"><img src="__TMPL__demo2/img/in_home.jpg" border="0" style="vertical-align:middle;" />&nbsp;<a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;<a href="<?php echo U('/product');?>">Products</a>&nbsp;>&nbsp;Search Result</div>

<div style="width: 1190px;margin:0 auto">
  <style type="text/css">
 .list_dl{
    padding-top: 10px;
 }
.list_dt{
    color: white;
    width: 100%;
    padding: 0 20px 0 40px;
    height: 34px;
    line-height: 34px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative; 
    margin-top: 8px;
    margin-bottom: 8px;
      /*background: url(__TMPL__demo2/img/li_lon.jpg) left no-repeat; */ 
    border-bottom: 1px dashed #ccc;
}
.list_dt h3{
    font-size: 15px;
    font-weight: normal;
    line-height: 34px;
}
.list_dt h3 a{
    font-size: 16px;
}
.list_dt1{
    color: white;
    width: 100%;
    padding: 0 20px 0 40px;
    height: 34px;
    line-height: 34px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative; 
    margin-top: 8px;
    margin-bottom: 8px;
      /*background: url(__TMPL__demo2/img/li_lon.jpg) left no-repeat; */ 
    border-bottom: 1px dashed #ccc;
}
.list_dt a h3:hover{
    color: #007f4a;
    font-weight:bold;
}
.list_dt:hover{
      /*background: url(__TMPL__demo2/img/li_lon.jpg) left no-repeat; */ 
}
.list_dt1 a h3{
    color: #007f4a;
    font-size: 16px;
    font-weight: bold;
}
.list_dt1{
    /*background: url(__TMPL__demo2/img/li_lon.jpg) left no-repeat; */ 
}
.list_dt:hover ._after{
    display: block;
    width: 3px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
#open{
    /*background: url(__TMPL__demo2/img/li_lon.jpg) left no-repeat; */ 
}
.l_lixi{margin-top: 30px;}
#open ._after{
    display: block;
    width: 3px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
     /*background: url(__TMPL__demo2/img/li_lon.jpg) left no-repeat; */ 
}
.list_dt_icon{
    position: absolute;
    right: 10px;
    top: 9px;
    display: block;
    width: 16px;
    height: 16px;
    background: url("../images/off.png") no-repeat;
}
#open .list_dt_icon{
    background: url("../images/open.png") no-repeat;
}
.list_dd{
    display: block;
}
.list_li{
    list-style-type: none;
    color: white;
    width: 92%;
    padding: 5px 30px 5px 50px;
    line-height: 16px;
    cursor: pointer;
    border-bottom: 1px dashed #cccccc;
    margin: auto;
    /*background: url(__TMPL__demo2/img/erji.jpg) 30px no-repeat ; */
}

.erjion a{color: #223c7c}
.list_li h3{font-size: 14px;font-weight: normal;line-height: 34px}
.list_li:hover h3{color: #e88118}
.list_li:hover{
    /*background: url(__TMPL__demo2/img/erjion.jpg) 30px no-repeat; */ 
}
.in_head{width: 100%;background: url(__TMPL__demo2/img/in_hbg.jpg) right no-repeat #007f4a;padding: 15px 0px;}
.in_head p{font-size: 26px;font-weight: bold;margin-left: 70px;color: #fff;}

@media (min-width:991px) and (max-width:1190px) {
.in_head p{font-size: 26px;font-weight: bold;margin-left: 45px !important;color: #fff;}
}


@media (min-width:200px) and (max-width:1170px) {
  .l_lixi{display: none}
}
.subNavBox{
    padding-top: 10px;
    background: #fff;
    border-right: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 25px;
}
.yiji{width: 227px;margin: 15px auto;background: #404040;padding-left: 11px;}
.yiji a h3{line-height: 24px;font-size: 16px;color: #fff;font-weight: normal;    padding: 5px 0px;}
.yiji:hover{background: #009fa8}
.yijion{width: 227px;margin: 15px auto;background: #009fa8;padding-left: 11px;}
.yijion a h3{line-height: 24px;font-size: 16px;color: #fff;font-weight: normal;    padding: 5px 0px;}
.subNav h3{font-weight: normal;}
.subNav{
  width: 283px;margin:auto;/*background: url(__TMPL__demo2/img/yijibg.jpg) right center no-repeat;*/border-bottom: 2px solid #e9e9e9;    clear: both;}
.subNav:hover{
 width: 283px;margin: 0px auto;/*background: url(__TMPL__demo2/img/yijibgon.jpg) right center no-repeat;*/border-bottom: 2px solid #e9e9e9
}
.subNav:hover h3{
 line-height: 24px;font-size: 17px;color: #223c7c;font-weight: bold;padding-top: 20px;padding-bottom: 20px
}
.subNav h3{line-height: 24px;font-size: 17px;color: #223c7c;font-weight: bold;padding-top: 20px;padding-bottom: 20px;}
.subNavon h3{font-weight: normal;}
.subNavon{
  width: 283px;margin: 0px auto;/*background: url(__TMPL__demo2/img/yijibgon.jpg) right center no-repeat;*/border-bottom: 2px solid #e9e9e9}

.subNavon h3{line-height: 24px;font-size: 17px;color: #223c7c;font-weight: bold;padding-top: 20px;padding-bottom: 20px}
.currentDd{color:#277fc2}
.currentDd:hover{}
.currentDt{
 width: 283px;margin:auto;/*background: url(__TMPL__demo2/img/yijibg.jpg) right center no-repeat;*/border-bottom: 2px solid #e9e9e9
}
.currentDt h3{
  line-height: 24px;font-size: 17px;color: #223c7c;font-weight: bold;padding-top: 20px;padding-bottom: 20px
}
.currentDt:hover{}
.navContent{display: none;}
.navContent1{display: block;width: 283px;margin: auto;}



</style> 
<script type="text/javascript">
    $(function(){
     $(".subNav").mouseenter(function(){
      $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd")
      $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt")
      
      // 修改数字控制速度， slideUp(500)控制卷起速度
      $(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500);
     })  
    })
   </script>

<div class="page_LeftClass">
  <div class="left_title">
     Products Classification
  </div>
  <div class="subNavBox">
   
  <?php if(is_array($allclass)): $i = 0; $__LIST__ = array_slice($allclass,0,21,true);if( count($__LIST__)==0 ) : echo "no" ;else: foreach($__LIST__ as $key=>$allclass_left): $mod = ($i % 2 );++$i;?><div  <?php if(inthiscate($classid,$allclass_left['pcid'],$product)): ?>class="subNavon"<?php else: ?>class="subNav"<?php endif; ?>><a style="cursor:pointer;" href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($allclass_left['pcid']);?>"><?php echo ($allclass_left['class_name']); ?></a></div>
      
        <div <?php if($classid == $allclass_left['pcid'] or $prolist['parent_id'] == $allclass_left['pcid'] or $product['class_id'] == $allclass_left['pcid'] or $procate['parent_id'] == $allclass_left['pcid']): ?>class="navContent1"<?php else: ?>class="navContent"<?php endif; ?>>

          <?php if($allclass_left["childs"] != ""): ?><div style="border-bottom: 2px solid #e9e9e9;padding-bottom:15px;">
                        <?php if(is_array($allclass_left['childs'])): $i = 0; $__LIST__ = $allclass_left['childs'];if( count($__LIST__)==0 ) : echo "no" ;else: foreach($__LIST__ as $key=>$childs): $mod = ($i % 2 );++$i;?><li <?php if($classid == $childs['pcid'] or $prolist['parent_id'] == $childs['pcid'] or $product['class_id'] == $childs['pcid'] or $procate['parent_id'] == $childs['pcid']): ?>class="erjion"<?php else: ?>class="erji"<?php endif; ?> ><a href="<?php echo U('/Product_category','','');?>/<?php echo getprocatename($childs['pcid']);?>"><?php echo ($childs['class_name']); ?></a></li><?php endforeach; endif; else: echo "no" ;endif; ?>
                 </div><?php endif; ?>

        </div><?php endforeach; endif; else: echo "no" ;endif; ?>
  
  
</div>

<div class="clear"></div>

<div class="left_title2" style="margin-top: 40px;">
    contact us
  </div>
  <div class="left_con">
    <img src="__TMPL__demo2/img/contact.jpg" style="width: 313px;">
    <div style="width: 300px;">
       <li style="padding-left: 60px;background: url(__TMPL__demo2/img/l_em.jpg) 10px center no-repeat;margin-top: 15px;">
         Email:
         <a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(5,4);gtag_report_conversion_email();" style="color:#404040;font-size: 19px"><?php echo chaifen($about['email'],0);?></a>
       </li>
    </div>
  </div>  
</div>
<div class="page_Main">
    <div class="page_RightTitle"><span>Search Result</span></div>
    <div class="page_RightMain">
     <?php if(is_array($searchpro)): $i = 0; $__LIST__ = $searchpro;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$searchpro): $mod = ($i % 2 );++$i;?><div class="asd2">
                <div class="img2" ><a href="<?php echo U('/Product','','');?>/<?php echo getproname($searchpro['pid']);?>"><img src="<?php echo getpcimgurl($searchpro['main_img']);?>" <?php if($searchpro['proalt'] != ''): ?>alt="<?php echo ($searchpro['proalt']); ?>"<?php else: ?>alt="<?php echo ($searchpro['pro_name']); ?>"<?php endif; ?> /></a>
                </div>
 
                <div class="in_proname2">
                   <a href="<?php echo U('/Product','','');?>/<?php echo getproname($searchpro['pid']);?>"><?php echo ($searchpro['pro_name']); ?></a>
                   <div class="index_prode2"><?php echo subtxt($searchpro['pro_description'],60);?></div>
                   <div class="index_promore2"><a href="<?php echo U('/Product','','');?>/<?php echo getproname($searchpro['pid']);?>">Read More  >></a></div>
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

<link href="__TMPL__f-hopechemical-bottom/bottom.css" rel="stylesheet">
<div class="index_bottom_footer">
 <div style="width: 1190px;height: 240px;margin: 0 auto">
 <div class="index_bottom_left">
   <div class="index_bottom_left_title">
     contact us
   </div>
   <div class="index_bottom_left_d">
     <li style="background:url(__TMPL__demo2/img/b_tel.png) left no-repeat; ">
       Tel: <?php echo chaifen($about['phone'],0);?>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_fax.png) left no-repeat; ">
       Fax: <?php echo chaifen($about['fax'],0);?>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_email.png) left no-repeat; ">
       Email: <a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();" style="color:#a1a1a2"><?php echo chaifen($about['email'],0);?></a>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_add.png) left no-repeat;padding-bottom: 5px;width: 500px; ">
       Add: <?php echo ($about['address']); ?>
     </li>
     <li style="background:url(__TMPL__demo2/img/b_add.png) left no-repeat;padding-bottom: 5px;width: 500px;padding-top: 5px;">
       Factory: Jishan Industrial Park, Pengze, Jiujiang, Jiangxi Province, 332700, China
     </li>
   </div>
 </div>
 <div class="index_bottom_con">
  <div class="index_bottom_left_title">
     navigation
   </div>
   <div class="index_bottom_nav">
      <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,7,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
   </div>
 </div>  
 <div class="index_bottom_right">
    <div class="index_bottom_left_title" style="text-align: center;">
       Mobile
    </div>
    <div style="padding: 5px">
      <span style="width: 134px;float: right;height: 134px;"><img src="__TMPL__demo2/img/erwei.jpg" style="width: 134px;"></span>
      <div style="clear: both;"></div>
    </div>
 </div>
   <div style="clear: both;height: 10px;width: 100%"></div>
   <div class="index_bottom_bottom2">
    <div style="width: 1190px;margin: 0 auto;line-height: 38px;color: #fff">
       CopyRight © <?php echo date("Y",time()); ?> <?php echo ($about['company_name']); ?> All Rights Reserved.&nbsp;&nbsp;&nbsp;<a href="<?php echo U('/sitemap');?>" onfocus="blur()">Sitemap</a>&nbsp;&nbsp;&nbsp;&nbsp;Designed by <a href="http://www.one-all.com" title="Zhonghuan Internet" target="_blank">Zhonghuan Internet</a>&nbsp;&nbsp;&nbsp;
  <?php echo htmlspecialchars_decode(get_web_analysis()); echo htmlspecialchars_decode(get_google());?></div>
    </div>
  </div>
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
    jQuery(this).find(".sidebox").stop().animate({"width":"310px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#223c7c"})
    jQuery(this).find(".sidebox2").stop().animate({"width":"260px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#223c7c"})
    jQuery(this).find(".sidebox3").stop().animate({"width":"260px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#223c7c"})
  },function(){
    jQuery(this).find(".sidebox").stop().animate({"width":"60px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#223c7c"})  
    jQuery(this).find(".sidebox2").stop().animate({"width":"60px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#223c7c"})
    jQuery(this).find(".sidebox3").stop().animate({"width":"60px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#223c7c"})
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

<div class="sidebar">
  <ul>
    <li style="height:61px;"><div class="sidebox1"><a href="skype:<?php echo chaifen($about['msn'],0);?>?chat" onclick="turn_sta(4,4);gtag_report_conversion_skype();" style="color:#fff"><img src="__TMPL__demo2/img/r_skype.png" border="0"></a></div></li>
    <li style="height:61px"><div class="sidebox3"><img src="__TMPL__demo2/img/whats.png" border="0" style="margin-top: 5px;margin-left: 5px;"><span style="line-height:60px; color:#fff"><b>+86-<?php echo chaifen($about['whatsapp'],0);?></b></span></div></li>
    <li style="height:61px"><div class="sidebox2"><img src="__TMPL__demo2/img/r_email.png" border="0"><span style="line-height:60px; color:#fff"><b><a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();" style="color:#fff"><?php echo chaifen($about['email'],0);?></a></b></span></div></li>
    <!--<li>
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
     </li>-->
    <li style="height:61px"><div class="sidebox1"><a href="<?php echo U('/contactus#inquiry');?>"><img src="__TMPL__demo2/img/r_xp.png" border="0"></a></div></li>
    <li style="height:60px; background:none;"><a href="javascript:goTop();" class="sidetop"><img src="__TMPL__demo2/img/r_top.jpg" width="60" height="60" alt="top" border="0"/></a></li>
  </ul>
</div>
<style>
/*右侧二维码*/
.sidebar{ width:60px; position:fixed;top:250px; right:5px; z-index:99999}
.sidebar ul li{ position:relative; list-style:none; height:61px;}
.sidebar ul li img{ float:left;}
.sidebar ul li .sidebox{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#223c7c;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox1{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#223c7c;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox1:hover{ background:#223c7c;}
.sidebar ul li .sidebox2{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#223c7c;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox3{position:absolute;width:60px; height:60px;top:0;right:0;transition:all 0.3s;background:#223c7c;overflow:hidden;color:#fff; font-size:14px;}
.wx-container {width: 60px; height: 60px;background: url(__TMPL__demo2/img/r_ewm.png) no-repeat #223c7c;float:left;}
.wx-container:hover{ background:url(__TMPL__demo2/img/r_ewm.png) no-repeat #000000;}
.wx-show {width: 140px; background: #fff; border-radius: 10px; border: 1px solid #dddddd; position: absolute; left: -145px; top: -80px; }
.wx-show .wx-sanjiao {width:0; height: 0; border-style: solid; border-color: transparent transparent transparent #ffffff; border-width: 6px; left: 140px; top: 120px; position: absolute; z-index: 2;}
.wx-show .wx-sanjiao-big { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent #dddddd; border-width: 8px; left: 141px; top: 118px; position: absolute; }
.wx-show .wx-txt{ float:left; width:124px; padding:10px 12px 10px;  }
.wx-show .wx-txt ul li{ width:124px; min-height:140px; line-height:25px; text-align:center; font-size:15px; color:#4c4c4c;}
</style>    
  </body>
</html>