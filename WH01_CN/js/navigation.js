function CheckForm(theForm)
  {
	  if (theForm.keywords.value=="输入关键词")
	  {
		  alert('请输入关键词！');
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