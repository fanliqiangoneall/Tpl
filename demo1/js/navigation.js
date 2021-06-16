

function CheckForm(theForm)
  {
	  if (theForm.keywords.value=="请输入关键词")
	  {
		  alert('请输入关键词');
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
			  element.style.color="#939393";
		  }
	  }
	  //离开输入框时触发事件
	  function OnBlurFun(element,elementvalue)
	  {
		  if(element.value==""||element.value.replace(/\s/g,"")=="")
		  {
			  element.value=elementvalue;    
			  element.style.color="#939393";
		  }
	  }

jQuery(function(){
  jQuery(".index_navigation_top_search").click(function(){
	if(jQuery(".index_navigation_search_list").css("display")=="none"){
	  jQuery(".index_navigation_search_list").show();
	}else{
	  jQuery(".index_navigation_search_list").hide();
	}
  })
})

jQuery('#index_navigation_animate').removeClass().addClass('fadeInDown');
jQuery('#index_navigation_animate_1').removeClass().addClass('fadeInLeft');
jQuery('#index_navigation_animate_2').removeClass().addClass('fadeInRight');

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];