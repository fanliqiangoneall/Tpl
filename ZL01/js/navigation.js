$('#keywords1').keydown(function() {
var ordernubmer=$("#keywords1").val();
  if (event.keyCode == 13) {
	if(ordernubmer.length<=0){
		alert("请输入关键词");
		return false ;
	}
  }
});
		 
function CheckForm(theForm)
  {
	  if (theForm.keywords.value=="搜索...")
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
		  element.style.color="#fff";
	  }
  }
  //离开输入框时触发事件
  function OnBlurFun(element,elementvalue)
  {
	  if(element.value==""||element.value.replace(/\s/g,"")=="")
	  {
		  element.value=elementvalue;    
		  element.style.color="#fff";
	  }
  }	  
	  
jQuery('#index_navigation_animate').removeClass().addClass('fadeIn');