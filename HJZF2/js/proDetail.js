define(['jquery','lightBox'],function ($,lightBox){
	
	$(document).ready(function(e) {
		$(".smallImgList li").eq(0).trigger('mouseover');   
    });

	
	
   var todo = function(){
       if($('.smallImgList_lightbox').length>0){
           $('.smallImgList_lightbox a').lightBox();
       }
       $('#gallery a img').click(function () {
           $('#gallery a').lightBox()
       });
       $("#gallery a").attr("href", jQuery('#gallery').children('a').children('img').attr("src"));
       $(".smallImgList li").live('mouseover', function () {
           $(this).nextAll().removeClass("hover");
           $(this).prevAll().removeClass("hover");
           $(this).addClass("hover");
		   if(jQuery(this).attr("id")=="360img"){
				jQuery("#auximgs").hide();
				jQuery("#KeyShotXR").show();
				jQuery("#videos").hide();
			}
			else if(jQuery(this).attr("id")=="pro_video"){
				jQuery("#videos").show();
				jQuery("#KeyShotXR").hide();	
				jQuery("#auximgs").hide();
				var firstLarge=jQuery(this).find('a').attr("alt")			
				/* 判断下情况 假如a里面有ifram和MP4就采用我的新办法 */
				if(firstLarge.toLowerCase().indexOf('.mp4')>-1){
				var video_html='<video poster="'+firstThumb+'" src="'+firstLarge+'" controls>您的浏览器不支持视频</video>';
				}
				else if(firstLarge.toLowerCase().indexOf('iframe')>-1){
				var video_html=firstLarge;
				}
				if(jQuery("#videos").html()==''){
				jQuery("#videos").html(video_html);
				}
					
			}
			else{
				jQuery("#auximgs").show();
				jQuery("#KeyShotXR").hide();
                jQuery("#videos").hide();
                jQuery("#videos").html("");
				$("#gallery img").attr("src", jQuery(this).children('a').children('img').attr("src"));
				$("#gallery img").attr("alt", jQuery(this).children('a').children('img').attr("src"));
				$("#gallery a").attr("href", jQuery(this).children('a').children('img').attr("src"));
				$("#smallbox img").attr("src", jQuery(this).children('a').children('img').attr("src"));
				$("#bigbox img").attr("src", jQuery(this).children('a').children('img').attr("src"));
			}
           
       });



       $("#payment img").click(function(){
           var mp4=$(this).parent().attr('href');
           if(mp4){
               if(mp4.indexOf(".mp4")>0){
                   openvideo(mp4);
                   return false;
               }else if(mp4.indexOf("jpg")>0 || mp4.indexOf("png")>0 || mp4.indexOf("gif")>0){
                   $('#payment a').has('img').not(".pdf").lightBox();
               }
               else{
                   return;
               }
           }
       });
       $("#payment span").click(function(){
           var mp4=$(this).parent().attr('href');
           if(mp4){
               if(mp4.indexOf(".mp4")>0){
                   openvideo(mp4);
                   return false;
               }else if(mp4.indexOf("jpg")>0 || mp4.indexOf("png")>0 || mp4.indexOf("gif")>0){
                   $('#payment a').lightBox();
               }
               else{
                   return;
               }
           }
       });
       $(".pro_detail img").click(function(){
           var mp4=$(this).parent().attr('href');
           if(mp4){
               if(mp4.indexOf(".mp4")>0){
                   openvideo(mp4);
                   return false;
               }else{
                   $('#payment a').has('img').not(".pdf").lightBox();
               }
           }
       });
       function openvideo(url){
            //iframe窗
           layer.open({
               type: 2,
               title: 'Video',
               shadeClose: true,
               shade: 0.8,
               area: ['800px', '600px'],
               maxmin: true,
               content: url //iframe的url
           });
       }

   };
    return {
        todo:todo
    };

});






