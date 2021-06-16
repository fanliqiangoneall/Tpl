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
 

<SCRIPT src="__TMPL__demo2/js/jquery-1.8.3.min.js" type="text/javascript"></SCRIPT>
<script type="text/javascript" src="__TMPL__f-Phoenix-banner/banner.js"></script>
<link href="__TMPL__f-Phoenix-banner/banner.css" rel="stylesheet">
<div class="page_Banner">
    <div class="DB_tab25">

        <ul class="DB_bgSet">
            <?php if(is_array($banner)): $i = 0; $__LIST__ = $banner;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$banner): $mod = ($i % 2 );++$i;?><a href="<?php echo ($banner['ad_link']);?>"><li style="background:url(<?php echo getimgurl($banner['ad_pic']);?>) center no-repeat; height:742px; display:block;"></li></a><?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>

        <ul class="DB_imgSet">
            <li>
              
            </li>
            <li>
               
            </li>
            <li>
               
            </li>
        </ul>

        <div class="DB_menuWrap">
            <ul class="DB_menuSet">
                <li><img src="__TMPL__demo2/img/btn_off.gif" alt=""/></li>
                <li><img src="__TMPL__demo2/img/btn_off.gif" alt=""/></li>
                <li><img src="__TMPL__demo2/img/btn_off.gif" alt=""/></li>
            </ul>
            <!--<div class="DB_next"><img src="__TMPL__demo2/img/nextArrow.png" alt="NEXT"/></div>
            <div class="DB_prev"><img src="__TMPL__demo2/img/prevArrow.png" alt="PREV"/></div> -->
        </div>

    </div>
</div>
<script type="text/javascript">
    $('.DB_tab25').DB_tabMotionBanner({
        key:'b28551',
        autoRollingTime:5000,
        bgSpeed:500,
        motion:{
            DB_1_1:{top:-50,opacity:0,speed:1000,delay:500},
			DB_1_2:{top:-30,opacity:0,speed:1000,delay:500},
            DB_2_1:{top:50,opacity:0,speed:1000,delay:500},
            DB_2_2:{top:50,opacity:0,speed:1000,delay:500},
            DB_3_1:{left:-50,opacity:0,speed:1000,delay:500},
			DB_3_2:{top:50,opacity:0,speed:1000,delay:1000},
            end:null
        }
    })
</script>
<link href="__TMPL__f-Phoenix-productcategories/productcategories.css" rel="stylesheet">

  <div class="index_fl">
    <div id="index_productslist_animate">
     <div class="index_fl_title">
        Product Categories
     </div>
     <div class="index_fl_title2">Glass Bottles, Jars & Containers Manufacturer</div>
    </div>
    <div id="index_productslist_animate_1">
     <div class="index_flcon">
        <li>
           <div style="text-align: center;height: 145px;"><a href="<?php echo U('/product_category/GLASS-BOTTLE');?>"><img src="__TMPL__demo2/img/fl1.png"></a></div>
           <div class="index_flcon2"><a href="<?php echo U('/product_category/GLASS-BOTTLE');?>">GLASS BOTTLE</a></div>
        </li>
        <li>
           <div style="text-align: center;height: 145px;"><a href="<?php echo U('/product_category/CERAMIC%20BOTTLE');?>"><img src="__TMPL__demo2/img/fl2.png"></a></div>
           <div class="index_flcon2"><a href="<?php echo U('/product_category/CERAMIC%20BOTTLE');?>">CERAMICS  BOTTLE</a></div>
        </li>
        <li>
           <div style="text-align: center;height: 145px;"><a href="<?php echo U('/product_category/PLASTIC');?>"><img src="__TMPL__demo2/img/fl3.png"></a></div>
           <div class="index_flcon2"><a href="<?php echo U('/product_category/PLASTIC');?>">PET  BOTTLE</a></div>
        </li>
     </div>
    </div> 
  </div>

