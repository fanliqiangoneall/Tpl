jQuery(function() {
	jQuery('.smallImgList a').not("#pro_video a").lightBox();
	jQuery('#gallery a img').not("#pro_video").click(function(){
		jQuery('#gallery a').not("#pro_video").lightBox();
	});
	/* smallImgList */
	jQuery("#gallery a").attr("href", jQuery('#gallery').children('a').children('img').attr("src"));
	jQuery(".smallImgList li").live('mouseover',function(){
		jQuery(this).nextAll().removeClass("hover");
		jQuery(this).prevAll().removeClass("hover");
		jQuery(this).addClass("hover");
		if(jQuery(this).attr("id")=="360img"){
			jQuery("#auximgs").hide();
			jQuery("#KeyShotXR").show();
		}else{
			jQuery("#auximgs").show();
			jQuery("#KeyShotXR").hide();
			jQuery("#bigimg").attr("src", jQuery(this).children('a').children('img').attr("src"));
			jQuery("#bigimg").attr("alt", jQuery(this).children('a').children('img').attr("src"));
			jQuery("#bigimga").attr("href", jQuery(this).children('a').children('img').attr("src"));
		}
		
	});
	
});

(function($){

   $.fn.jqueryzoom = function(options){

   var settings = {
     xzoom: 700,   //zoomed width default width
     yzoom: 525,   //zoomed div default width
     offset: 10,   //zoomed div default offset
     position: "right" //zoomed div default position,offset position is to the right of the image
    };

    if(options) {
     $.extend(settings, options);
    }

            var noalt ='';
  

   $(this).hover(function()
   {
      var imageLeft = $(this).get(0).offsetLeft;
      var imageRight = $(this).get(0).offsetRight;
      var imageTop = $(this).get(0).offsetTop;
      var imageWidth = $(this).get(0).offsetWidth;
      var imageHeight = $(this).get(0).offsetHeight;

      var bigimage = $(this).attr("alt");
                noalt = $(this).attr("alt");
                $(this).attr("alt",'');
         //asd
   if ( noalt==''||noalt==undefined) return false;
    if ( noalt!=undefined) 
    {
     if($("div.zoomdiv").get().length == 0 ){

     $(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>");

     }
    }
  
      if(settings.position == "right")
     {
      leftpos = imageLeft + imageWidth + settings.offset;

     }
      else
     {
      leftpos = imageLeft - settings.xzoom - settings.offset;
     }

      $("div.zoomdiv").css({ top: imageTop,left: leftpos });

      $("div.zoomdiv").width(settings.xzoom);

      $("div.zoomdiv").height(settings.yzoom);

      $("div.zoomdiv").show();
  
   
    $(document.body).mousemove(function(e)
     {
      var bigwidth = $(".bigimg").get(0).offsetWidth;
      var bigheight = $(".bigimg").get(0).offsetHeight;
      var scaley ='x';
      var scalex= 'y';
      if(isNaN(scalex)|isNaN(scaley)){
      var scalex = Math.round(bigwidth/imageWidth) ;
      var scaley = Math.round(bigheight/imageHeight);
      }
      mouse = new MouseEvent(e);
      scrolly = mouse.y - imageTop - ($("div.zoomdiv").height()*1/scaley)/2 ;
      $("div.zoomdiv").get(0).scrollTop = scrolly * scaley ;
      scrollx =    mouse.x - imageLeft - ($("div.zoomdiv").width()*1/scalex)/2 ;
      $("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex ; 
    });
      },function()
      {
               $(this).attr("alt",noalt);
         $("div.zoomdiv").hide();
         $(document.body).unbind("mousemove");
         $(".lenszoom").remove();
         $("div.zoomdiv").remove();

      });

   }

})(jQuery);

function MouseEvent(e) {
this.x = e.x ? e.x : e.pageX// e.pageX
this.y = e.y ? e.y : e.pageY// e.pageY
}
var $=function(_obj){return document.getElementById(_obj);}

jQuery.noConflict(); 
jQuery(document).ready(function(){ 
  jQuery("#gallery .jqzoom").jqueryzoom({ 
  xzoom: 326, 
  yzoom: 241, 
  offset: 10, 
  position: "right" 
  }); 
 
});
