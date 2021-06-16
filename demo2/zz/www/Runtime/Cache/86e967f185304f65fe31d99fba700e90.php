<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="renderer" content="webkit"><title><?php echo ($seo['page_title']); ?></title><meta name="Keywords" content="<?php echo ($seo['page_keywords']); ?>"/><meta name="Description" content="<?php echo ($seo['page_descriptions']); ?>"/><link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/page.css?<?php echo time();?>.css"/><link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/common.css?<?php echo time();?>.css"/><LINK HREF="Css/Layout.css" REL="stylesheet" TYPE="text/css"><?php if($company_info['use_icon'] == 1): ?><link rel="bookmark"  type="image/x-icon"  href="<?php echo getimgurl($company_info['icon']);?>"/><link rel="shortcut icon" href="<?php echo getimgurl($company_info['icon']);?>"><link rel="icon" href="<?php echo getimgurl($company_info['icon']);?>"><?php endif; ?><script type="text/javascript" src="__TMPL__demo2/js/jquery.js"></script><script>$.get('__ROOT__/hasMobile',function(date){if(date!="www"&&date!=""){ window.location.href=date;}})
var path = "__ROOT__";
</script></head><body><div class="content"><!--logo代码块开始--><div class="logo"><div class="logok"><a href="<?php echo U('/');?>"><img src="<?php echo ($logo); ?>" alt="<?php echo ($company_info['logo_title']); ?>" title="<?php echo ($company_info['logo_title']); ?>" border="0"/></a><div class="logor"><ul class="logor-1"><li><img src="__TMPL__demo2/img/down.png"  style="padding-left:10px;" /><a href="<?php echo U('/download');?>">资料下载&nbsp;&nbsp;&nbsp;&nbsp;</a><div class="clear"></div></li><li><img src="__TMPL__demo2/img/logoxian.jpg" />&nbsp;&nbsp;</li><li style="width:230px;"><img src="__TMPL__demo2/img/email.png" /><a href="mailto:<?php echo ($about['email']); ?>">邮件：<?php echo ($about['email']); ?>&nbsp;&nbsp;&nbsp;&nbsp;</a><div class="clear"></div></li><li><img src="__TMPL__demo2/img/logoxian.jpg" />&nbsp;&nbsp;</li><li><img src="__TMPL__demo2/img/tel.png" /><a>联系电话 ：<?php echo ($about['mobile']); ?></a><div class="clear"></div></li><div class="clear"></div></ul><script>function checksub(){
	if($('#searchin').val()=='输入你想查找的产品关键词'){
		alert('没有填写产品关键词');
		return false;	
		
	};
	
}
</script><div class="search"><form action="<?php echo U('/search');?>" method="post" onsubmit=" return checksub()"><input id="searchin" type="text" value="输入你想查找的产品关键词" onfocus="if (value=='输入你想查找的产品关键词'){value='';$(this).css('color','#000')}" onblur="if (value==''){value='输入你想查找的产品关键词';$(this).css('color','#bdbdbd');}" name="pro_name" /><input id="searchsubmit" type="submit" value="产品搜索" /><div class="clear"></div></form></div></div></div></div><!--logo代码块结束--><!--导航代码块开始--><div class="navigation"><ul><li style=" width:1%;"></li><!--web_navigationfoot底部导航变量--><?php if(is_array($web_navigation)): $i = 0; $__LIST__ = array_slice($web_navigation,0,7,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li style="position:relative" onmousemove="showul(this)" onmouseout="hiddenul(this)" ><a href="<?php echo ($vo['url']); ?>"  <?php if( $vo['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($vo['title']); ?></a><?php if($vo['child'] != ''): ?><ul  style="height:auto; width:100%; text-align:left; position:absolute; top:30px; left:0px; z-index:999; display:none;"><?php if(is_array($vo['child'])): $i = 0; $__LIST__ = $vo['child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$navchild): $mod = ($i % 2 );++$i;?><li  style=" float:inherit; width:100%; background:#2661a9"><a href="<?php echo ($navchild['url']); ?>"  <?php if( $navchild['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($navchild['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?></ul><?php endif; ?></li><?php endforeach; endif; else: echo "" ;endif; ?><script>function showul(obj){
	$(obj).find('ul').css('display','block');
	
}
function hiddenul(obj){
	$(obj).find('ul').css('display','none');
	
}
</script></ul></div><!--导航代码块结束--><!--banner代码块开始--><div class="banner"><link rel="stylesheet" type="text/css" href="__TMPL__demo2/css/flexslider.css?<?php echo time();?>" /><script src="__TMPL__demo2/js/jquery.flexslider-min.js"></script><script type="text/javascript">	$(function() {
		$(".flexslider").flexslider({
			slideshowSpeed: 4000, //展示时间间隔ms
			animationSpeed: 400, //滚动时间ms
			touch: true //是否支持触屏滑动
		});
	});	
	</script><div class="flexslider"><ul class="slides"><?php if(is_array($banner)): $i = 0; $__LIST__ = $banner;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$banner): $mod = ($i % 2 );++$i;?><li><a href="<?php echo ($banner['ad_link']); ?>"  <?php if($banner['ad_open_type'] != ''): ?>target="_new"<?php endif; ?>><img src="<?php echo getimgurl($banner['ad_pic']);?>" alt="" width="100%" /></a></li><?php endforeach; endif; else: echo "" ;endif; ?></ul></div><div class="clear"></div><!--<img src="__TMPL__demo2/img/banner.jpg" width="100%" />--></div><!--banner代码块结束--><!--继承内容代码块开始--><!--面包屑代码块开始--><div class="crumbs"><img src="__TMPL__demo2/img/home.png" />&nbsp;&nbsp;<a href="<?php echo U('/');?>">首页</a> ><?php echo ($download['title']); ?></div><div class="clear"></div><!--代码块结束--><!--代码块开始--><div class="inproductlist"><div class="inprol"><div class="inprolsit"><div class="inprolist-1"><img src="__TMPL__demo2/img/inprodian.jpg" />&nbsp;&nbsp;下载分类<div class="clear"></div></div><div class="inprolist-2"><ul class="inprolist-2-1"><?php if(is_array($alldownloadclass)): $i = 0; $__LIST__ = array_slice($alldownloadclass,0,5,true);if( count($__LIST__)==0 ) : echo "暂无数据" ;else: foreach($__LIST__ as $key=>$alldownloadclass): $mod = ($i % 2 );++$i;?><li class="inprolist-2-child"><a href="<?php echo U('/download_category',array('classid'=>$alldownloadclass["classid"]));?>"><?php echo ($alldownloadclass['class_name']); ?></a></li><?php endforeach; endif; else: echo "暂无数据" ;endif; ?></ul></div></div><div class="clear"></div><div style=" width:100%; height:15px;"></div><div class="contact"><div class="contacttext"><img src="__TMPL__demo2/img/quan.png" />&nbsp;&nbsp;联系我们</div><div class="incon"><img src="__TMPL__demo2/img/intel.png" /><div class="intiao"></div><div class="intext"><div class="intext-1">联系电话</div><div class="intext-2"><?php echo ($about['mobile']); ?></div></div><div class="clear"></div></div><div class="incon"><img src="__TMPL__demo2/img/inemail.png" /><div class="intiao"></div><div class="intext"><div class="intext-1">邮箱</div><div class="intext-2"><a href="mailto:<?php echo ($about['email']); ?>"><?php echo ($about['email']); ?></a></div></div><div class="clear"></div></div><div class="clear"></div></div></div><div class="inpror"><div class="inprocate"><?php echo ($download['title']); ?></div><div style="width:100%; height:17px;"></div><div class="catex"></div><div style="width:100%; height:19px;"></div><div class="clear"><div class="inproduct"><div class="inproductlr"><?php echo htmlspecialchars_decode($download['content']);?><a href="<?php echo getimgurl($download['linkurl']);?>" style="float:right;">下载</a></div><div class="clear"></div></div></div></div><div class="clear"></div></div><!--代码块结束--><!--继承内容代码块结束--><!--公司信息代码块开始--><div class="footer"><!--导航代码块开始--><div style="width:1002px;height:30px;line-height:30px;margin:10px auto 0;border-bottom:1px solid #f2f2f2;"><?php if($web_navigationfoot != ""): ?><!--web_navigationfoot底部导航变量-->			底部导航：
         <?php if(is_array($web_navigationfoot)): $i = 0; $__LIST__ = array_slice($web_navigationfoot,0,7,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><span style="margin-left:20px;"><a href="<?php echo ($vo['url']); ?>" class="a-dibunva"  <?php if( $vo['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($vo['title']); ?></a></span><?php endforeach; endif; else: echo "" ;endif; endif; ?></div><!--导航代码块结束--><div class="footerk" style="margin-top:10px;margin-bottom:10px;"><div style="margin-top:20px;margin-bottom:20px;border-bottom:1px #f2f2f2 solid;padding-bottom:10px;"><div style="width:70; height:30px; line-height:30px; float:left;">友情链接：</div><?php if(is_array($friend_link)): $i = 0; $__LIST__ = $friend_link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$friend_link): $mod = ($i % 2 );++$i; if($friend_link['linkurl'] != ''): ?><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><img style="width:70px; height:30px; float:left;"  src="<?php echo getimgurl($friend_link['linkurl']);?>"/></a><?php else: ?><div style=" margin-left:20px;  height:30px; line-height:30px; float:left; text-align:center;"><a target="_new" href="<?php echo ($friend_link['link_url']); ?>"><?php echo ($friend_link['link_title']); ?></a></div><?php endif; endforeach; endif; else: echo "" ;endif; ?><div style="clear:both"></div></div><div style="width:100%; height:35px;"></div><ul><li><img src="__TMPL__demo2/img/map.png" style="float:left;" /><div class="footertext"><div class="footertitel">公司地址</div><div class="footercontent"><?php echo ($about['address']); ?></div></div></li><li><img src="__TMPL__demo2/img/foottel.png" style="float:left;padding-left:27px;padding-right:10px;" /><div class="footertext" ><div class="footertitel">联系人&nbsp;<?php echo ($about['contact']); ?></div><div class="footercontent">联系电话：<?php echo ($about['phone']); ?></div></div></li><li><img src="__TMPL__demo2/img/footemail.png" style="float:left;padding-left:37px;padding-right:10px;" /><div class="footertext" ><div class="footertitel">邮箱</div><div class="footercontent"><a href="mailto:<?php echo ($about['email']); ?>" class="a-email"><?php echo ($about['email']); ?></a></div></div></li><li><div class="cr" style="padding-left:5px;"><img src="__TMPL__demo2/img/cr.jpg"/>手机二维码</div><div class="cr" style="padding-left:20px;"><img src="__TMPL__demo2/img/cr.jpg"  />App二维码</div><div class="clear"></div></li><div class="clear"></div></ul><div class="clear"></div><div style="background:#d8d8d8; height:1px; width:100%;"></div><div style="height:10px; width:100%;"></div><div><div class="footercontent" style="width:430px; height:35px; float:left;">CopyRight © 2015 <?php echo ($about['company_name']); ?> All Rights Reserved. <?php echo htmlspecialchars_decode(get_count());?></div><div class="footercontent" style="height:35px; float:right; padding-right:5px;"><a href="http://www.one-all.com" style="color:#9d9d9d;" target="_blank">常州网络公司</a>中环互联网网站建设</div></div></div></div><!--公司信息代码块结束--></div><div style="height:30px; width:100%;"></div><style>.floatqq{position:fixed;width:110px;height:142px;top:200px;right:5px;background:url('__TMPL__demo2/img/floatqq.png');}
.floatqq a{width:110px;height:142px;cursor:pointer;position: inherit;}
</style><script type="text/javascript" src="__TMPL__demo2/js/statitics.js"></script><script>$(function(){
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
</script><style>.backtop{cursor:pointer;display:none;position:fixed; background:url(__TMPL__demo2/img/backtop.png);background-size:100%;bottom:150px;right:10px;text-align:center;}
.backtop:hover{ background:url(__TMPL__demo2/img/backtop1.png);}
</style><div class="backtop" id="backtop" style="width:40px;height:40px;"></div><div class="floatqq"><?php echo htmlspecialchars_decode(get_QQ());?></div></body></html>