<script>
jQuery('#index_productslist_animate').removeClass().addClass('fadeInRight');
$(window).scroll( function() {
  scrollTop=$(document).scrollTop();
  //alert(scrollTop);
  
  if(scrollTop>100){  
  $('#index_productslist_animate_1').show();
  $('#index_productslist_animate_1').removeClass().addClass('fadeInLeft');
  }

});
</script>
<link href="__TMPL__f-Phoenix-products/products.css" rel="stylesheet">
<div class="index_products">
<div class="index_product2">
 <div id="index_products_animate" style="display:none;">
  <div class="index_products_title">
   Products Showcase 
  </div>
 </div>

    <div class="index_products_zwbg" id="pic">
     <div id="index_products_animate_2" style="display:none;"> 
      <div class="index_proleft">
          <img src="__TMPL__demo2/img/cpbg.jpg">
      </div>
     </div> 
     <div id="index_products_animate_1" style="display:none;"> 
      <div style="width: 843px;float: right;">
        <?php if(is_array($indexpro)): $i = 0; $__LIST__ = array_slice($indexpro,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$indexpro): $mod = ($i % 2 );++$i;?><div class="asd2">
                <div class="img2" ><a href="<?php echo U('/Product','','');?>/<?php echo getproname($indexpro['pid']);?>"><img src="<?php echo getpcimgurl($indexpro['main_img']);?>" <?php if($indexpro['proalt'] != ''): ?>alt="<?php echo ($allpro['proalt']); ?>"<?php else: ?>alt="<?php echo ($indexpro['pro_name']); ?>"<?php endif; ?> /></a>
                </div>
                
                <div class="in_proname2">
                   <a href="<?php echo U('/Product','','');?>/<?php echo getproname($indexpro['pid']);?>"><?php echo ($indexpro['pro_name']); ?></a>
                </div>
                
              </div>
            <?php if(($key+1)%3 == 0): ?><div style="clear:both; width: 100%; height:34px;"></div>
          <?php else: ?>
              <div style="width:32px; height:10px; background:none; float:left;"></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
        <div style="clear: both;width: 100%;height: 22px;"></div> 
       </div>  
    </div>
  </div>
 </div> 
</div>
<script>
$(window).scroll( function() {
	scrollTop=$(document).scrollTop();
	//alert(scrollTop);
	
	if(scrollTop>580){	
	$('#index_products_animate_1').show();
	$('#index_products_animate_1').removeClass().addClass('fadeInRightBig');
  $('#index_products_animate_2').show();
  $('#index_products_animate_2').removeClass().addClass('fadeInDown');
  $('#index_products_animate').show();
  $('#index_products_animate').removeClass().addClass('fadeInLeft');
	}

});
</script>
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
<style type="text/css">
    .pro_case{width: 100%;background: url(__TMPL__demo2/img/casebg.jpg) center center no-repeat;height: 537px;}
    .pro_case2{width: 100%;background: url(__TMPL__demo2/img/case2.jpg) center center no-repeat;height: 537px;}
    #tab1 li{float: left;width: 840px;overflow: hidden;margin-left: 300px}
    #tab2 li{float: left;width: 840px;overflow: hidden;margin-left: 300px}
     #tab3 li{float: left;width: 840px;overflow: hidden;margin-left: 300px}
    #tab1 li img{
       cursor: pointer;
       transition: all 0.6s;
    }
    #tab1 li:hover img{
       transform: scale(1.2);  
    }
    #tab2 li img{
       cursor: pointer;
       transition: all 0.6s;
       width: 95%;
    }
    #tab2 li:hover img{
       transform: scale(1.2);  
    }
    .pro_caselist{width: 150px;position: absolute;right: -20px;bottom:45px;}
    .pro_caselist li{float: left;width: 20px;height: 20px;background: url(__TMPL__demo2/img/btn_off.gif) no-repeat;}
    .pro_caselist li:active{background: url(__TMPL__demo2/img/btn_on.gif) no-repeat;}
    #tab {clear: both;margin-top: 30px;}
    .pro_caselist li:hover{cursor: -webkit-grab;}
    .main{ border: none !important;}
    .index_case_title{line-height: 50px;font-size: 35px;color: #111111;padding-bottom: 21px;background:url(__TMPL__demo2/img/fl_bg2.png) bottom center no-repeat;text-align: center;}
    #index_case_animate_1,#index_case_animate_2{
-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-ms-backface-visibility: hidden;
backface-visibility: hidden;

-webkit-animation-duration: 1s;
-webkit-animation-delay: .2s;
-webkit-animation-timing-function: ease;
-webkit-animation-fill-mode: both;
-moz-animation-duration: 1s;
-moz-animation-delay: .2s;
-moz-animation-timing-function: ease;
-moz-animation-fill-mode: both;
-ms-animation-duration: 1s;
-ms-animation-delay: .2s;
-ms-animation-timing-function: ease;
-ms-animation-fill-mode: both;
animation-duration: 1s;
animation-delay: .2s;
animation-timing-function: ease;
animation-fill-mode: both;
}

