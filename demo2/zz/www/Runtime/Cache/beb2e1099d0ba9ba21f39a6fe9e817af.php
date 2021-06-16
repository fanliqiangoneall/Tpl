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




<script type="text/javascript">
jQuery('#animate1').removeClass().addClass('fadeInDown');
jQuery('#animate2').removeClass().addClass('fadeInLeft');
jQuery('#animate3').removeClass().addClass('fadeInRight');
</script>


<link href="__TMPL__demo2/navigation.css" rel="stylesheet">
<script type="text/javascript" language="javascript" src="__TMPL__demo2/js/nav.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/navcontrol.js"></script>

 <div class="index_top">
    <div class="index_topcon">
      <div id="index_navigation_animate_3">
       <div class="index_top1">Hello,welcome to HY Phoenix</div>
       <div class="index_top2"><?php echo chaifen($about['mobile'],0);?></div>
       <div class="index_top3"><a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();" style="color:#333"><?php echo chaifen($about['email'],0);?></a></div>

       <div style="float: right;">
          <span style="float: left;font-size: 14px;line-height: 40px;color: #333">Share:</span>
          <div style="float:left; margin-left:5px; margin-top:12px;">
          <!--[if gt IE 8]>
      <!-- Go to www.addthis.com/dashboard to customize your tools -->
  <div class="addthis_sharing_toolbox"></div>
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-573a7b508824f77c"></script>
  <![endif]--></div>
       </div>
      </div> 
    </div>
 </div>

<div  class="page_Top">
  <div class="page_Top2">
   <div class="page_Logo">
     <div id="animate2">
      <ul>
         <li id="index_navigation_animate_1"><a href="<?php echo U('/');?>"><?php echo ($logo); ?></a></li>
      </ul>
     </div>
   </div>
    <div class="index_navigation_page_Menu" id="smoothmenu1">
      <ul id="index_navigation_animate_2">
        <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,9,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a>
           <!-- <?php if($vo['child'] != ''): ?><ul style="width:200px;display: none;"> 
                <?php if(is_array($vo['child'])): $i = 0; $__LIST__ = $vo['child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$navchild): $mod = ($i % 2 );++$i;?><li><a href="<?php echo ($navchild['url']); ?>"><h3><?php echo ($navchild['title']); ?></h3></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
              </ul>
            <?php elseif(strstr($vo['url'],'/product.html') == '/product.html'): ?>
            <ul style="width:200px;display: none;">
            <?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$allclass_menu): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($allclass_menu['pcid']);?>"><?php echo ($allclass_menu['class_name']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
            </ul><?php endif; ?>  -->
          </li><?php endforeach; endif; else: echo "" ;endif; ?>
      </ul>
      <div class="clear"></div>
</div>
   <div class="clear"></div>
  </div> 
</div>


<script>
jQuery('#index_navigation_animate_3').removeClass().addClass('fadeInDown');
jQuery('#index_navigation_animate_1').removeClass().addClass('fadeInLeft');
jQuery('#index_navigation_animate_2').removeClass().addClass('fadeInRight');
jQuery('#index_navigation_animate').removeClass().addClass('fadeIn');
</script>


<?php if($newscate['classid'] != 1769): ?><div id="animate_banner">
  <div class="in_banner" style="background:url(__TMPL__demo2/img/inbanner3.jpg) center no-repeat"></div>
</div>
<?php else: ?>
<div id="animate_banner">
  <div class="in_banner" style="background:url(__TMPL__demo2/img/inbanner2.jpg) center no-repeat"></div>
</div><?php endif; ?>



<div class="r_mbx"><img src="__TMPL__demo2/img/in_home.jpg" border="0" style="vertical-align:middle;" />&nbsp;<a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;<?php echo ($newscate['class_name']); ?></div>


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
    border-right: 1px solid #68c4b2;
    border-left: 1px solid #68c4b2;
    border-bottom: 6px solid #68c4b2;
    padding-bottom: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
