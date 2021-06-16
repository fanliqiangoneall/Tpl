require(['jquery','layer','lazyload'], function ($,layer,lazyload){
    $("img.lazy").lazyload({effect: "fadeIn"});
});
