(function(f){var a=" .webcompatibleCon{    position: fixed; left:0; top:0; z-index: 8000; "+'   width: 100%; height: 100%; font-family: "Microsoft YaHei", "微软雅黑", "黑体"; '+"    color: #747474; } .webcompatibleCon *{ padding: 0; margin:0;} .webcompatibleCon .webcompatibleBG{     position: absolute; left:0; top:0; width: 100%; height: 100%; _height:600px; *height:60px;     opacity: 0.5; filter:alpha(opacity=50); background:#000; } .webcompatibleCon .webcompatibleMain{     position: relative; background: #fff;     width: 600px; height: 350px;     border-radius: 3px;  font-size: 14px;     top:200px; margin: 0 auto; } .webcompatibleCon .colorBlack{color:#000; } .webcompatibleCon .webcompatiblePa{padding:0 30px; } .webcompatibleCon .webcompatibleTitle{     font-size: 14px; height:45px; line-height:45px;     border-bottom:1px solid #DEDEDE; margin-bottom: 10px; } .webcompatibleCon .tipClose{     position: absolute; right: 10px; top:8px; "+'    width: 26px; height: 26px; background:url("../Tpl/public/image/BrowserTip_en.png") no-repeat -7px -195px; } '+".webcompatibleCon .tipClose:hover{cursor: pointer;} .webcompatibleCon .tip-part1{line-height: 40px; font-size: 16px;} .webcompatibleCon .tip-part1 span{font-weight: bold;} .webcompatibleCon .tip-part1 .redspan{color: #DE2626;} .webcompatibleCon .tip-part2{text-align: center; margin-top: 40px; padding:0 15px;} .webcompatibleCon ul li{list-style-type: none;float:left; width: 16%;} .webcompatibleCon ul li p{color: #747474;} .webcompatibleCon a{text-decoration:none;}"+'.webcompatibleCon .browser{ width: 56px; height: 58px; display: inline-block; margin:0 auto;background-image:url("../Tpl/public/image/BrowserTip_en.png"); background-repeat:no-repeat; }'+".webcompatibleCon .browser-google{ background-position: -5px -20px; } .webcompatibleCon .browser-firefox{ background-position: -99px -19px; }.webcompatibleCon .browser-Opera{ background-position: -200px -16px; } .webcompatibleCon .browser-safari{ background-position: -6px -102px; } .webcompatibleCon .browser-sougou{ background-position: -102px -106px; } .webcompatibleCon .browser-ie{ background-position: -199px -102px; } ";var j='<div class="webcompatibleCon"><div class="webcompatibleBG"></div><div class="webcompatibleMain"><div class="webcompatibleTitle"><p class="webcompatiblePa colorBlack">Upgrade prompt</p><div class="tipClose"></div>'+"</div>"+'<div class="webcompatiblePa colorBlack tip-part1">The version of IE you are using is too low!<span class = "redspan">Please upgrade to IE9 and above immediately</span></div><div class="webcompatiblePa browserup">This site uses html5, css3 and other new technologies to develop, and no longer supports old IE. We recommend that you use the following browser to access: </div><div class="tip-part2 webcompatiblePa">'+"<ul style='padding-left:30px;'>"+'<li><a href="https://chrome.en.softonic.com/" target="_blank"><div class="browser browser-google"></div><p>Chrome</p></a></li><li><a href="https://www.mozilla.org/ru/firefox/new/" target="_blank"><div class="browser browser-firefox"></div><p>Firefox </p></a></li><li style="width:17.5%;"><a href="http://www.opera.com/download" target="_blank"><div class="browser browser-Opera "></div><p>Opera </p></a></li><li style="width:17.5%;"><a href="https://www.apple.com/safari/" target="_blank"><div class="browser browser-safari "></div><p>Safari</p></a></li>'+"</ul></div></div></div>";var l=window.document.head||window.document.getElementsByTagName("head")[0];var m={isAddEventListener:typeof window.document.addEventListener!="undefined",isAttachEvent:typeof window.document.attachEvent!="undefined",isInnerText:"innerText"in l,isInnerHTML:"innerHTML"in l,addEvent:function(q,p,o){if(m.isAddEventListener){q.addEventListener(p,o,false)}else{if(m.isAttachEvent){q.attachEvent("on"+p,o)}}},removeEvent:function(q,p,o){if(m.isAddEventListener){q.removeEventListener(p,o,false)}else{if(m.isAttachEvent){q.detachEvent("on"+p,o)}}}};var n=[],k=false,c=false;function i(p){var o=p.shift();while(o){o();o=p.shift()}}function b(){if(m.isAddEventListener){window.document.removeEventListener("DOMContentLoaded",b);k=true;i(n)}if(m.isAttachEvent){if(window.document.readyState==="complete"){window.document.detachEvent("onreadystatechange",b);k=true;i(n)}}}var e=f||function(o){if(typeof o!=="function"){return}n.push(o);if(k){i(n)}else{if(!c){if(m.isAddEventListener){window.document.addEventListener("DOMContentLoaded",b)}else{if(m.isAttachEvent){window.document.attachEvent("onreadystatechange",b)}}c=true}}};function h(){var o=null;if(document.createStyleSheet){o=document.createStyleSheet();o.cssText=a}else{o=document.createElement("style");if(o.setAttribute){o.setAttribute("type","text/css")}else{o.attributes.type="text/css"}o.innerHTML=o.innerText=a;l.appendChild(o)}}function g(){var p=window.document.createElement("div");p.innerHTML=j;var o=window.document.body;o.insertBefore(p,o.firstChild)}function d(){var q=document.body.children||document.body.childNodes;var p=0,o=q.length,t,r;for(p;p<o;p++){t=q[p];if(t.tagName.toUpperCase()=="DIV"){r=t.firstChild;if(r&&r.tagName.toUpperCase()==="DIV"&&/webcompatibleCon/ig.test(r.className)){break}}}r=r.lastChild.firstChild;var s=r.lastChild;m.addEvent(s,"click",function(){document.body.removeChild(t)})}e(function(){var q=window.navigator.userAgent;var o=/msie|trident/ig;var p=o.test(q);var t=/msie 6/i.test(q);var s=/msie 7/i.test(q);var r=/msie 8/i.test(q);var x=/msie 9/i.test(q);if(r||t||s||x){h();g();d()}})})(window.$||window.jQuery);var path="";(function(){var title=document.getElementsByTagName("title")[0].innerHTML;var url=window.location.href;var site=window.location.host;var referrer=document.referrer;var ref="";ref=referrer;var urlpath=path+"/statistics";var p=navigator.platform;var plat=0;if(p.indexOf("Win")==0||p.indexOf("Mac")==0||p=="X11"){plat=0}else{plat=1}jQuery.post(urlpath,{title:title,url:url,ref_val:ref,plat:plat},function(date){})})();function turn_sta(type,location){var p=navigator.platform;var plat=0;if(p.indexOf("Win")==0||p.indexOf("Mac")==0||p=="X11"){plat=0}else{plat=1}var url=window.location.href;var urlpath=path+"/statisticsTurn";jQuery.post(urlpath,{type:type,location:location,url:url,plat:plat},function(date){})};