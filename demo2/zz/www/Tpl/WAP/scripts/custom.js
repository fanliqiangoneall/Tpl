// JavaScript Document

$(window).load(function() {
	$('.flexslider').flexslider();
});

$(document).ready(function () {
//	$('#tweets').tweetable({username: 'iEnabled', time: true, limit: 3, replies: true, position: 'append'});

	$("#home").click(function() { 
		$(this).addClass('selected');
		$(this).parent().parent().find('#about, #portfolio, #blog, #contact').removeClass('selected');
		$(this).parent().parent().find(".home").hide();
		$(this).parent().parent().find(".about").hide();
		$(this).parent().parent().find(".portfolio").hide();
		$(this).parent().parent().find(".blog").hide();
		$(this).parent().parent().find(".contact").hide();
	});
	$("#about").click(function() { 
		$(this).addClass('selected');
		$(this).parent().parent().find('#home, #portfolio, #blog, #contact').removeClass('selected');
		$(this).parent().parent().find(".home").hide();
		$(this).parent().parent().find(".about").hide();
		$(this).parent().parent().find(".portfolio").hide();
		$(this).parent().parent().find(".blog").hide();
		$(this).parent().parent().find(".contact").hide();
	});
	$("#portfolio").click(function() { 
		$(this).addClass('selected');
		$(this).parent().parent().find('#home, #about, #blog, #contact').removeClass('selected');
		$(this).parent().parent().find(".home").hide();
		$(this).parent().parent().find(".about").hide();
		$(this).parent().parent().find(".portfolio").hide();
		$(this).parent().parent().find(".blog").hide();
		$(this).parent().parent().find(".contact").hide();
	});
	$("#blog").click(function() { 
		$(this).addClass('selected');
		$(this).parent().parent().find('#home, #about, #portfolio, #contact').removeClass('selected');
		$(this).parent().parent().find(".home").hide();
		$(this).parent().parent().find(".about").hide();
		$(this).parent().parent().find(".portfolio").hide();
		$(this).parent().parent().find(".blog").hide();
		$(this).parent().parent().find(".contact").hide();
	});
	$("#contact").click(function() { 
		$(this).addClass('selected');
		$(this).parent().parent().find('#home, #about, #portfolio, #blog').removeClass('selected');
		$(this).parent().parent().find(".home").hide();
		$(this).parent().parent().find(".about").hide();
		$(this).parent().parent().find(".portfolio").hide();
		$(this).parent().parent().find(".blog").hide();
		$(this).parent().parent().find(".contact").hide();
	});

	$(".notification-quit-red").click(function(){
	  $(".notification-box-red").fadeOut("slow");
	  return false;
	});
	
	$(".notification-quit-green").click(function(){
	  $(".notification-box-green").fadeOut("slow");
	  return false;
	});
	
	$(".notification-quit-yellow").click(function(){
	  $(".notification-box-yellow").fadeOut("slow");
	  return false;
	});
	
	$(".notification-quit-blue").click(function(){
	  $(".notification-box-blue").fadeOut("slow");
	  return false;
	});


});