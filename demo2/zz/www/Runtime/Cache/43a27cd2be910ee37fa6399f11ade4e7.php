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

<script>
$(document).ready(function () {
	$('#menu7').removeClass().addClass("menuon");
});
</script>
<div id="animate_banner">
<?php if($banner != ''): if(is_array($banner)): $i = 0; $__LIST__ = array_slice($banner,0,1,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$banner): $mod = ($i % 2 );++$i;?><div class="in_banner" style="background:url(<?php echo getimgurl($banner['ad_pic']);?>) center no-repeat"></div><?php endforeach; endif; else: echo "" ;endif; ?>
<?php else: ?>
<div class="in_banner" style="background:url(__TMPL__demo2/img/inbanner.jpg) center no-repeat"></div><?php endif; ?>
</div>

<div class="r_mbx"><img src="__TMPL__demo2/img/in_home.jpg" border="0" style="vertical-align:middle;" />&nbsp;<a href="<?php echo U('/');?>">Home</a>&nbsp;>&nbsp;<?php echo ($intro_class['class_name']); ?></div>

<div style="width: 1190px;margin:0 auto">
<div class="page_Main" style="width: 100%">
   <div class="page_RightTitle" style="width: 100%"><span><?php echo ($intro_class['class_name']); ?></span></div>
   <div class="page_RightMain" style="width: 100%"><?php echo htmlspecialchars_decode($intro_class['readme']); echo htmlspecialchars_decode(get_contactus_code());?>
      <style type="text/css">
		#mapContainer{
			width:100%; height:400px; margin-top:20px;
		}
		#tip{
			height:30px;
			background-color:#fff;
			padding-left:10px;
			padding-right:10px;
			position:absolute;
			font-size:12px;
			right:10px;
			bottom:20px;
			border-radius:3px;
			line-height:30px;
			border:1px solid #ccc;
		}
		div.info-top {
			position: relative;
			background: none repeat scroll 0 0 #F9F9F9;
			border-bottom: 1px solid #CCC;
			border-radius:5px 5px 0 0;
		}
		div.info-top div {
			display: inline-block;
			color: #333333 !important;
			font-size:14px;
			font-weight:bold;
			line-height:31px;
			padding:0 10px;
		}
		div.info-top img {
			position: absolute;
			top: 10px;
			right: 10px;
			transition-duration: 0.25s;
		}
		div.info-top img:hover{
			box-shadow: 0px 0px 5px #000;
		}
		div.info-middle {
			font-size:12px;
			padding:10px;
			line-height:21px;
			color: #333333 !important;
		}
		div.info-bottom {
			height:0px;
			width:100%;
			clear:both;
			text-align:center;
		}
		div.info-bottom img{
			position: relative;
			z-index:104;
		}
	</style>
 
	<div id="mapContainer"></div>	
	
	<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=acec09c5cb681ce58f6b08dcee4ff705"></script>
	<script type="text/javascript">
		//初始化地图对象，加载地图
		var map = new AMap.Map("mapContainer",{
			resizeEnable: true,
			//二维地图显示视口
			view: new AMap.View2D({
				//地图中心点
				center:new AMap.LngLat(119.945415,36.776872),
				//地图显示的缩放级别
				zoom:16 
			})
		});
		//地图中添加地图操作ToolBar插件
		map.plugin(["AMap.ToolBar"], function(){		
			var toolBar = new AMap.ToolBar(); 
			map.addControl(toolBar);		
		});
		map.setLang('en');
		//地图初始化时，在地图上添加一个marker标记,鼠标点击marker可弹出自定义的信息窗体
	    addMarker();
		//添加marker标记
		function addMarker(){
		   map.clearMap();
		   var marker = new AMap.Marker({ 					 
			   map: map,					 
			   //位置 
			   position: new AMap.LngLat(119.945415,36.776872), 
			   //复杂图标    
			   icon: "http://webapi.amap.com/images/0.png"    
		   }); 
		   //鼠标点击marker弹出自定义的信息窗体
		   AMap.event.addListener(marker,'click',function(){ 
				 infoWindow.open(map,marker.getPosition());	
		   });	
		}
		
		//实例化信息窗体
		var infoWindow = new AMap.InfoWindow({
				isCustom:true,  //使用自定义窗体
				content:createInfoWindow("<?php echo ($about['company_name']); ?>","Address:<?php echo ($about['address']); ?>"),
				offset:new AMap.Pixel(16, -45)//-113, -140
			});
		
		//构建自定义信息窗体	
		function createInfoWindow(title,content){
			var info = document.createElement("div");
			info.className = "info";

			// 定义顶部标题
			var top = document.createElement("div");
			var titleD = document.createElement("div");
			var closeX = document.createElement("img");
			top.className = "info-top"; 
			titleD.innerHTML = title; 
			closeX.src = "http://webapi.amap.com/images/close2.gif";
			closeX.onclick = closeInfoWindow;
			  
			top.appendChild(titleD);
			top.appendChild(closeX);
			info.appendChild(top);
			
		    
			// 定义中部内容
			var middle = document.createElement("div");
			middle.className = "info-middle";
			middle.style.backgroundColor='white';
			middle.innerHTML = content;
			info.appendChild(middle);
			
			// 定义底部内容
			var bottom = document.createElement("div");
			bottom.className = "info-bottom";
			bottom.style.position = 'relative';
			bottom.style.top = '0px';
			bottom.style.margin = '0 auto';
			var sharp = document.createElement("img");
			sharp.src = "http://webapi.amap.com/images/sharp.png";
			bottom.appendChild(sharp);	
			info.appendChild(bottom);
			return info;
		}
		
		//关闭信息窗体
		function closeInfoWindow(){
			map.clearInfoWindow();
		}
	</script>
   </div>
   <div class="page_RightTitle2" id="inquiry" style="width: 100%;background: url(__TMPL__demo2/img/in_titledot2.jpg) bottom left no-repeat">Inquiry Now</div>  
   <div class="page_RightMain" style="margin-top:5px;width: 100%"><style>