.yiji{width: 227px;margin: 15px auto;background: #404040;padding-left: 11px;}
.yiji a h3{line-height: 24px;font-size: 16px;color: #fff;font-weight: normal;    padding: 5px 0px;}
.yiji:hover{background: #009fa8}
.yijion{width: 227px;margin: 15px auto;background: #009fa8;padding-left: 11px;}
.yijion a h3{line-height: 24px;font-size: 16px;color: #fff;font-weight: normal;    padding: 5px 0px;}
.subNav h3{font-weight: normal;}
.subNav{
  width: 213px;margin:auto;background:#66bfb1;clear: both;margin-bottom: 20px;padding-left: 13px;border-radius: 5px;}
.subNav:hover{
 width: 213px;margin: 0px auto;margin-bottom: 20px;border-radius: 5px;
}
.subNav:hover h3{
 line-height: 24px;font-size: 16px;color: #fff;padding-top: 10px;padding-bottom: 10px
}
.subNav h3{line-height: 24px;font-size: 16px;color: #fff;padding-top: 10px;padding-bottom: 10px;}
.subNavon h3{font-weight: normal;}
.subNavon{
  width: 213px;margin: 0px auto;background:#66bfb1;margin-bottom: 20px;padding-left: 13px;border-radius: 5px;}

.subNavon h3{line-height: 24px;font-size: 16px;color: #fff;padding-top: 10px;padding-bottom: 10px}
.currentDd{color:#277fc2}
.currentDd:hover{}
.currentDt{
 width: 283px;margin:auto;/*background: url(__TMPL__demo2/img/yijibg.jpg) right center no-repeat;*/border-bottom: 2px solid #e9e9e9
}
.currentDt h3{
  line-height: 24px;font-size: 17px;color: #223c7c;font-weight: bold;padding-top: 20px;padding-bottom: 20px
}
.currentDt:hover{}
.navContent{display: block;}
.navContent1{display: block;width: 261px;margin: auto;}


.subNavBox li:hover a{color: #66bfb1}
</style> 
<!--
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
-->
<div class="page_LeftClass">
  <div class="left_title">
     Products
  </div>
  <div class="subNavBox">
   
  <?php if(is_array($allclass)): $i = 0; $__LIST__ = array_slice($allclass,0,21,true);if( count($__LIST__)==0 ) : echo "no" ;else: foreach($__LIST__ as $key=>$allclass_left): $mod = ($i % 2 );++$i;?><div  <?php if(inthiscate($classid,$allclass_left['pcid'],$product)): ?>class="subNavon"<?php else: ?>class="subNav"<?php endif; ?>><a style="cursor:pointer;" href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($allclass_left['pcid']);?>"><?php echo ($allclass_left['class_name']); ?></a></div>
      
        <div <?php if($classid == $allclass_left['pcid'] or $prolist['parent_id'] == $allclass_left['pcid'] or $product['class_id'] == $allclass_left['pcid'] or $procate['parent_id'] == $allclass_left['pcid']): ?>class="navContent1"<?php else: ?>class="navContent"<?php endif; ?>>

          <?php if($allclass_left["childs"] != ""): ?><div>
                        <?php if(is_array($allclass_left['childs'])): $i = 0; $__LIST__ = $allclass_left['childs'];if( count($__LIST__)==0 ) : echo "no" ;else: foreach($__LIST__ as $key=>$childs): $mod = ($i % 2 );++$i;?><li <?php if($classid == $childs['pcid'] or $prolist['parent_id'] == $childs['pcid'] or $product['class_id'] == $childs['pcid'] or $procate['parent_id'] == $childs['pcid']): ?>class="erjion"<?php else: ?>class="erji"<?php endif; ?> ><a href="<?php echo U('/Product_category','','');?>/<?php echo getprocatename($childs['pcid']);?>"><?php echo ($childs['class_name']); ?></a></li> 
                          <?php if($childs["childs"] != ""): ?><div class="child2" <?php if($classid == $childs['pcid'] or $prolist['parent_id'] == $childs['pcid'] or $product['class_id'] == $childs['pcid'] or $procate['parent_id'] == $childs['pcid']): ?>style="display:block"<?php else: ?>style="display:none"<?php endif; ?>>
          <ul>
            <?php if(is_array($childs['childs'])): $i = 0; $__LIST__ = $childs['childs'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$childs_left): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($childs_left['pcid']);?>"><?php echo ($childs_left['class_name']); ?></a></li><?php endforeach; endif; else: echo "no" ;endif; ?>
          </ul>
        </div><?php endif; endforeach; endif; else: echo "no" ;endif; ?>
                 </div><?php endif; ?>

        </div><?php endforeach; endif; else: echo "" ;endif; ?>
  
  
</div>

<div class="clear"></div>

<div class="left_title2" style="margin-top: 40px;">
    contact us
  </div>
  <div class="subNavBox" style="width: 263px;">
    <div style="width: 220px;margin: auto;">
     <li style="font-size: 16px;line-height: 26px;margin-bottom: 5px"><span style="font-weight: bold;font-size: 18px">Manager: </span><br /><?php echo ($about['contact']); ?></li>
     <li style="font-size: 16px;line-height: 26px;margin-bottom: 5px">
       <span style="font-weight: bold;font-size: 18px">Tel: </span><br /><?php echo chaifen($about['phone'],0);?>
     </li>

     <li style="font-size: 16px;line-height: 26px;margin-bottom: 5px">
       <span style="font-weight: bold;font-size: 18px">Email: </span><span><a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();"><?php echo chaifen($about['email'],0);?></a></span>
     </li>
    </div>
    <div style="text-align: center;margin-top: 15px;">
     <a href="<?php echo U('/contactus');?>"><img src="__TMPL__demo2/img/contact.jpg" style="width: 226px;"></a>
    </div>
  </div>  
</div>
<div class="page_Main">
  <div class="page_RightTitle"><span><?php echo ($newscate['class_name']); ?></span></div>
  <div class="body" style="margin-top: 45px;">
        <?php if($newscate['classid'] == 1770): if(is_array($newscatelist)): $k = 0; $__LIST__ = $newscatelist;if( count($__LIST__)==0 ) : echo "No Content" ;else: foreach($__LIST__ as $key=>$allnews): $mod = ($k % 2 );++$k;?><li style="clear: both;border-bottom: 1px dashed #666;padding-top: 5px;"> <span class="right_time"><?php echo date('Y-m-d',$allnews['created']);?></span><a href="<?php echo U('/new_detail',array('nid'=>$allnews["nid"]));?>" style="line-height: 30px;"><?php echo ($allnews['title']); ?></a> </li><?php endforeach; endif; else: echo "No Content" ;endif; ?>

            <?php else: ?>
            <?php if(is_array($newscatelist)): $k = 0; $__LIST__ = $newscatelist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$newscatelist): $mod = ($k % 2 );++$k;?><div class="in_case">
                      <div class="incase_pic"><a href="<?php echo U('/new_detail',array('nid'=>$allnews["nid"]));?>"><?php if($newscatelist['new_pro'] != ''): ?><img src="<?php echo getimgurl($newscatelist['new_pro']);?>" border="0" alt="<?php echo ($newscatelist['title']); ?>" /><?php else: ?><img src="__TMPL__demo2/img/case_pic.jpg" border="0" /><?php endif; ?></a></div>
                      <div class="incase_name">
                         <li style="float: left;color: #999;font-size: 16px;line-height: 28px;margin-bottom: 10px"><?php echo date('Y.m.d',$newscatelist['created']);?></li>
                         <li style="margin-bottom: 10px;"><a href="<?php echo U('/new_detail',array('nid'=>$newscatelist["nid"]));?>" style="font-size: 22px;color: #333333;line-height: 30px;"><?php echo ($newscatelist['title']); ?></a></li>
                         <li style="color: #999;font-size: 16px;line-height: 28px;"><?php echo subtxt($newscatelist['news_description'],100);?></li>
                      </div>  
                  </div>
                  <?php if($k % 3 != 0): ?><div style="width:32px; float:left; height:30px;"></div>
                  <?php else: ?>
                     <div style="clear:both"></div><?php endif; endforeach; endif; else: echo "" ;endif; endif; ?>   
          </div>
  <div class="clearfix"></div>
<div class="green-black" style="text-align:center; padding:20px 20px;"><?php echo ($page); ?></div>     
</div>
</div>

<link href="__TMPL__f-Phoenix-bottom/bottom.css" rel="stylesheet">
<div class="index_bottom_footer">
 <div style="width: 1190px;height: 260px;margin: 0 auto">
   <div class="index_bottom_nav">
      <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,9,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
   </div>
 <div class="index_bottom_left">
   <div class="index_bottom_left_d">
     <li>Manager：<?php echo ($about['contact']); ?></li>
     <li>
       Tel: <?php echo chaifen($about['phone'],0);?>
     </li>

     <li>
       Email: <a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();" style="color:#fff"><?php echo chaifen($about['email'],0);?></a>
     </li>
     <li>
       Company Name: <?php echo ($about['company_name']); ?>
     </li>
     <li>
       Add: <?php echo ($about['address']); ?>
     </li>
   </div>
 </div>
 
 <div class="index_bottom_right">
    <div style="padding: 5px;padding-bottom: 10px">
      <span style="width: 126px;float: right;height: 134px;"><img src="__TMPL__demo2/img/erwei.jpg" style="width: 134px;"></span>
      <div style="clear: both;"></div>
    </div>
        <!--[if gt IE 8]>
      <!-- Go to www.addthis.com/dashboard to customize your tools -->
  <div class="addthis_sharing_toolbox"></div>
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-573a7b508824f77c"></script>
  <![endif]-->
 </div>
   <div style="clear: both;height: 20px;width: 100%"></div>
   <div class="index_bottom_bottom2">
    <div style="width: 1190px;margin: 0 auto;line-height: 46px;color: #fff">
       <?php $nowtime=date("Y",time()); $currtime=2018; ?>
            <?php if($nowtime > $currtime): ?>CopyRight&nbsp;©&nbsp;<?php echo ($currtime); ?>-<?php echo ($nowtime); else: ?>CopyRight&nbsp;©&nbsp;<?php echo ($nowtime); ?>&nbsp;-<?php endif; ?>             
             &nbsp; <?php echo ($about['company_name']); ?> All Rights Reserved.&nbsp;&nbsp;&nbsp;<span style="float: right;"><a href="<?php echo U('/sitemap');?>" onfocus="blur()">Sitemap</a>&nbsp;&nbsp;&nbsp;&nbsp;Designed by <a href="http://www.one-all.com" title="Zhonghuan Internet" target="_blank">Zhonghuan Internet</a>&nbsp;&nbsp;&nbsp;</span>
  <?php echo htmlspecialchars_decode(get_web_analysis()); echo htmlspecialchars_decode(get_google());?></div>
    </div>
  </div>
</div>
 <script type="text/javascript">
   function CheckForm(theForm)
  {
    if (theForm.keywords.value=="Search")
    {
      alert('Please enter the keywords');
      theForm.keywords.focus();
      return false;
    }
    
    return true; 
  }
  function OnFocusFun(element,elementvalue)
    {
      if(element.value==elementvalue)
      {
        element.value="";
        element.style.color="#888888";
      }
    }
    //离开输入框时触发事件
    function OnBlurFun(element,elementvalue)
    {
      if(element.value==""||element.value.replace(/\s/g,"")=="")
      {
        element.value=elementvalue;    
        element.style.color="#888888";
      }
    }
jQuery('#index_navigation_animate').removeClass().addClass('fadeInLeft');
jQuery(".index_navigation_page_Menu ul li").each(function() {
  jQuery(this).mouseenter(function(){
       var a=jQuery(".index_navigation_page_Menu ul li").index(jQuery(this));
       var num=a+1;
       if(num==5){
         }
       else{
       jQuery(".index_navigation_page_Menu ul li b:eq("+a+")").show();
       jQuery("#frn_l_"+num).show();
       }
     }).mouseleave(function(){
        var a=jQuery(".index_navigation_page_Menu ul li").index(jQuery(this));
        var num=a+1;
        jQuery(".index_navigation_page_Menu ul li b:eq("+a+")").hide();
        jQuery("#frn_l_"+num).hide();
       })
  });
 </script>
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
jQuery(function(){
  jQuery('.skype-show').hide();   
  jQuery(".skype-container").bind('mouseenter',function(){
    jQuery('.skype-show').show();
  })
  jQuery(".skype-container").bind('mouseleave',function(){        
    jQuery('.skype-show').hide();
  });
});
jQuery(function(){
  jQuery('.whatsapp-show').hide();   
  jQuery(".whatsapp-container").bind('mouseenter',function(){
    jQuery('.whatsapp-show').show();
  })
  jQuery(".whatsapp-container").bind('mouseleave',function(){        
    jQuery('.whatsapp-show').hide();
  });
});
jQuery(function(){
  jQuery('.email-show').hide();   
  jQuery(".email-container").bind('mouseenter',function(){
    jQuery('.email-show').show();
  })
  jQuery(".email-container").bind('mouseleave',function(){        
    jQuery('.email-show').hide();
  });
});
var path="";
    </script>
<style>
#skypeCheckNotice{position:fixed !important;}
#skypedetectionswf{ display:none !important;}
</style>
<script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>
<div class="sidebar">
  <ul>
    <li style="border:none; height:25px;"><img src="__TMPL__demo2/img/r_top1.png" border="0"></li>
    <!--<li style="height:48px;">
        <div class="skype-container">
          <div class="skype-show">
            <div class="skype-txt">Skype:<br /><a href="skype:<?php echo chaifen($about['msn'],0);?>?chat" onclick="turn_sta(4,4);gtag_report_conversion_Skype();"><?php echo chaifen($about['msn'],0);?></a></div>
            <div class="skype-sanjiao"></div>
            <div class="skype-sanjiao-big"></div>
          </div>
        </div>
        <div style="clear:both"></div>
    </li>-->
    <li style="height:48px">
        <div class="whatsapp-container">
          <div class="whatsapp-show">
            <div class="whatsapp-txt">WhatsApp:<br />+86-<?php echo chaifen($about['whatsapp'],0);?></div>
            <div class="whatsapp-sanjiao"></div>
            <div class="whatsapp-sanjiao-big"></div>
          </div>
        </div>
        <div style="clear:both"></div>
    </li>
    <li style="height:48px">
       <div class="email-container">
          <div class="email-show">
            <div class="email-txt">E-mail:<br /><a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();"><?php echo chaifen($about[email],0);?></a></div>
            <div class="email-sanjiao"></div>
            <div class="email-sanjiao-big"></div>
          </div>
        </div>
        <div style="clear:both"></div>
    </li>
    <li style="height:48px"><div class="sidebox1"><a href="<?php echo U('/contactus#inquiry');?>" onClick="turn_sta(1,4)"><img src="__TMPL__demo2/img/r_xp.png" border="0"></a></div></li>
    <li style="height:48px; background:#fff;"><a href="javascript:goTop();" class="sidetop"><img src="__TMPL__demo2/img/r_top.png" width="50" height="48" alt="top" border="0"/></a></li>
    <li style="border:none; height:25px;"><img src="__TMPL__demo2/img/r_top2.png" border="0"></li>
  </ul>
</div>
<style>
/*右侧二维码*/
.sidebar{ width:52px; position:fixed;top:250px; right:0px; z-index:99999}
.sidebar ul li{ position:relative; list-style:none; height:48px; border-left:1px solid #dcdcdc; border-right:1px solid #dcdcdc; border-bottom:1px solid #dcdcdc;}
.sidebar ul li img{ float:left;}
.sidebar ul li .sidebox{position:absolute;width:50px; height:48px;top:0;right:0;transition:all 0.3s;background:#fff;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox1{position:absolute;width:50px; height:48px;top:0;right:0;transition:all 0.3s;background:#fff;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox2{position:absolute;width:50px; height:48px;top:0;right:0;transition:all 0.3s;background:#fff;overflow:hidden;color:#fff; font-size:14px;}
.sidebar ul li .sidebox3{position:absolute;width:50px; height:48px;top:0;right:0;transition:all 0.3s;background:#fff;overflow:hidden;color:#fff; font-size:14px;}
.skype-container {width: 50px; height: 48px;background: url(__TMPL__demo2/img/r_skype.png) no-repeat #fff;}
.skype-container:hover{ background:url(__TMPL__demo2/img/r_skype.png) no-repeat #FFFFFF;}
.skype-show {width: 220px; background: #fff; border-radius: 10px; border: 1px solid #dddddd; position: absolute; left: -235px; top: 0px; }
.skype-show .skype-sanjiao {width:0; height: 0; border-style: solid; border-color: transparent transparent transparent #ffffff; border-width: 6px; left: 220px; top: 26px; position: absolute; z-index: 2;}
.skype-show .skype-sanjiao-big { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent #dddddd; border-width: 8px; left: 221px; top: 25px; position: absolute; }
.skype-show .skype-txt{ float:left; width:200px; padding:10px 12px 10px 10px; text-align:left; font-size:15px; color:#4c4c4c; }


.whatsapp-container {width: 50px; height: 48px;background: url(__TMPL__demo2/img/r_tel.png) no-repeat #fff;}
.whatsapp-container:hover{ background:url(__TMPL__demo2/img/r_tel.png) no-repeat #FFFFFF;}
.whatsapp-show {width: 220px; background: #fff; border-radius: 10px; border: 1px solid #dddddd; position: absolute; left: -235px; top: 0px; }
.whatsapp-show .whatsapp-sanjiao {width:0; height: 0; border-style: solid; border-color: transparent transparent transparent #ffffff; border-width: 6px; left: 220px; top: 26px; position: absolute; z-index: 2;}
.whatsapp-show .whatsapp-sanjiao-big { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent #dddddd; border-width: 8px; left: 221px; top: 25px; position: absolute; }
.whatsapp-show .whatsapp-txt{ float:left; width:200px; padding:10px 12px 10px 10px; text-align:left; font-size:15px; color:#4c4c4c; }


.email-container {width: 50px; height: 48px;background: url(__TMPL__demo2/img/r_email.png) no-repeat #fff;}
.email-container:hover{ background:url(__TMPL__demo2/img/r_email.png) no-repeat #FFFFFF;}
.email-show {width: 235px; background: #fff; border-radius: 10px; border: 1px solid #dddddd; position: absolute; left: -245px; top: 0px; }
.email-show .email-sanjiao {width:0; height: 0; border-style: solid; border-color: transparent transparent transparent #ffffff; border-width: 6px; left: 235px; top: 26px; position: absolute; z-index: 2;}
.email-show .email-sanjiao-big { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent #fff; border-width: 8px; left: 221px; top: 25px; position: absolute; }
.email-show .email-txt{ float:left; width:200px; padding:10px 12px 10px 10px; text-align:left; font-size:15px; color:#4c4c4c; }
</style>    
  </body>
</html>