$(function(){
	$(".sharebar_button").hover(
		function(){
			$(".sharewrapper").show();
			$("div").eq(1).wrap('<div class="sharewrapper"></div>');
		},
		function(){}
	);
	$(".link_01").live('click', function(){
		$(".sharewrapper").hide();
		return false;
	});
	//
	$("#GLinks").hover(function(){
		$("ul",this).show();
	},function(){
		$("ul",this).hide();
	});
	
	//
	var maxi = $("#Slide .smlist a").length,clicki = 0,Timeout;
	$("#Slide ul").width(254 * maxi);
	$("#Slide .smlist a:first").addClass("active");
	
	$("#Slide .smlist a").click(function(){
		clicki = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$("#Slide ul").stop().animate({"margin-left":-clicki *254});
		return false;
	});
	$("#Slide .smlist a").mouseover(function(){$(this).click()});
	
	function _auto(){
		clicki < maxi -1 ? clicki++ : clicki = 0;
		$("#Slide .smlist a").eq(clicki).mouseover();
		Timeout = setTimeout(_auto,5000);
	}
	
	Timeout = setTimeout(_auto,5000);
	
	$("#Slide ul li img,#Slide .smlist a").hover(function(){
		clearTimeout(Timeout);
	},function(){
		Timeout = setTimeout(_auto,5000);
	});
	
	//
	var NavOut;
	$("#Navigation li").hover(function(){
		var i = $(this).index();
		clearTimeout(NavOut);
		var obj = $(this).attr("rel");
		var offset = $(this).offset();
		$(obj).css({top:offset.top+22,left:offset.left-13}).show();
		
		if(i==3){
			$(obj).css({left:offset.left-61});
		}else if(i==5){
			$(obj).css({left:offset.left-251});
		}else{
			$(obj).css({left:offset.left-13});
		}
		
		$(obj).siblings("div.nav-list").hide();
		
	},function(){
		var obj = $(this).attr("rel");
		NavOut = setTimeout(function(){
			$(obj).hide();
		},100);
	});
	
	$(".nav-list").hover(function(){
		clearTimeout(NavOut);
	},function(){
		var obj = this;
		NavOut = setTimeout(function(){
			$(obj).hide();
		},100);
	});
	
	//
	$("#imgList li a").click(function(){
		var uri = $(this).attr("href");
		$("#ImgUrl").empty().html("<img src='"+uri+"' alt='' />");
		$("#ImgUrl img").hide().load(function(){$(this).fadeIn()});
		return false;
	});
	
	$("#imgList li a:first").click();
	
	$(".menu-list li a").click(function(){
		var p = $(this).parent("li");
		/*
		if($("ul",p).length>0){
			if($("ul",p).is(":hidden")){
				$("ul",p).slideDown();
			}else{
				$("ul",p).slideUp();
			}
			return false;
		}
		*/
		if($(this).attr("class")=="active"){
			$("ul",p).show();
		}
		$("ul",p).slideDown();
		$(p).siblings().children("ul").slideUp();
		if($("ul li",p).length>0){
			return false;
		}
	});
	
	
	$(".menu-list>li>ul>li>a").each(function(){
		if($(this).attr("class").indexOf("active")>=0){
			$(this).parent().parent().show();
		}
	});
})

function getTab(t,o){
	$(t).addClass("active").siblings().removeClass("active");
	$(o).show().siblings().hide();
}

function addFav(a,b){
	if(document.all){
		window.external.AddFavorite(a,b)
	}else if(window.sidebar){
		window.sidebar.addPanel(b,a,"")
	}else{
		alert("??????????????????????????????!\n????????????????Ctrl+D??????????")
	}
}

function scroll(type,obj){
	var scrollWidth = $("li",obj).outerWidth();
	if(type == "prev"){
		$("ul",obj).prepend($("li:last",obj)).css("margin-left",-scrollWidth).animate({"margin-left":0})
	}else if(type=="next"){
		$("ul",obj).animate({"margin-left":-scrollWidth},function(){
			$("ul",obj).append($("li:first",obj)).css("margin-left",0)
		})
	}
}

function toggleShow(t,obj){
	$(obj).slideToggle();
	$(t).toggleClass("vis");
}