.cases_more{width: 153px !important;height: 38px;border:1px solid #333;border-radius: 15px;text-align: center;margin: auto;margin-top: 15px;}
.cases_more a{font-size: 18px;line-height: 38px}
.cases_more:hover{border:1px solid #66bfb1;}
.cases_more:hover a{color: #66bfb1}
</style>

<div id="index_case_animate_1">
<div class="pro_case" id="pro_case"> 
 <div style="width: 1190px;margin: auto;height: 536px;position: relative;">
    <div style="clear: both;width: 100%;height: 100px;"></div>
    <div class="index_case_title">
      Classic Products
    </div>

  <div id="tab">
   <div id="tab1">
      <li style="font-size: 24px;color: #333333;height: 40px;line-height: 40px;margin-bottom: 10px;">
         Name: Hawaii
      </li>
      <li style="font-size: 18px;color: #333;line-height: 38px;">
         <span style="font-size: 24px;color: #333333">Production process：</span>The translucent blue bottle is shaped like the hand-blown glass fishing net floats first used by Norwegian fishermen in the mid 1800s. Demonstrating the global environmental significance of the brand, the neck of the bottle is angled to mimic the Earth’s axis. Extra glass sediment is added perpendicular and at the bottom of the package to ensure the freshly molded, angled bottle stands upright as it cools on the conveyor belt.
      </li>
      <li class="cases_more"><a href="<?php echo U('/cases');?>">More cases</a></li>
   </div>
   <div id="tab2" style="display: none;">
      <li style="font-size: 24px;color: #333333;height: 40px;line-height: 40px;margin-bottom: 10px;">
         Name: Bluecoat Gin
      </li>
      <li style="font-size: 18px;color: #333;line-height: 38px;">
         <span style="font-size: 24px;color: #333333">Production process：</span>Stunning deep blue rectangular glass bottle with rounded shoulders, lightly pressed glass design and gold script on front. Concave sides with Bluecoat pressed into sides make for a very ergonomic no-slip grip. A beautiful attractive package that is very distinctive.
      </li>
      <li class="cases_more"><a href="<?php echo U('/cases');?>">More cases</a></li>
   </div>
   <div id="tab3" style="display: none;">
      <li style="font-size: 24px;color: #333333;height: 40px;line-height: 40px;margin-bottom: 10px;">
         Name: Beach Whiskey
      </li>
      <li style="font-size: 18px;color: #333;line-height: 38px;">
         <span style="font-size: 24px;color: #333333">Production process：</span>Beach Whiskey sets out to combine whiskey with the seaside style. Think bikinis, palm trees, lapping waves and large umbrellas. The packaging begins the story with its custom sea glass bottles and etched labeling.It feels like vacation,no mater where you are.That’s what we’re try to capture on the bottles.
      </li>
      <li class="cases_more"><a href="<?php echo U('/cases');?>">More cases</a></li>
   </div>
  </div>
  <div id="tabNav">
  <ul class="pro_caselist">
   <li onclick="tab('tab1')" class="button1"></li>
   <li onclick="tab('tab2')" class="button2"></li>
   <li onclick="tab('tab3')" class="button3"></li>
  </ul>
</div>
 </div>
    
</div>
</div>
 <script>
 function tab(pid){
  var tabs=["tab1","tab2","tab3"];
  for(var i=0;i<3;i++){
   if(tabs[i]==pid){
    document.getElementById(tabs[i]).style.display="block";
  }else{
    document.getElementById(tabs[i]).style.display="none";
  }
  }
 }
 </script>
 <script type="text/javascript">
$('.button1').on('click', function() {
document.getElementById('pro_case').style.background = 'url("__TMPL__demo2/img/casebg.jpg")'; // 变掉
});
$('.button2').on('click', function() {
document.getElementById('pro_case').style.background = 'url("__TMPL__demo2/img/case2.jpg")'; // 变回来
});
$('.button3').on('click', function() {
document.getElementById('pro_case').style.background = 'url("__TMPL__demo2/img/case3.jpg")'; // 变回来
});
 </script>

<script>
$(window).scroll( function() {
  scrollTop=$(document).scrollTop();
  //alert(scrollTop);
  
  if(scrollTop>1150){  
  $('#index_case_animate_1').show();
  $('#index_case_animate_1').removeClass().addClass('fadeInDown');
  $('#index_products_animate_2').show();
  $('#index_products_animate_2').removeClass().addClass('fadeInDown');
  $('#index_products_animate').show();
  $('#index_products_animate').removeClass().addClass('fadeInLeft');
  }

});
</script>
<link href="__TMPL__f-Phoenix-advantage/advantage.css" rel="stylesheet">
<div id="index_advantage">
  <div style="width: 1190px;margin: auto;height: 603px;position: relative;">
   <div id="index_advantage_animate">
    <div class="index_ad_left">
       <div class="index_ad_title">
           Three Advantages
       </div>
       <div class="ad_left1">
          <div class="ad_left_title" style="background: url(__TMPL__demo2/img/ad1.png) center left no-repeat;">Customized</div>
          <div class="ad_left_con">Customized design to make your product standingout. </div>
       </div>
        <div class="ad_left2">
          <div class="ad_left_title" style="background: url(__TMPL__demo2/img/ad2.png) center left no-repeat;">Various</div>
          <div class="ad_left_con">Our knowledge on wide range of material selection as well as process selection to get desired look and finish</div>
       </div>
        <div class="ad_left3">
          <div class="ad_left_title" style="background: url(__TMPL__demo2/img/ad3.png) center left no-repeat;">Quality efficiency</div>
          <div class="ad_left_con">Consistent quality control with best possible delivery<br /> 
date</div>
       </div>
    </div>
   </div>
   <div id="index_advantage_animate_1">
    <div class="index_advantage_adv_cont">
          <div class="index_advantage_adv_ad_1">
             <img src="__TMPL__demo2/img/ad_right.png">
          </div>
          

        <div style="clear: both;"></div>
      
    </div>
   </div>  
  </div>  
</div>
<script>
$(window).scroll( function() {
	scrollTop=$(document).scrollTop();
	//alert(scrollTop);
	
	if(scrollTop>1700){
		$('#index_advantage_animate').show();
		$('#index_advantage_animate').removeClass().addClass('fadeInDown');
		$("#index_advantage_animate_1").show();
		$("#index_advantage_animate_1").addClass("fadeInUpBig");
		$(".ad_left1").show();
		$(".ad_left1").addClass("fadeInRightBig");
		$(".ad_left2").show();
		$(".ad_left2").addClass("fadeInRightBig1");
		$(".ad_left3").show();
		$(".ad_left3").addClass("fadeInRightBig2");
	}
});
</script>
<script>
$(document).ready(function () { 
  $('#index_se1 a').has('img').not(".pdf").lightBox();
});
</script>

<script type="text/javascript" src="__TMPL__demo2/js/jquery.lightbox-0.5.min.js"></script>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/jquery.lightbox-0.5.css"/>
<style type="text/css">
.index_ser{width: 1190px;height: 610px;margin: 0 auto;padding-top: 30px}
.index_se1{font-size: 16px;color: #999999;padding-top: 105px;text-align: center;}
.index_ser_title{line-height: 50px;font-size: 35px;color: #111111;padding-bottom: 21px;background:url(__TMPL__demo2/img/fl_bg.png) bottom center no-repeat;text-align: center;}


#jquery-lightbox{overflow: overlay}
#index_about_animate,#index_about_animate_1,#index_se1,#index_serimg{
-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-ms-backface-visibility: hidden;
backface-visibility: hidden;

-webkit-animation-duration: 1s;
-webkit-animation-delay: .2s;
-webkit-animation-timing-function: ease;
-webkit-animation-fill-mode: both;
-moz-animation-duration: 1s;
-moz-animation-delay: .2s;
-moz-animation-timing-function: ease;
-moz-animation-fill-mode: both;
-ms-animation-duration: 1s;
-ms-animation-delay: .2s;
-ms-animation-timing-function: ease;
-ms-animation-fill-mode: both;
animation-duration: 1s;
animation-delay: .2s;
animation-timing-function: ease;
animation-fill-mode: both;
}
</style>  
    
  
<div class="index_ser">
  <div id="index_se1" style="display: none;">
   <div class="index_ser_title">
         Production Showcase
    </div>
    <div id="index_se1">
       <a href="__TMPL__demo2/img/serbg2.jpg"><img src="__TMPL__demo2/img/serbg.jpg"></a>
    </div>
  </div>  
    <div>
       <script language="javascript">
      var Speed_1 = 5; //速度(毫秒)
      var Space_1 = 20; //每次移动(px)
      var PageWidth_1 = 1190 * 1; //翻页宽度 192是翻一个
      var interval_1 = 4000; //翻页间隔
      var fill_1 = 0; //整体移位
      var MoveLock_1 = false;
      var MoveTimeObj_1;
      var MoveWay_1="right";
      var Comp_1 = 0;
      var AutoPlayObj_1=null;
      function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
      function AutoPlay_1(){clearInterval(AutoPlayObj_1);AutoPlayObj_1=setInterval('ISL_GoDown_1();ISL_StopDown_1();',interval_1)}
      function ISL_GoUp_1(){if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="left";MoveTimeObj_1=setInterval('ISL_ScrUp_1();',Speed_1);}
      function ISL_StopUp_1(){if(MoveWay_1 == "right"){return};clearInterval(MoveTimeObj_1);if((GetObj('ISL_Cont_1').scrollLeft-fill_1)%PageWidth_1!=0){Comp_1=fill_1-(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1);CompScr_1()}else{MoveLock_1=false}
      AutoPlay_1()}
      function ISL_ScrUp_1(){if(GetObj('ISL_Cont_1').scrollLeft<=0){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft+GetObj('List1_1').offsetWidth}
      GetObj('ISL_Cont_1').scrollLeft-=Space_1}
      function ISL_GoDown_1(){clearInterval(MoveTimeObj_1);if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="right";ISL_ScrDown_1();MoveTimeObj_1=setInterval('ISL_ScrDown_1()',Speed_1)}
      function ISL_StopDown_1(){if(MoveWay_1 == "left"){return};clearInterval(MoveTimeObj_1);if(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1-(fill_1>=0?fill_1:fill_1+1)!=0){Comp_1=PageWidth_1-GetObj('ISL_Cont_1').scrollLeft%PageWidth_1+fill_1;CompScr_1()}else{MoveLock_1=false}
      AutoPlay_1()}
      function ISL_ScrDown_1(){if(GetObj('ISL_Cont_1').scrollLeft>=GetObj('List1_1').scrollWidth){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft-GetObj('List1_1').scrollWidth}
      GetObj('ISL_Cont_1').scrollLeft+=Space_1}
      function CompScr_1(){if(Comp_1==0){MoveLock_1=false;return}
      var num,TempSpeed=Speed_1,TempSpace=Space_1;if(Math.abs(Comp_1)<PageWidth_1/2){TempSpace=Math.round(Math.abs(Comp_1/Space_1));if(TempSpace<1){TempSpace=1}}
      if(Comp_1<0){if(Comp_1<-TempSpace){Comp_1+=TempSpace;num=TempSpace}else{num=-Comp_1;Comp_1=0}
      GetObj('ISL_Cont_1').scrollLeft-=num;setTimeout('CompScr_1()',TempSpeed)}else{if(Comp_1>TempSpace){Comp_1-=TempSpace;num=TempSpace}else{num=Comp_1;Comp_1=0}
      GetObj('ISL_Cont_1').scrollLeft+=num;setTimeout('CompScr_1()',TempSpeed)}}
      function picrun_ini(){
      GetObj("List2_1").innerHTML=GetObj("List1_1").innerHTML;
      GetObj('ISL_Cont_1').scrollLeft=fill_1>=0?fill_1:GetObj('List1_1').scrollWidth-Math.abs(fill_1);
      GetObj("ISL_Cont_1").onmouseover=function(){clearInterval(AutoPlayObj_1)}
      GetObj("ISL_Cont_1").onmouseout=function(){AutoPlay_1()}
      AutoPlay_1();
      }
      
      
      </script>
      <style type="text/css">
      .blk_18 {
          OVERFLOW: hidden;width:1190px;  margin:auto; ZOOM: 1; position: relative;
      }
      .blk_18 .pcont { 
           OVERFLOW: hidden; WIDTH:1190px; margin:auto; 
      }
      .blk_18 .ScrCont {
          WIDTH: 32766px; ZOOM: 1
      }
      .blk_18 #List1_1 {
          FLOAT: left;
      }
      .blk_18 #List2_1 {
          FLOAT: left;
      }
      .blk_18 .LeftBotton {
          height: 29px; width:29px; position:absolute; bottom:0px; background:url(__TMPL__demo2/img/pro_right.jpg) no-repeat; right: 0px; z-index:11;
      }

      .blk_18 .LeftBotton a{ width:18px; display:block;}
      .blk_18 .RightBotton {
          WIDTH: 29px; HEIGHT:29px; position:absolute; bottom:0px; background:url(__TMPL__demo2/img/pro_left.jpg) no-repeat; right:42px; z-index:11;
      }

      .blk_18 .RightBotton a{ width:18px; display:block; cursor:pointer;}
      .blk_18 .LeftBotton:hover {
      }
      .blk_18 .RightBotton:hover {
      }
      .blk_18 .asd{width:1190px; float:left; position:relative; overflow:hidden;font-size: 16px;color: #333333;line-height: 30px;}
      .asd p{text-align: center;height: 60px;line-height: 60px;color: #5c5c5c}

      .blk_18 .asd:hover img{}
      .blk_18 .asd:hover p{color: #0050b9}
      .commu_cont3 {
          MARGIN: 9px 7px 7px; LINE-HEIGHT: 150%
      }
      .commu_cont3 UL {
          WIDTH: 132px
      }
      </style>
      <div class="blk_18" >
          <A onMouseUp="ISL_StopUp_1()" class="LeftBotton" onMouseDown="ISL_GoUp_1()" onMouseOut="ISL_StopUp_1()" href="javascript:void(0);" target="_self" onFocus="blur();"></A>
          <div class="pcont" id="ISL_Cont_1">
              <div class="ScrCont">
                <div id="List1_1">
                  <div class="asd">
                    <span style="font-size: 18px;color: #333333;line-height: 35px;">Custom Bottle Design</span><br />
1.1 Our designer asks questions to the client who has some concept/idea in mind => Sketch on a piece of paper<br />
1.2 Our designer turns the sketch into 3D model/rendering combined with decoration like coating/frosting/decal/silk screen print/label as well as<br /> closure type depending on if it is cork finish/thread finish/swing top finish. <br />
1.3 To get 2D production drawing extracted from 3D rendering ready for sampling<br />
1.4 Once sampling is approved, then go for production mold and bottle mass production
                  </div>
                  <div class="asd">
                    <span style="font-size: 18px;color: #333333;line-height: 35px;">Glass Bottle Manufacturing Process</span><br />
2.1 Composition of glass<br />
2.2 Fusion of raw material<br />
2.3 Molding of glass containers<br />
2.4 The re-firing and treatment of the glass surface<br />
2.5 Inspection and quality control<br />
2.6 Packaging<br />
                  </div>
                </div>
                <div id="List2_1">
             
            </div>
          </div>
        </div>
        <A class="RightBotton" onMouseUp="ISL_StopDown_1()" onMouseDown="ISL_GoDown_1()" onMouseOut="ISL_StopDown_1()" href="javascript:void(0);" target="_self" onFocus="blur();"></A>
      </div>
      <script type="text/javascript">picrun_ini()</script>
      <div class="clear"></div> 
    </div> 
 

</div>



<script>
$(window).scroll( function() {
    scrollTop=$(document).scrollTop();
    //alert(scrollTop);
    
    if(scrollTop>2600){  
    $('#index_se1').show();
    $('#index_se1').removeClass().addClass('fadeInDown');
    $('#index_serimg').show();
    $('#index_serimg').removeClass().addClass('fadeInLeft');
    $('#index_about_animate_2').show();
    $('#index_about_animate_2').removeClass().addClass('swing');
    }

});

function show(n)
{
document.getElementById(n).style.display="block";
}
function hide(n)
{
document.getElementById(n).style.display="none";
}
</script>
<link href="__TMPL__f-Phoenix-aboutus/aboutus.css" rel="stylesheet">
<div class="index_about_aboutbg">
    <div id="index_about_animate"><div class="index_about_title">About us</div></div>
    <div id="index_about_animate_1" style="display: none;">
  <div class="index_about">
    <div class="index_about_aboutnr">
      <div class="index_about_con"><?php echo HtmlEncode(subtxt($company_info['description'],705));?></div>
      <div style="width: 100%;height: 25px;clear: both;"></div>
      <li class="about_more"><a href="<?php echo U('/aboutus');?>">Read more</a></li>
    </div>
    </div>
   </div>  
</div>
<script>
$(window).scroll( function() {
	scrollTop=$(document).scrollTop();
	//alert(scrollTop);
	
	if(scrollTop>3261){	
	$('#index_about_animate').show();
	$('#index_about_animate').removeClass().addClass('fadeInDown');
	$('#index_about_animate_1').show();
	$('#index_about_animate_1').removeClass().addClass('fadeInLeft');
	$('#index_about_animate_2').show();
	$('#index_about_animate_2').removeClass().addClass('swing');
	}

});

function show(n)
{
document.getElementById(n).style.display="block";
}
function hide(n)
{
document.getElementById(n).style.display="none";
}
</script>
<link rel="stylesheet" href="__TMPL__f-Phoenix-news/news.css"/>
<div style="height: 558px;">
<div class="index_jy_news">
    <div class="container">
        <div class="index_news_title">
          News center
        </div>
        <div style="margin-top: 35px;">
            <ul class=" index_jy_newlist">

                <?php if(is_array($news[1769])): $i = 0; $__LIST__ = array_slice($news[1769],0,3,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$indexnews): $mod = ($i % 2 );++$i;?><li>

                            <div class="news_pic"><?php if($indexnews['new_pro'] != ''): ?><a href="<?php echo U('/new_detail',array('nid'=>$indexnews["nid"]));?>" onFocus="blur()"><img src="<?php echo getimgurl($indexnews['new_pro']);?>" border="0" alt="<?php echo ($indexnews['title']); ?>"></a><?php else: ?><img src="__TMPL__demo2/img/newspic.jpg" border="0" /><?php endif; ?></div>
                            <div class="newslist">
                                <div class="news_title"><a href="<?php echo U('/new_detail',array('nid'=>$indexnews["nid"]));?>" onFocus="blur()"><?php echo subtxt($indexnews['title'],50);?></a></div>
                                <div class="news_time"><?php echo date('Y-M-d',$indexnews['created']);?></div>
                            </div>
                    </li>
                    <?php if(($key+1)%3 == 0): ?><div style="clear:both; overflow:hidden; height:36px;"></div>
                        <?php else: ?>
                        <div style="width:30px; height:10px; background:none; float:left;"></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
            </ul>

            <div class="clear"></div>
        </div>
        <li class="news_more"><a href="<?php echo U('/news');?>">Read more</a></li>

    </div>
</div>
</div>


<script>
    $(window).scroll( function() {
        scrollTop=$(document).scrollTop();
        if(scrollTop>2000){
            $('.indexnewstitle').show().addClass('fadeInUp');
            $('.index_jy_newlist').show().addClass('fadeInUp');


        }
    });
</script>





<link href="__TMPL__f-Phoenix-bottom/bottom.css" rel="stylesheet">
<div class="index_bottom_footer">
 <div style="width: 1190px;height: 260px;margin: 0 auto">
   <div class="index_bottom_nav">
      <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,9,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li id="menu<?php echo ($key); ?>"><a href="<?php echo ($vo['url']); ?>" <?php if(strstr($vo['url'],'/contactus.html') == '/contactus.html'): ?>onclick="turn_sta(2,1)"<?php endif; ?> onFocus="blur()"><?php echo ($vo['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
   </div>
 <div class="index_bottom_left">
   <div class="index_bottom_left_d">
     <li>Manager: <?php echo ($about['contact']); ?></li>
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

 <?php if($friend_link != ''): ?><div class="friendlink" style="margin-top: 10px;">
            <div class="link"><span style="font-size:14px; font-weight:bold; float:left;line-height:20px;color: #333">FriendLink: </span>
                <?php if(is_array($friend_link)): $i = 0; $__LIST__ = $friend_link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$friend_link): $mod = ($i % 2 );++$i; if($friend_link['linkurl'] != ''): ?><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><img style="width:70px; height:25px; float:left;" src="<?php echo getimgurl($friend_link['linkurl']);?>"/></a><?php else: ?>
                        <div style="float:left; text-align:center;color: #fff;line-height: 20px;margin-right: 10px;"><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><?php echo ($friend_link['link_title']); ?></a></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                <!--<div style="clear:both"></div>-->
            </div>
            <div style="clear:both"></div>
        </div><?php endif; ?>


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