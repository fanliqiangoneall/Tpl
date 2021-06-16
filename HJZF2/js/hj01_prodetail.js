$(function(){
    if($("#box").length>0){        
        var box=document.getElementById("box");
        var smallbox=box.children[0];
        var bigbox=box.children[1];
        var mask=smallbox.children[1];
        var bigimg=bigbox.children[0];
        //2、监听鼠标进入小盒子
        $("#smallbox").mouseover(function () {
            
            //2、隐藏的内容显示
            $("#mask").css("display","block");
            $("#bigbox").css("display","block");            
            $("#smallbox").mousemove(function(event) {               
                var event = event || window.event;
                //求鼠标的坐标                
                var smTop = $("#smallbox").offset().top-$(window).scrollTop();
                var smLeft = $("#smallbox").offset().left-$(window).scrollLeft();
                var pointX = event.clientX - smLeft - $("#mask")[0].offsetWidth*0.5;
                var pointY = event.clientY - smTop-$("#mask")[0].offsetHeight*0.5;
                //边检测
                if(pointX<0){pointX=0;}
                else if(pointX>=$("#smallbox")[0].offsetWidth-$("#mask")[0].offsetWidth){pointX=$("#smallbox")[0].offsetWidth-$("#mask")[0].offsetWidth;}
                if(pointY<0){pointY=0;}
                else if(pointY>=$("#smallbox")[0].offsetHeight-$("#mask")[0].offsetHeight){pointY=$("#smallbox")[0].offsetHeight-$("#mask")[0].offsetHeight;}

                //让盒子移动
                $("#mask").css("left",pointX );                
                $("#mask").css("top",pointY);
                //公式
                $("#bigbox img").css("left",(- pointX/($("#smallbox")[0].offsetWidth/$("#bigbox")[0].offsetWidth)));
                $("#bigbox img").css("top",(- pointY/($("#smallbox")[0].offsetHeight/$("#bigbox")[0].offsetHeight)));           
            });
            
        });
        $("#smallbox").mouseout(function () {
          //2、隐藏的内容显示
          $("#mask").css("display","none");
          $("#bigbox").css("display","none");              
        });
    }
});
/* $(function(){
    if($("#box").length>0){
        var box=document.getElementById("box");
        var smallbox=box.children[0];
        var bigbox=box.children[1];
        var mask=smallbox.children[1];
        var bigimg=bigbox.children[0];
        //2、监听鼠标进入小盒子
        smallbox.onmouseover = function () {
            //2、隐藏的内容显示
            mask.style.display = 'block';
            bigbox.style.display = 'block';
            smallbox.onmousemove = function(event) {
                var event = event || window.event;
                //求鼠标的坐标
                var smTop = $("#smallbox").offset().top-$(window).scrollTop();
                var smLeft = $("#smallbox").offset().left-$(window).scrollLeft();
                var pointX = event.clientX - smLeft - mask.offsetWidth*0.5;
                var pointY = event.clientY - smTop-mask.offsetHeight*0.5;
                //边检测
                if(pointX<0){pointX=0;}
                else if(pointX>=smallbox.offsetWidth-mask.offsetWidth){pointX=smallbox.offsetWidth-mask.offsetWidth;}
                if(pointY<0){pointY=0;}
                else if(pointY>=smallbox.offsetHeight-mask.offsetHeight){pointY=smallbox.offsetHeight-mask.offsetHeight;}

                //让盒子移动
                mask.style.left = pointX + "px";
                mask.style.top = pointY + "px";
                //公式
                bigimg.style.left = - pointX/(smallbox.offsetWidth/bigbox.offsetWidth)+"px";
                bigimg.style.top = - pointY/(smallbox.offsetHeight/bigbox.offsetHeight)+"px";
            }
        };
        smallbox.onmouseout = function () {
            //2、隐藏的内容显示
            mask.style.display = 'none';
            bigbox.style.display = 'none';
        };
    }
}); */
(function () {
    function G(s) {
        return document.getElementById(s)
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr]
        } else {
            return getComputedStyle(obj, false)[attr]
        }
    }

    function Animate(obj, json) {
        if (obj.timer) {
            clearInterval(obj.timer)
        }
        obj.timer = setInterval(function () {
            for (var attr in json) {
                var iCur = parseInt(getStyle(obj, attr));
                iCur = iCur ? iCur : 0;
                var iSpeed = (json[attr] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if (iCur == json[attr]) {
                    clearInterval(obj.timer)
                }
            }
        }, 30)
    }

    var oList = G("listBox");
    var oPrev = G("prev");
    var oNext = G("next");
    var oListLi = oList.getElementsByTagName("li");
    var len2 = oListLi.length;
    var oListUl = oList.getElementsByTagName("ul")[0];
    var w2 = oListLi[0].offsetWidth + 10;
    oListUl.style.width = w2 * len2 + "px";
    var index = 0;
    var num = 2;
    var num2 = Math.ceil(num / 2);

    function Change() {
        if (index < num2) {
            Animate(oListUl, {left: 0})
        } else if (index + num2 <= len2) {
            Animate(oListUl, {left: -(index - num2 + 1) * w2})
        } else {
            Animate(oListUl, {left: -(len2 - num) * w2})
        }
        for (var i = 0; i < len2; i++) {
            oListLi[i].className = "";
            if (i == index) {
                oListLi[i].className = "on"
            }
        }
    };
    oNext.onclick = function () {
        index++;
        index = index == len2 ? 0 : index;
        Change()
    };
    oPrev.onclick = function () {
        index--;
        index = index == -1 ? len2 - 1 : index;
        Change()
    };
    for (var i = 0; i < len2; i++) {
        oListLi[i].index = i;
        oListLi[i].onclick = function () {
            index = this.index;
            Change()
        }
    }
})();
function jumpto() {
    $('html,body').animate({scrollTop: $('#inquiry').offset().top}, 1000);
    return false
};
function show(i) {
    switch (i) {
        case 1:
            document.getElementById("gx1").style.display = "block";
            document.getElementById("gx2").style.display = "none";
            document.getElementById("pro1").className = "d_1";
            document.getElementById("pro2").className = "d_2";
            break;
        case 2:
            document.getElementById("gx1").style.display = "none";
            document.getElementById("gx2").style.display = "block";
            document.getElementById("pro1").className = "d_2";
            document.getElementById("pro2").className = "d_1";
            break
    }
};
$(function () {
    $('#gx1 > table').addClass('s')
});
$(".tabsTitle").on('click', function () {
    $(".tabsTitle").removeClass("active");
    $(this).addClass("active");
    var index = $(this).attr("index");
    $(".pro_detail").hide();
    $(".pro_detail").eq(index - 1).show().addClass("fadeInUp").siblings(".pro_detail").hide().removeClass("fadeInUp")
});