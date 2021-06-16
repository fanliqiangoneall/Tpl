require(['jquery'],function($){
    // 视频自动播放
   /*  $(function () {
        $('.hx').animate({
            'width': '100%'
        }, 1500);

        $('.video video').get(0).play();
    }); */
    (function(){
        var other3flag = -1;        
        var url = window.location.href;
        url = url.toLowerCase();        
        var other3flag = sessionStorage.getItem("other3flag");
        var ref = '';
        if (document.referrer.length > 0) {
            ref = document.referrer;
        }
        try {
            if (ref.length == 0 && opener.location.href.length > 0) {
                ref = opener.location.href;
            }
        } catch (e) {}
        ref.toLowerCase();
        if(ref !='' &&  ref ==url){
            $(".hjzf_languageSelect").hide();
        }else{
            if(other3flag != 1){
                $(".hjzf_languageSelect__pic").click(function(e){
                    sessionStorage.setItem("other3flag", "1");
                    sessionStorage.setItem("toNew", "1");
                    e.preventDefault();
                    var href = $(this).attr("href");
                    href = href.toLowerCase();
                    console.log("url++++"+url);
                    console.log("href++++"+href);
                    console.log(url == href);
                    window.open(href,'_blank');
                })
            }else{
                $(".hjzf_languageSelect").hide();
            }
        }
    })();


    var data = {
        "width": 369,
        "height": 152,
        "offX": 0,
        "offY": 0,
        "sourceW": 369,
        "sourceH": 152,
        "frames": [
            {
                "file": "1.png"
            },
            {
                "file": "2.png"
            },
            {
                "file": "3.png"
            },
            {
                "file": "4.png"
            },
            {
                "file": "5.png"
            },
            {
                "file": "6.png"
            },
            {
                "file": "7.png"
            },
            {
                "file": "8.png"
            },
            {
                "file": "9.png"
            },
            {
                "file": "10.png"
            },
            {
                "file": "11.png"
            },
            {
                "file": "12.png"
            },
            {
                "file": "13.png"
            },
            {
                "file": "14.png"
            },
            {
                "file": "15.png"
            },
            {
                "file": "16.png"
            },
            {
                "file": "17.png"
            },
            {
                "file": "18.png"
            },
            {
                "file": "19.png"
            },
            {
                "file": "20.png"
            },
            {
                "file": "21.png"
            },
            {
                "file": "22.png"
            },
            {
                "file": "23.png"
            },
            {
                "file": "24.png"
            }
        ],
        "animations": {
            "aaa": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        }
    }
    
   
    function preloadImage(names, cb, prefix){
        window.gkaCache = window.gkaCache || [];
        var n = 0,img,imgs = {};
        names.forEach(function(name) {
            img = new Image();
            window.gkaCache.push(img);
            img.onload = (function(name, img) {
                return function() {
                    imgs[name] = img;
                    (++n === names.length) && cb && cb(imgs);
                }
            })(name, img);
            img.src = (prefix || '') + name;
        });
    }
    preloadImage(["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png"], function(imgs) {
       var canvas = document.getElementById('gka'),
            ctx = canvas.getContext('2d'),
            frames = data.frames,
            i = 0,
            o = {},
            key = Object.keys(data.animations)[0],
            list = data.animations[key],
            len = list.length;

        var cacheCanvas = document.createElement("canvas"),
            ctxCache = cacheCanvas.getContext("2d");

        cacheCanvas.width = canvas.width;
        cacheCanvas.height = canvas.height;

        var timer = setInterval(function(){
            o = list[i];
            ctxCache.clearRect(0, 0, canvas.width, canvas.height);
            o = Object.prototype.toString.call(o)=='[object Array]'? o: [o];
            for (var j = 0, t; j < o.length; j++) {
                t = data.frames[o[j]];
                ctxCache.drawImage((imgs[t.file] || imgs[data.file]), (t.x || data.x || 0), (t.y || data.y || 0), (t.width || data.width), (t.height || data.height), (t.offX || data.offX || 0), (t.offY || data.offY || 0), (t.width || data.width), (t.height || data.height));
            }
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(cacheCanvas, 0, 0, canvas.width, canvas.height);
            i = ++i === len? 0: i;
        }, 100)
        setTimeout(function () {
            clearInterval(timer);
        },2300)
    }, "/Tpl/public/image/itm/")

});

