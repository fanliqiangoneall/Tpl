
/**
* 开始slideshow
* 2010-08-13 by Longbill
*/
jQuery(function()
{
	//生成下部小按钮
	var length = jQuery('#slideshow_photo a').length;
	for(var i = 0; i < length; i++)
	{
		jQuery('<div class="slideshow-bt" index="'+(length-i)+'"></div>').appendTo('#slideshow_footbar');
    }
    jQuery('#slideshow_footbar .slideshow-bt:last').addClass('bt-on');
    jQuery('#slideshow_footbar .slideshow-bt').mouseenter(function(e)
    {
		slideTo(this);
    });

	
    var indexAllowAutoSlide = true;
    jQuery('#slideshow_wrapper').mouseenter(function()
    {
		indexAllowAutoSlide = false;
    }).mouseleave(function()
    {
		indexAllowAutoSlide = true;
    });

	//滚动
    setInterval(function()
    {
		if (indexAllowAutoSlide) slideDown();
    },3000);

});

function slideDown()
{
	var currentBt = jQuery('#slideshow_footbar .slideshow-bt.bt-on');
    if (currentBt.length <= 0) return;
    var nxt = currentBt.get(0).previousSibling;
    slideTo(nxt?nxt:jQuery('#slideshow_footbar .slideshow-bt:last').get(0));
}

function slideTo(o)
{
	if (!o) return;
	var currentIndex = jQuery('#slideshow_footbar .slideshow-bt.bt-on').attr('index'),
		current = jQuery('#slideshow_photo a[index='+currentIndex+']');
	var nxt = jQuery('#slideshow_photo a[index='+jQuery(o).attr('index')+']');
	if (currentIndex == jQuery(o).attr('index')) return;
	
	if (nxt.find('img[imgsrc]').length > 0)
	{
		var img =nxt.find('img[imgsrc]');
		img.attr('src',img.attr('imgsrc')).removeAttr('imgsrc');
	}
	
	jQuery('#slideshow_footbar .slideshow-bt.bt-on').removeClass('bt-on');
	jQuery(o).addClass('bt-on');
	
	nxt.css('z-index',2);
	
	current.css('z-index',3).fadeOut(500,function()
	{
		jQuery(this).css('z-index','1').show();
		var img = nxt.next('a').find('img[imgsrc]');
		if (img.length > 0)
		{
			img.attr('src',img.attr('imgsrc')).removeAttr('imgsrc');
		}
	});
}
//slideshow end