function ShowPre(o){
	var that= this;
	this.box = $("#"+o["box"]);
	this.btnP = $("#"+o.Pre);
	this.btnN= $("#"+o.Next);
	this.v = o.v||1;
	this.c = 0;
	var li_node = "li";
	this.loop = o.loop||false;

	//????????dom
	if(this.loop){
		this.li =  this.box.find(li_node);
		this.box.append(this.li.eq(0).clone(true));
	};
	this.li = this.box.find(li_node);
	this.l = this.li.length;

	//??????????????
	if(this.l<=this.v){
		this.btnP.hide();
		this.btnN.hide();
	};
	this.deInit = true;
	this.w = this.li.outerWidth(true);
	this.box.width(this.w*this.l);
	this.maxL = this.l - this.v;

	//?????????? ????????????
	this.s = o.s||1;
	if(this.s>1){
		this.w = this.v*this.w;
		this.maxL = Math.floor(this.l/this.v);
		this.box.width(this.w*(this.maxL+1));
		//????????????????
		var addNum = (this.maxL+1)*this.v-this.l;
		var addHtml = "";
		for(var adN = 0;adN < addNum;adN++){
			addHtml += "<li class='addBox'><div class='photo'></div><div class='text'></div></li>";
		};
		this.box.append(addHtml);
	};
	
	//????????????
	this.numIco = null;
	if(o.numIco){
		this.numIco  = $("#"+o.numIco);
		var numHtml = "";
		numL = this.loop?(this.l-1):this.l;
		for(var i = 0;i<numL;i++){
				numHtml+="<a href='javascript:void(0);'>"+i+"</a>";
		};
		this.numIco.html(numHtml);
		this.numIcoLi = this.numIco.find("a");
		this.numIcoLi.bind("click",function(){
			if(that.c==$(this).html())return false;
			that.c=$(this).html();
			that.move();
		});
	};
	this.bigBox = null;
	this.loadNumBox = null;
	if(o.loadNumBox){
		this.loadNumBox = $("#"+o.loadNumBox);
	};

	//????????????
	this.allNumBox = null;
	if(o.loadNumBox){
		this.allNumBox = $("#"+o.allNumBox);
		if(o.bBox){
			var cAll = this.l<10?("0"+this.l):this.l;
		}else{
			var cAll = this.maxL<10?("0"+(this.maxL+1)):(this.maxL+1);
		};
		this.allNumBox.html(cAll);
	};

	//????????????????
	if(o.bBox){
		this.bigBox = $("#"+o.bBox);
		this.li.each(function(n){
			$(this).attr("num",n);
			var cn = (n+1<10) ? ("0"+(n+1)):n+1;
			$(this).find(".text").html(cn);
		});
		this.loadNum = 0;
		this.li.bind("click",function(){
			if(that.loadNum==$(this).attr("num"))return false;
			var test = null;
			if(that.loadNum>$(this).attr("num")){
				test = "pre";
			};
			that.loadNum = $(this).attr("num");

			that.loadImg(test);
		});
		that.loadImg();
		if(o.bNext){
			that.bNext = $("#"+o.bNext);
			that.bNext.bind("click",function(){
				that.loadNum<that.l-1 ?that.loadNum++:that.loadNum=0;
				that.loadImg();
			});
		};
		if(o.bPre){
			that.bPre = $("#"+o.bPre);
			that.bPre.bind("click",function(){
				that.loadNum> 0? that.loadNum--:that.loadNum=that.l-1 ;
				that.loadImg("pre");
			});
		};
	};

	//????????????(????or??????)
	if(this.loop){
		this.btnP.bind("click",function(){
			if(that.c<=0){
				that.c = that.l-1;
				that.box.css({left:-that.c*that.w});		
			};
			that.c --;
			that.move(1);
		});
		this.btnN.bind("click",function(){
			if(that.c>=(that.l-1)){
				that.box.css({left:0});		
				that.c = 0;
			};
			that.c++;
			that.move(1);
		});
	}else{
		this.btnP.bind("click",function(){
			that.c> 0? that.c--:that.c=that.maxL ;
			that.move(1);
		});
		this.btnN.bind("click",function(){
			that.c<that.maxL ?that.c++:that.c=0;
			that.move(1);
		});
	};
	that.timer = null;
	if(o.auto){
		that.box.bind("mouseover",function(){
			clearInterval(that.timer);
		});
		that.box.bind("mouseleave",function(){
			that.autoPlay();
		});
		that.autoPlay();
		
	};
	this.move();
}

