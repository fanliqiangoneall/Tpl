<?php if (!defined('THINK_PATH')) exit();?><!doctype html><html><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,height=device-height"/><meta content="yes" name="apple-mobile-web-app-capable" /><meta content="black" name="apple-mobile-web-app-status-bar-style" /><meta name="format-detection" content="telephone=no"><title><?php echo ($seo['title']); ?></title><meta name="Keywords" content="<?php echo ($seo['keywords']); ?>"/><meta name="Description" content="<?php echo ($seo['description']); ?>"/><link rel="stylesheet" type="text/css" href="__TMPL__WAP/css/common.css?<?php echo time();?>.css"/><script type="text/javascript" src="__TMPL__WAP/js/jquery.js"></script></head><body><div class="wrap" style="padding-bottom:50px;"><!--logo代码块开始--><div class="logo"  style="width:96%;margin:0 auto;"><div class="logok"><a href="<?php echo C("yuming");?>"><img src="<?php echo ($logo); ?>" alt="<?php echo ($company_info['logo_title']); ?>" title="<?php echo ($company_info['logo_title']); ?>" border="0"/></a></div></div><!--logo代码块结束--><!--导航代码块开始--><script>$(function(){

  $(window).scroll(function(){
  if($(document).scrollTop()>50){
  $("#navlist").hide();
  }
  });
  
 var navcount=1;
 $("#shownav").click(function(){
     if(navcount%2==0){
     $("#navlist").hide();
	 }
	 else{
	 $("#navlist").show();
	 }
	 
	  navcount++;
 });
})
</script><div style="position:relative;background:#019ddd;padding:10px;color:#ffffff;" id="shownav">网站导航 >><div class="navigation" style="left:30%;position:absolute;z-index:200;background:#019ddd;top:10px;display:none;" id="navlist"><ul><?php if(is_array($web_navigation)): $i = 0; $__LIST__ = $web_navigation;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li style="padding-left:30px;"><a href="<?php echo ($vo['url']); ?>"  <?php if( $vo['nav_way'] == 1): ?>target="_new"<?php endif; ?>><?php echo ($vo['title']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?></ul><div class="clear"></div></div></div><!--导航代码块结束--><!--继承内容代码块开始--><!--面包屑代码块开始--><div class="context">首页 > 产品展示</div><!--产品列表代码块开始--><div class="context"><ul class="inprolist-2-1"><?php if(is_array($allclass)): $i = 0; $__LIST__ = $allclass;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$allclass): $mod = ($i % 2 );++$i;?><li class="inprolist-2-parenter"><a href="<?php echo U('/Product_category',getprocatename($allclass['pcid']));?>"><?php echo ($allclass['class_name']); ?></a></li><?php if($allclass["childs"] != ""): if(is_array($allclass['childs'])): $i = 0; $__LIST__ = $allclass['childs'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$childs): $mod = ($i % 2 );++$i;?><li class="inprolist-2-child" style="margin-left:15px;"><a href="<?php echo U('/Product_category',getprocatename($childs['pcid']));?>"><?php echo ($childs['class_name']); ?></a></li><?php endforeach; endif; else: echo "" ;endif; endif; endforeach; endif; else: echo "" ;endif; ?></ul></div><H1 class="indextitle"><?php echo ($prolist['class_name']); ?></H1><div class="pro context"><?php if(is_array($pro)): $k = 0; $__LIST__ = $pro;if( count($__LIST__)==0 ) : echo "该产品列表下暂无产品" ;else: foreach($__LIST__ as $key=>$pro): $mod = ($k % 2 );++$k;?><div class="proimg <?php if($k%2 != 0): ?>proleft clear<?php endif; ?>"><a href="<?php echo U('/Product_detail',getproname($pro['pid']));?>"><img src="<?php echo getimgurl($pro['main_img']);?>" /></a><div class="proname"><a href="<?php echo U('/Product_detail',getproname($pro['pid']));?>"><?php echo ($pro['pro_name']); ?></a></div></div><?php endforeach; endif; else: echo "该产品列表下暂无产品" ;endif; ?><div class="clear" style="text-align:right;"><?php echo ($page); ?></div></div><!--代码块结束--><!--继承内容代码块结束--><script>$(function(){
  $("#backtop").click(function(){
        $("html,body").scrollTop(0);
  });
  
  $(window).scroll(function(){
			if($(document).scrollTop()>50){
				$("#backtop").show();
			}else{
				$("#backtop").hide();
			}
		})
  
})
</script><style>.backtop{z-index:2000;display:none;width:32px;position:fixed;background:#cccccc;cursor:pointer;border:1px solid #999999;bottom:50px;right:0px;padding:5px;text-align:center;}
.backtop:hover{background:#e69d11;color:#ffffff;}
</style><div class="backtop" id="backtop">返回顶部</div><div class="navigation" style="border:0;width:100%;height:40px;line-height:40px;position:fixed;background:#e69d11;z-index:5000;bottom:0;"><div style="float:left;width:22%;margin-left:20px;"><a href="tel:40008888888" style="color:#ffffff;font-size:18px;text-decoration:none;">电话</a></div><div style="float:left;width:22%;margin-left:10px;"><a href="mailto:dzj@one-all.com" style="color:#ffffff;font-size:18px;text-decoration:none;">邮箱</div><div style="float:left;width:22%;margin-left:10px;"><a href="feedback.html" style="color:#ffffff;font-size:18px;text-decoration:none;">反馈</a></div><div style="float:left;width:22%;"><a href="__APP__" style="color:#ffffff;font-size:18px;text-decoration:none;">首页</a></div><div class="clear"></div></div></body></html>