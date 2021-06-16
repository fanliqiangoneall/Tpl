<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
<title><?php echo ($seo['page_title']); ?></title>
<meta name="Keywords" content="<?php echo ($seo['page_keywords']); ?>"/>
<meta name="Description" content="<?php echo ($seo['page_descriptions']); ?>"/>
<script>
function browserRedirect(){var c=navigator.userAgent.toLowerCase();var h=c.match(/ipad/i)=="ipad";var i=c.match(/iphone os/i)=="iphone os";var g=c.match(/midp/i)=="midp";var d=c.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";var e=c.match(/ucweb/i)=="ucweb";var a=c.match(/android/i)=="android";var b=c.match(/windows ce/i)=="windows ce";var j=c.match(/windows mobile/i)=="windows mobile";if((h||i||g||d||e||a||b||j)){stringObj="__SELF__";var f=stringObj.replace("static/1","");f=f.replace("/index.php/Index/index/","mindex.html");window.location.href=f}}browserRedirect();var path="";
</script>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/page.css?<?php echo time();?>.css"/>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/common.css?<?php echo time();?>.css"/>
<LINK HREF="Css/Layout.css" REL="stylesheet" TYPE="text/css">
<?php if($company_info['use_icon'] == 1): ?><link rel="bookmark"  type="image/x-icon"  href="<?php echo getimgurl($company_info['icon']);?>"/>
<link rel="shortcut icon" href="<?php echo getimgurl($company_info['icon']);?>"> 
<link rel="icon" href="<?php echo getimgurl($company_info['icon']);?>"><?php endif; ?>
<script type="text/javascript" src="__TMPL__demo2/js/jquery.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/common.js"></script>
</head>
<body>

<div class="content">

<!--logo代码块开始-->
	<div class="Page_Top">
    <div class="Page_Logo">
      <a href="<?php echo U('/');?>"><?php echo ($logo); ?></a>
    </div>
    <!--头部右侧-->
    <div class="Page_TopRight">        
      <div class="Page_TopTel">
        <ul>
          <li><img src="__TMPL__demo2/img/toptel.jpg" /></li>
          <li style="width:116px; overflow:hidden"><?php echo ($about['mobile']); ?></li>
          <li><img src="__TMPL__demo2/img/topemail.jpg" /></li>
          <li><a href="mailto:<?php echo chaifen($about['email'],0);?>"><?php echo chaifen($about['email'],0);?></a></li>
        </ul>
      </div>
      <!--搜索-->
      <script type="text/javascript">
		function CheckForm(theForm)
		{
			if (theForm.keywords.value=="Product keywords…")
			{
				alert('Input a keyword!');
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
					element.style.color="#333";
				}
			}
			//离开输入框时触发事件
			function OnBlurFun(element,elementvalue)
			{
				if(element.value==""||element.value.replace(/\s/g,"")=="")
				{
					element.value=elementvalue;    
					element.style.color="#333";
				}
			}
	  </script>
      <div class="Page_Search">
        <form name="find" action="<?php echo U('/search');?>" method="get"  accept-charset="UTF-8"  onsubmit="return CheckForm(this);">
          <ul>
            <li style="width:278px; height:30px; background:url(__TMPL__demo2/img/searchbg.jpg)">
              <input type="text" id="searchin" name="keywords" value="Product keywords…" onfocus="OnFocusFun(this,'Product keywords…')" onblur="OnBlurFun(this,'Product keywords…')" style="color:#333"/>
            </li>
            <li>
              <input type="image" src="__TMPL__demo2/img/searchbtn.jpg"  name='submit' class='submit'/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
<!--logo代码块结束-->
<div class="clear"></div>

<!--导航代码块开始-->
    <div class="menu" id="smoothmenu1">
    <ul>
     <?php if(is_array($web_navigation)): $i = 0; $__LIST__ = array_slice($web_navigation,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li class="menu1"  style="background:url(__TMPL__demo2/img/menubgon.jpg) center no-repeat" ><a href="<?php echo ($vo['url']); ?>" onfocus="blur()"><?php echo ($vo['title']); ?></a>
        <ul style="width:180px;">
         <li><a href="/product_category/Plastic-film_1792.html" ="Plastic film">Plastic film</a></li>
         <li><a href="/product_category/Textiles_1812.html" ="Textiles">Textiles</a></li>
         <li><a href="/product_category/Garments_1778.html" ="Garments">Garments</a></li>
        </ul>
      </li>
      <li style="padding-top:3px;"><img src="__TMPL__demo2/img/menuline.jpg"/></li><?php endforeach; endif; else: echo "" ;endif; ?>
      <div class="clear"></div>
    </ul>
  </div>
<!--导航代码块结束-->

<!--继承内容代码块开始-->

<!--面包屑代码块开始-->
<div class="crumbs"><img src="__TMPL__demo2/img/home.png" />&nbsp;&nbsp;<a href="<?php echo U('/');?>">首页</a> > 下载列表
</div>
<div class="clear"></div>
<!--代码块结束-->


<!--代码块开始-->
<div class="inproductlist">
	<div class="inprol">
    	<div class="inprolsit">
        	<div class="inprolist-1"><img src="__TMPL__demo2/img/inprodian.jpg" />&nbsp;&nbsp;下载分类<div class="clear"></div></div>
            <div class="inprolist-2">
                <ul class="inprolist-2-1">
                    <?php if(is_array($alldownloadclass)): $i = 0; $__LIST__ = array_slice($alldownloadclass,0,5,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$alldownloadclass): $mod = ($i % 2 );++$i;?><li class="inprolist-2-child"><a href="<?php echo U('/download_category',array('classid'=>$alldownloadclass["classid"]));?>"><?php echo ($alldownloadclass['class_name']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>                  
                </ul>
            </div>
        </div>
        <div class="clear"></div>
        <div style=" width:100%; height:15px;"></div>
        <div class="contact">
        	<div class="contacttext"><img src="__TMPL__demo2/img/quan.png" />&nbsp;&nbsp;联系我们</div>	
            <div class="incon">
            	<img src="__TMPL__demo2/img/intel.png" />
                <div class="intiao"></div>
                <div class="intext">
                	<div class="intext-1">联系电话</div>
                    <div class="intext-2"><?php echo ($about['mobile']); ?></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="incon">
            	<img src="__TMPL__demo2/img/inemail.png" />
                <div class="intiao"></div>
                <div class="intext">
                	<div class="intext-1">邮箱</div>
                    <div class="intext-2"><a href="mailto:<?php echo ($about['email']); ?>"><?php echo ($about['email']); ?></a></div>
                </div>
                <div class="clear"></div>
            </div>            
            <div class="clear"></div>
        </div>
    </div>
    <div class="inpror">
    	<div class="inprocate">下载列表</div>
        <div style="width:100%; height:17px;"></div>
        <div class="catex"></div>
        <div style="width:100%; height:19px;"></div>
        <div class="clear">
            <div class="inproduct">
            	<ul>
				<?php if(is_array($download)): $k = 0; $__LIST__ = $download;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$download): $mod = ($k % 2 );++$k;?><li class="newlistp"><a href="<?php echo U('/download_detail',array('id'=>$download["id"]));?>"><?php echo ($k); ?>.<?php echo ($download['title']); ?>   <span style="float:right; color:#999;"><?php echo date('Y-m-d',$download['update_time']);?></span></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
                <div class="clear" style="text-align:right;"><?php echo ($page); ?></div>
            </div>           
        </div>
    </div>
	
	
    <div class="clear"></div>
</div>
<!--代码块结束-->

<!--继承内容代码块结束-->

<!--公司信息代码块开始-->
	<div class="footer">
    <!--导航代码块开始-->
	<div style="width:1002px;height:30px;line-height:30px;margin:10px auto 0;border-bottom:1px solid #f2f2f2;">
    <?php if($web_navigationfoot != ""): ?><!--web_navigationfoot底部导航变量-->
			底部导航：
         <?php if(is_array($web_navigationfoot)): $i = 0; $__LIST__ = array_slice($web_navigationfoot,0,7,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><span style="margin-left:20px;"><a href="<?php echo ($vo['url']); ?>" class="a-dibunva"  <?php if( $vo['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($vo['title']); ?></a></span><?php endforeach; endif; else: echo "" ;endif; endif; ?>
	</div>	
<!--导航代码块结束-->



    
    	<div class="footerk" style="margin-top:10px;margin-bottom:10px;">
		<div style="margin-top:20px;margin-bottom:20px;border-bottom:1px #f2f2f2 solid;padding-bottom:10px;">
            <div style="width:70; height:30px; line-height:30px; float:left;">友情链接：</div>
            <?php if(is_array($friend_link)): $i = 0; $__LIST__ = $friend_link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$friend_link): $mod = ($i % 2 );++$i; if($friend_link['linkurl'] != ''): ?><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><img style="width:70px; height:30px; float:left;"  src="<?php echo getimgurl($friend_link['linkurl']);?>"/></a><?php else: ?>
            <div style=" margin-left:20px;  height:30px; line-height:30px; float:left; text-align:center;"><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><?php echo ($friend_link['link_title']); ?></a></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>     
			<div style="clear:both"></div> 
			</div>  
        	<div style="width:100%; height:35px;"></div>
        	<ul>
            	<li>
                	<img src="__TMPL__demo2/img/map.png" style="float:left;" />
                	<div class="footertext">
                    	<div class="footertitel">公司地址</div>
                        <div class="footercontent"><?php echo ($about['address']); ?></div>
                    </div>
                </li>
                <li>
                	<img src="__TMPL__demo2/img/foottel.png" style="float:left;padding-left:27px;padding-right:10px;" />
                	<div class="footertext" >
                    	<div class="footertitel">联系人&nbsp;<?php echo ($about['contact']); ?></div>
                        <div class="footercontent">联系电话：<?php echo ($about['phone']); ?></div>
                    </div>                
                </li>
                <li>
                	<img src="__TMPL__demo2/img/footemail.png" style="float:left;padding-left:37px;padding-right:10px;" />
                	<div class="footertext" >
                    	<div class="footertitel">邮箱</div>
                        <div class="footercontent"><a href="mailto:<?php echo ($about['email']); ?>" class="a-email"><?php echo ($about['email']); ?></a></div>
                    </div>                  
                </li>
                <li>
                	<div class="cr" style="padding-left:5px;"><img src="__TMPL__demo2/img/cr.jpg"/>手机二维码</div>
                    <div class="cr" style="padding-left:20px;"><img src="__TMPL__demo2/img/cr.jpg"  />App二维码</div>
                    <div class="clear"></div>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="clear"></div>
            <div style="background:#d8d8d8; height:1px; width:100%;"></div>
            <div style="height:10px; width:100%;"></div>
            <div>
            	<div class="footercontent" style="width:430px; height:35px; float:left;">CopyRight © 2015 <?php echo ($about['company_name']); ?> All Rights Reserved. <?php echo htmlspecialchars_decode(get_count());?></div>
                <div class="footercontent" style="height:35px; float:right; padding-right:5px;"><a href="http://www.one-all.com" style="color:#9d9d9d;" target="_blank">常州网络公司</a>中环互联网网站建设</div>
            </div>
        </div>
    </div>
<!--公司信息代码块结束-->
</div>
<div style="height:30px; width:100%;"></div>
<style>
.floatqq{position:fixed;width:110px;height:142px;top:200px;right:5px;background:url('__TMPL__demo2/img/floatqq.png');}
.floatqq a{width:110px;height:142px;cursor:pointer;position: inherit;}
</style>
<script type="text/javascript" src="__TMPL__demo2/js/statitics.js"></script>
<script>
$(function(){
  $("#backtop").click(function(){
        $("html,body").animate({scrollTop:"0px"},400);
  });
  
  $(window).scroll(function(){
			if($(document).scrollTop()>360){
				$("#backtop").show();
			}else{
				$("#backtop").hide();
			}
		})
  
})
</script>
<style>
.backtop{cursor:pointer;display:none;position:fixed; background:url(__TMPL__demo2/img/backtop.png);background-size:100%;bottom:150px;right:10px;text-align:center;}
.backtop:hover{ background:url(__TMPL__demo2/img/backtop1.png);}
</style>
<div class="backtop" id="backtop" style="width:40px;height:40px;"></div>
<div class="floatqq"><?php echo htmlspecialchars_decode(get_QQ());?></div>
</body>
</html>