ShowPre.prototype = {
	move:function(test){ //????????
		var that = this;
		var pos = this.c*this.w;
		//document.title = (test&&that.timer);
		if(test&&that.timer){
			clearInterval(that.timer);
		};
		//????????????
		if(that.numIco){ 
			that.numIcoLi.removeClass("on");
			var numC = that.c;
			if(that.loop&&(that.c==(this.l-1))){
				numC= 0;	
			};
			that.numIcoLi.eq(numC).addClass("on");
		};

		this.box.stop();
		this.box.animate({left:-pos},function(){
			if(test&&that.auto){
				that.autoPlay();
			};
			if(that.loop&&that.c==that.maxL){
				that.c = 0;
				that.box.css({left:0})
			};
		});
		if(that.bigBox)return false;
		//????????????????
		if(that.loadNumBox){
			var loadC = parseInt(that.c)+1;
				loadC = loadC<10?"0"+loadC:loadC;
				that.loadNumBox.html(loadC);
		};

	},
	loadImg:function(test){ //????????????
		var that = this;
		var _src = this.li.eq(that.loadNum).attr("bsrc"),bigTh3=null,bigTh4=null,bigText=null;
		if(that.li.eq(that.loadNum).attr("data-h")){
			//$("#bigT h3").html(that.li.eq(that.loadNum).attr("data-h"));
			var bigTh3 = $("#bigT h3");
			$("#bigT").hide();
			bigTh3.html("");
		};
		if(that.li.eq(that.loadNum).attr("data-m")){
			//$("#bigT h4").html(that.li.eq(that.loadNum).attr("data-m"));
			var bigTh4 = $("#bigT h4");
			$("#bigT").hide();
				bigTh4.html("");
		};
		if(that.li.eq(that.loadNum).attr("data-text")){
			//$("#bigText").html(that.li.eq(that.loadNum).attr("data-text"));
			var bigText = $("#bigText");
				bigText.html("").hide();
		};
		var img = new Image();
			$(img).hide();
			//loading dom????(??????????????????????????????????????????????)
			if(that.deInit){
				var le = 0;
				that.deInit = false;
				that.bigBox.html("<div class='loading'></div><div class='loading'></div>");
			}else{
				if(test!="pre"){
					var le = -1230;
					that.bigBox.append("<div class='loading'></div>");
				}else{
					var le = 1230;
					that.bigBox.find(".loading").before("<div class='loading'></div>");
					that.bigBox.css({"margin-left":-1230});
					le = 0;
				};				
			};
			that.bigBox.animate({"margin-left":le},function(){
				$(img).bind("load",function(){
					//????????????
					if(test!="pre"){
						var n = 1,oldN = 0;
					}else{
						var n = 0,oldN = 1;
					};
					that.bigBox.find(".loading").eq(n).html(img);
					that.bigBox.find(".loading").eq(oldN).remove();
					that.bigBox.css({"margin-left":0});
					$(this).fadeIn(200,function(){
						if(bigTh3){
							$("#bigT").fadeIn()
							bigTh3.html(that.li.eq(that.loadNum).attr("data-h"));
						};
						if(bigTh4){
							$("#bigT").fadeIn()
							bigTh4.html(that.li.eq(that.loadNum).attr("data-m"));
						};
						if(bigText){
							bigText.html(that.li.eq(that.loadNum).attr("data-text")).fadeIn();
						};
					});
				});
				img.src = _src;
			});
			//????????????????
			that.li.removeClass("on");
			that.li.eq(that.loadNum).addClass("on");
			if(that.loadNumBox){
				var loadC = parseInt(that.loadNum)+1;
					loadC = loadC<10?"0"+loadC:loadC;
					that.loadNumBox.html(loadC);
			};
			
			
	},
	autoPlay:function(){ //????????????
		var that =this;

		that.timer = setInterval(function(){
			that.c<that.maxL?that.c++:that.c=0;
			that.move();
		},4000);
	}
}