body{font-size:12px;}
.inquiry{width:100%;padding:0px 0 40px 0;}
.inquiry h2{border-bottom:1px solid #ccc;padding-bottom:5px; font-family:'Arial';color:#333333;}
.inquiryinfo{width:100%; padding-bottom:5px;}
.inquiryinfo input{height:20px;line-height:20px;padding:2px;border:1px solid #999;width:200px;}
.inquiryinfo textarea{padding:2px;border:1px solid #999; width:912px; max-width:912px; font-family:Arial}

.inquiryleft{float:left;width:100%;}
.inquiryright{float:left;width:100%;}
.productbutton{
background: #65c0b4;
color: #ffffff;
border: 0 !important;
cursor: pointer;
height: 35px !important;
font-size:14px;
text-transform:none !important;
padding: 0 10px 0 10px !important;
width:69px !important;
}
.yz_alert{color:#ff0000; text-align:left; width:100%; line-height:18px;}
.clear{clear:both; overflow:hidden; height:1px;}
</style>
<script>
jQuery(function(){
jQuery("#message").focus(function(){
jQuery("#message_alert").html("");
});
jQuery("#linkname").focus(function(){
jQuery("#linkname_alert").html("");
});
jQuery("#phone").focus(function(){
jQuery("#phone_alert").html("");
});
jQuery("#email").focus(function(){
jQuery("#email_alert").html("");
});
jQuery("#code_char").focus(function(){
jQuery("#code_char_alert").html("");
});


jQuery("#getcode_char").click(function(){
		jQuery(this).attr("src",'__APP__/code_char.php?' + Math.random());
	});

jQuery("#getcode_char1").click(function(){
		jQuery("#getcode_char").attr("src",'__APP__/code_char.php?' + Math.random());
	});

})


function yz_submit(){
var count=0;
var message=Trims(jQuery("#message").val());
var linkname=Trims(jQuery("#linkname").val());
var phone=Trims(jQuery("#phone").val());
var email=Trims(jQuery("#email").val());
if(message.length<=0){
jQuery("#message_alert").html("*Consulting content cannot be empty");
count++;
}
else{
jQuery("#message_alert").html("");
}

if(linkname.length<=0){
jQuery("#linkname_alert").html("*The name cannot be empty");
count++;
}
else{
jQuery("#linkname_alert").html("");
}


 var str=/[\u4E00-\u9FA5a-zA-Z]/;   
if(phone.length>0 && str.test(jQuery('#phone').val()))   
{
jQuery("#phone_alert").html("*Telephone information is wrong!");
count++;
}else{
jQuery("#phone_alert").html("");
}

if(email.length<=0){
  jQuery("#email_alert").html("*The email can not be empty");
  count++;
}
else{
		  if(!is_email(email)){
		  	jQuery("#email_alert").html("*Email format error");
		  	count++;
		  }
		else {
			  jQuery("#email_alert").html("");
			  }
}

if($("#dragEle").attr("validate")){
	   
	jQuery("#code_char_alert").html("");
  }else{
	
   count++;
   jQuery("#code_char_alert").html("*Please drag the slider to verify");
  }


if(count>0){
return false;
}
else{
jQuery("#inbut").html('<h5 style="color:#F00;">Please wait</h5>');	

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
<form action="__APP__/saveinquiry" method="post" onsubmit="return yz_submit();">
<div class="inquiryinfo">
    <div class="inquiryleft">Message *</div>
    <div class="inquiryright"><textarea name="message" id="message" style="padding:5px; width:80%; height:100px;"><?php echo ($product["pro_name"]); ?></textarea><div class="clear"></div><span class="yz_alert" id="message_alert"></span>
    <div class="clear"></div>
    </div>
    <div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">Name *</div>
    <div class="inquiryright"><input name="linkname" id="linkname"><div class="clear"></div><span class="yz_alert" id="linkname_alert"></span></div>
    <div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">Phone</div>
    <div class="inquiryright"><input  name="phone" id="phone"><div class="clear"></div><span class="yz_alert" id="phone_alert"></span></div>
    <div class="clear"></div>
</div>

<div class="inquiryinfo">
    <div class="inquiryleft">Email*</div>
    <div class="inquiryright"><input  name="email" id="email"><div class="clear"></div><span class="yz_alert" id="email_alert"></span></div>
    <div class="clear"></div>
</div>

<!--滑块拖动-->

<div class="inquiryinfo">
    <div class="inquiryleft">&nbsp;</div>
	<div class="inquiryright">
    
    <div class="box">
 　　　　<a href="javascrpt:;"><div class="btndrag" id="dragEle" style="color:#fff !important;line-height:30px;"></div></a>
 　　　　<div class="tips">>>Drag the slider to verify<<</div>
 　　</div>
 <style>
.box {
    position: relative;
    width: 230px;
    height: 30px;
	
    border-radius: 20px;
    background: #676b6a;
    line-height: 30px;
    overflow: hidden;
    color: #fff !important;
    font-size: 12px;
}
.btndrag {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background: #65c0b4;
    border-radius: 20px;
    text-align: center;
}
.tips {
	line-height: 30px;
    text-align: center;
	 position: absolute;
    top: 0;
    left: 35px;
	color: #fff !important;
}

</style>
 <script type="text/javascript">
 function DragValidate (dargEle,msgEle){
        var dragging = false;//滑块拖动标识
        var iX;
        dargEle.mousedown(function(e) {
            msgEle.text("");
            dragging = true;
            iX = e.clientX; //获取初始坐标
        });
        $(document).mousemove(function(e) {
            if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                if(oX < 30){
                    return false;
                };
                if(oX >= 240);
                dargEle.width(oX + "px");
                //console.log(oX);
                return false;
            };
        });
   		$(document).mouseup(function(e) {
			jQuery("#code_char_alert").html("");
            var width = dargEle.width();
            if(width < 230){
                //console.log(width);
                dargEle.width("30px");
                msgEle.text(">>Drag the slider to verify<<");
            }else{
				
                dargEle.attr("validate","true").text("Verification is successful！").unbind("mousedown");
				dargEle.width("230px");
            };
            dragging = false;
        });
    };
	 DragValidate($("#dragEle"),$(".tips"));

</script>
 
 
   <span class="yz_alert" id="code_char_alert"></span></div>
	<div class="clear"></div>
</div>
<!--滑块拖动 end-->

<div class="inquiryinfo" style="padding-top:15px;">
<input type="hidden" name="prodid" value="<?php echo ($product['pid']); ?>"/>
<div id="inbut"><input  class="productbutton" type="submit" value="Submit"  name="submit" /></div>
</div>
</form>

<div class="clear"></div>
</div></div>
   <div style="clear:both"></div>
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
       Tel: <?php echo chaifen($about['mobile'],0);?>
     </li>

     <li>
       Email: <a href="mailto:<?php echo chaifen($about[email],0);?>" onclick="turn_sta(3,4);gtag_report_conversion_email();" style="color:#a1a1a2"><?php echo chaifen($about['email'],0);?></a>
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
.email-show {width: 235px; background: #fff; border-radius: 10px; border: 1px solid #dddddd; position: absolute; left: -255px; top: 0px; }
.email-show .email-sanjiao {width:0; height: 0; border-style: solid; border-color: transparent transparent transparent #ffffff; border-width: 6px; left: 235px; top: 26px; position: absolute; z-index: 2;}
.email-show .email-sanjiao-big { width: 0; height: 0; border-style: solid; border-color: transparent transparent transparent #fff; border-width: 8px; left: 221px; top: 25px; position: absolute; }
.email-show .email-txt{ float:left; width:200px; padding:10px 12px 10px 10px; text-align:left; font-size:15px; color:#4c4c4c; }
</style>    
  </body>
</html>