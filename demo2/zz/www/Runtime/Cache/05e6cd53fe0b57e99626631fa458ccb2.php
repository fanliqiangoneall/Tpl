<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
<title><?php echo ($seo['page_title']); ?></title>
<meta name="Keywords" content="<?php echo ($seo['page_keywords']); ?>"/>
<meta name="Description" content="<?php echo ($seo['page_descriptions']); ?>"/>
<!--是否有手机站-->
<?php if(gethaswap() == '1'): ?><script>
function browserRedirect(){var c=navigator.userAgent.toLowerCase();var h=c.match(/ipad/i)=="ipad";var i=c.match(/iphone os/i)=="iphone os";var g=c.match(/midp/i)=="midp";var d=c.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";var e=c.match(/ucweb/i)=="ucweb";var a=c.match(/android/i)=="android";var b=c.match(/windows ce/i)=="windows ce";var j=c.match(/windows mobile/i)=="windows mobile";if((h||i||g||d||e||a||b||j)){stringObj="__SELF__";var f=stringObj.replace("static/1","");f=f.replace("/index.php/Index/index/","mindex.html");window.location.href=f}}browserRedirect();
</script><?php endif; ?>
<script>var path="";</script>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/page.css?<?php echo time();?>.css"/>
<link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/common.css?<?php echo time();?>.css"/>
<?php if($company_info['use_icon'] == 1): ?><link rel="bookmark"  type="image/x-icon"  href="<?php echo getimgurl($company_info['icon']);?>"/>
<link rel="shortcut icon" href="<?php echo getimgurl($company_info['icon']);?>"> 
<link rel="icon" href="<?php echo getimgurl($company_info['icon']);?>"><?php endif; ?>
<script type="text/javascript" src="__TMPL__demo2/js/jquery.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/common.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/translator.js"></script>
<script type="text/javascript" src="__TMPL__demo2/js/statitics.js"></script>
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

          <li style="width:116px; overflow:hidden"><?php echo chaifen($about['phone'],0);?></li>

          <li><img src="__TMPL__demo2/img/topemail.jpg" /></li>

          <li><a href="mailto:<?php echo chaifen($about['email'],0);?>" onclick="turn_sta(3,1)"><?php echo chaifen($about['email'],0);?></a></li>

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

        <form name="find" action="<?php echo U('/search');?>" method="post"  accept-charset="UTF-8"  onsubmit="return CheckForm(this);">

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

<script type="text/javascript" language="javascript" src="__TMPL__demo2/js/nav.js"></script>

<script type="text/javascript" src="__TMPL__demo2/js/navcontrol.js"></script>

    <div class="menu" id="smoothmenu1">

    <ul>

    

     <?php if(is_array($web_navigation)): $key = 0; $__LIST__ = array_slice($web_navigation,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?><li <?php if($key == 6): ?>class="menu2"<?php else: ?>class="menu1"<?php endif; ?> id="menu<?php echo ($key); ?>"><a <?php if(strstr($vo['url'],'/product.html') != '/product.html'): ?>href="<?php echo ($vo['url']); ?>"<?php else: ?>href="#"<?php endif; ?> onfocus="blur()"><?php echo ($vo['title']); ?></a>

<?php if(strstr($vo['url'],'/product.html') == '/product.html'): ?><ul style="width:180px;">

        <?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "No Content" ;else: foreach($__LIST__ as $key=>$pron): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($pron['pcid']);?>"><?php echo ($pron['class_name']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>

        </ul><?php endif; ?>     

      </li>

      <li style="padding-top:3px;"><img src="__TMPL__demo2/img/menuline.jpg"/></li><?php endforeach; endif; else: echo "No Content" ;endif; ?>

      <div class="clear"></div>

    </ul>

  </div>

<!--导航代码块结束-->



<!--继承内容代码块开始-->



<!--面包屑代码块开始-->
<div class="r_top">Current Position : <a href="<?php echo U('/');?>">Home</a> > 404</div>
<div class="in_banner"><img src="__TMPL__demo2/img/inquirybanner.jpg" /></div>

<div class="clear"></div>
<!--代码块结束-->


<!--产品列表代码块开始-->
<div class="main">
  <div class="sidebar">
    <div class="Page_Leftbg">
      <div class="Page_LeftTop"></div>
      <div class="Page_LeftClass">
        <div class="Page_LeftClassTitle">products</div>
        <div class="Page_LeftClassList">
          <ul>
            <li style="height:1px; line-height:1px; background:url(__TMPL__demo2/img/leftline.jpg)"></li>
            <?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "No Content" ;else: foreach($__LIST__ as $key=>$allclass): $mod = ($i % 2 );++$i;?><li class="parent"><a href="<?php echo U('/product_category','','');?>/<?php echo getprocatename($allclass['pcid']);?>"><?php echo ($allclass['class_name']); ?></a></li><?php endforeach; endif; else: echo "No Content" ;endif; ?>
          </ul>
        </div>
      </div>
      <div class="Page_LeftBottom"></div>
    </div>
  </div>
  <div class="rightmain">
    <div class="product_body2">
      <div class="body" style="width:630px; padding-left:5px; float:left;line-height:24px;">
       <img src="__TMPL__demo2/img/404.gif" border="" />
   
      </div>
    </div>
  </div>
  <div style="clear:both"></div>
</div>
<!--代码块结束-->


<!--继承内容代码块结束-->



<!--公司信息代码块开始-->

<div class="footer">

  <div class="bottom">

    <div  class="foot_right">

      <ul>

       <li style="padding-right:9px;"><img src="__TMPL__demo2/img/ewm.jpg" /></li>

       <li><a href="http://wap.cnbaixing.com" onfocus="blur()" target="_blank"><img src="__TMPL__demo2/img/mobile.jpg" border="0"/></a></li>

      </ul>

    </div>

    <div class="foot_contact">

      <div class="foot_contactTitle">

         <div style="width:541px; float:left; color:#f8f8f8;">

         CONTACT us

         </div>

         <div style="float:left; width:120px; padding-top:18px;"><!-- AddThis Follow BEGIN -->

            <div class="addthis_toolbox addthis_16x16_style addthis_default_style">

            <a class="addthis_button_facebook_follow" addthis:userid="1"></a>

            <a class="addthis_button_twitter_follow" addthis:userid="1"></a>

            <a class="addthis_button_vimeo_follow" addthis:userid="1"></a>

            <a class="addthis_button_foursquare_follow" addthis:userid="1"></a>

            <a class="addthis_button_tumblr_follow" addthis:userid="1"></a>

            <a class="addthis_button_rss_follow" addthis:userid="1"></a>

            </div>

            <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52d9da3543f78f25"></script>

            <!-- AddThis Follow END -->

            </div>

      </div>

      <ul>

        <li style="width:430px;"><img src="__TMPL__demo2/img/tel.jpg" style="vertical-align:middle"/> <?php echo ($about['phone']); ?><br /><img src="__TMPL__demo2/img/add.jpg" style="vertical-align:middle"/> <?php echo ($about['address']); ?><br />

      <img src="__TMPL__demo2/img/web.jpg" style="vertical-align:middle"/> <?php echo ($about['website']); ?></li>

        <li style="padding-left:15px;"><img src="__TMPL__demo2/img/fax.jpg" style="vertical-align:middle"/> <?php echo ($about['fax']); ?><br /><img src="__TMPL__demo2/img/email.jpg" style="vertical-align:middle"/> <a href="mailto:<?php echo chaifen($about['email'],0);?>" onfocus="blur()" onclick="turn_sta(3,2)"><?php echo chaifen($about['email'],0);?></a></li>

      </ul>

    </div>

  </div>

  

  <div class="Page_Footlan">

      <div><a href="javascript:translator('en|cn')"><img src="__TMPL__demo2/img/lang/ico_cn.gif" width="20" height="13" alt="" /> 中文</a></div>

      <div><a href="javascript:translator('en|hr')"><img src="__TMPL__demo2/img/lang/ico_hr.gif" width="20" height="13" /> Hrvatska</a></div>

      <div><a href="javascript:translator('en|fr')"><img src="__TMPL__demo2/img/lang/ico_fr.gif" width="20" height="13" alt="" /> Français</a></div>

      <div><a href="javascript:translator('en|it')"><img src="__TMPL__demo2/img/lang/ico_it.gif" width="20" height="13" alt="" /> Italiano</a></div>

      <div><a href="javascript:translator('en|pt')"><img src="__TMPL__demo2/img/lang/ico_pt.gif" width="20" height="13" alt="" /> Português</a></div>

      <div><a href="javascript:translator('en|ja')"><img src="__TMPL__demo2/img/lang/ico_ja.gif" width="20" height="13" alt="" /> 日本の</a></div>

      <div><a href="javascript:translator('en|ko')"><img src="__TMPL__demo2/img/lang/ico_ko.gif" width="20" height="13" alt="" /> 한국어</a></div>

      <div><a href="javascript:translator('en|ar')"><img src="__TMPL__demo2/img/lang/ico_ar.gif" width="20" height="13"  alt=""/> العربية</a></div>

      <div><a href="javascript:translator('en|de')"><img src="__TMPL__demo2/img/lang/ico_de.gif" width="20" height="13" alt="" /> Deutsch</a></div>

      <div><a href="javascript:translator('en|cs')"><img src="__TMPL__demo2/img/lang/ico_cs.gif" width="20" height="13"  alt=""/> česky</a></div>

      <div><a href="javascript:translator('en|da')"><img src="__TMPL__demo2/img/lang/ico_da.gif" width="20" height="13"  alt=""/> Dansk</a></div>

      <div><a href="javascript:translator('en|nl')"><img src="__TMPL__demo2/img/lang/ico_nl.gif" width="20" height="13"  alt=""/> Nederlands</a></div>

       <div><a href="javascript:translator('en|fi')"><img src="__TMPL__demo2/img/lang/ico_fi.gif" width="20" height="13"  alt=""/> suomi</a></div>

       <div><a href="javascript:translator('en|el')"><img src="__TMPL__demo2/img/lang/ico_el.gif" width="20" height="13" alt="" /> Ελληνικά</a></div>

       <div><a href="javascript:translator('en|hi')"><img src="__TMPL__demo2/img/lang/ico_hi.gif" width="20" height="13"  alt=""/> हिन्दी</a></div>

      <div><a href="javascript:translator('en|no')"><img src="__TMPL__demo2/img/lang/ico_no.gif" width="20" height="13" alt="" /> norsk</a></div>

      <div><a href="javascript:translator('en|tr')"><img src="__TMPL__demo2/img/lang/ico_tr.gif" width="20" height="13"  alt=""/> Türkiye</a></div>

      <div><a href="javascript:translator('en|th')"><img src="__TMPL__demo2/img/lang/ico_th.gif" width="20" height="13" alt="" /> ประเทศไทย</a></div>

      <div><a href="javascript:translator('en|bg')"><img src="__TMPL__demo2/img/lang/ico_bg.gif" width="20" height="13"  alt=""/> български</a></div>

      <div><a href="javascript:translator('en|ru')"><img src="__TMPL__demo2/img/lang/ico_ru.gif" width="20" height="13"  alt=""/> русский</a></div>

      <div><a href="javascript:translator('en|sv')"><img src="__TMPL__demo2/img/lang/ico_sv.gif" width="20" height="13" alt="" /> Svenska</a></div>

      <div><a href="javascript:translator('en|pl')"><img src="__TMPL__demo2/img/lang/ico_pl.gif" width="20" height="13"  alt=""/> Polski</a></div>

      <div><a href="javascript:translator('en|ro')"><img src="__TMPL__demo2/img/lang/ico_ro.gif" width="20" height="13"  alt=""/> Română</a></div>

      <div><a href="javascript:translator('en|vi')"><img src="__TMPL__demo2/img/lang/ico_vi.gif" width="20" height="13" alt="" /> Việt Nam</a></div>

  </div>



  <!--//获取浮动QQ get_QQ//获取统计代码get_web_analysis//获取googel代码get_google//获取googel转化代码get_inquiry_code//获取联系我们统计代码get_contactus_code-->  

  <div class="link">CopyRight © 2014 <?php echo ($about['company_name']); ?> All Rights Reserved. <a href="<?php echo U('/sitemap');?>" onfocus="blur()">Sitemap</a> <?php echo htmlspecialchars_decode(get_web_analysis()); echo htmlspecialchars_decode(get_google());?>

            Designed by&nbsp;&nbsp;<a href="http://www.one-all.com" title="Zhonghuan Internet" target="_blank">Zhonghuan Internet</a>

   </div>

</div>

<!--公司信息代码块结束-->

<?php if(is_array($web_navigationfoot)): $i = 0; $__LIST__ = array_slice($web_navigationfoot,0,6,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><span style="margin-left:20px;"><a href="<?php echo ($vo['url']); ?>" class="a-dibunva"  <?php if( $vo['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($vo['title']); ?></a></span><?php endforeach; endif; else: echo "" ;endif; ?>

<!--导航代码块结束-->

<?php if($friend_link != ''): ?><div style="width:70; height:30px; line-height:30px; float:left; margin-left:20px;">Friend link：</div>

            <?php if(is_array($friend_link)): $i = 0; $__LIST__ = $friend_link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$friend_link): $mod = ($i % 2 );++$i; if($friend_link['linkurl'] != ''): ?><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><img style="width:70px; height:30px; float:left;"  src="<?php echo getimgurl($friend_link['linkurl']);?>"/></a><?php else: ?>

            <div style=" margin-left:20px;  height:30px; line-height:30px; float:left; text-align:center;"><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><?php echo ($friend_link['link_title']); ?></a></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>     

			<div style="clear:both"></div> 

			</div><?php endif; ?>

</div>




</body>
</html>