;(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}}(function($){$.fn.jqueryzoom=function(options){var settings={xzoom:700,yzoom:525,offset:10,position:"right"};if(options){$.extend(settings,options)}var noalt='';$(this).hover(function(){var imageLeft=$(this).get(0).offsetLeft;var imageTop=$(this).get(0).offsetTop;var imageWidth=$(this).get(0).offsetWidth;var imageHeight=$(this).get(0).offsetHeight;console.log("imageLeft"+imageLeft+"imageTop"+imageTop+"imageWidth"+imageWidth+"imageHeight"+imageHeight);var bigimage=$(this).attr("src");noalt=$(this).attr("src");$(this).attr("alt",'');console.log(noalt);if(noalt==''||noalt==undefined)return false;if(noalt!=undefined){if($("div.zoomdiv").get().length==0){$(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>")}}if(settings.position=="right"){leftpos=imageLeft+imageWidth+settings.offset}else{leftpos=imageLeft-settings.xzoom-settings.offset}$("div.zoomdiv").css({top:imageTop,left:leftpos});$("div.zoomdiv").width(settings.xzoom);$("div.zoomdiv").height(settings.yzoom);$("div.zoomdiv").show();$(document.body).mousemove(function(e){console.log($(".bigimg"));var bigwidth=$(".bigimg").get(0).offsetWidth;var bigheight=$(".bigimg").get(0).offsetHeight;console.log("bigwidth"+bigwidth+"bigheight"+bigheight);var scaley='x';var scalex='y';if(isNaN(scalex)|isNaN(scaley)){var scalex=Math.round(bigwidth/imageWidth);var scaley=Math.round(bigheight/imageHeight)}console.log("scalex"+scalex+"scaley"+scaley);mouse=new MouseEvent(e);console.log(mouse.y+"mouse.y"+mouse.x+"mouse.x");scrolly=mouse.y-imageTop-($("div.zoomdiv").height()*1/scaley)/2;$("div.zoomdiv").get(0).scrollTop=scrolly*scaley;scrollx=mouse.x-imageLeft-($("div.zoomdiv").width()*1/scalex)/2;$("div.zoomdiv").get(0).scrollLeft=(scrollx)*scalex;console.log("scrolly"+scrolly+"scrollx"+scrollx)})},function(){$(this).attr("alt",noalt);$(document.body).unbind("mousemove");$(".lenszoom").remove()})}}));function MouseEvent(e){this.x=e.x?e.x:e.pageX;this.y=e.y?e.y:e.pageY}