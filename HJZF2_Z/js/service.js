require(['jquery'],function($){
  function case_2_height(){
    var t=0;
    var t_elem;
    $(".HJZF2_Z_service_list div.HJZF2_Z_service_item").each(function () {
      $this = $(this);
      if ( $this.outerHeight() > t ) {
        t_elem=this;
        t=$this.outerHeight();
      }
    });
    $(".HJZF2_Z_service_item").css("height",t);
  };
  case_2_height();


  window.onresize=function(){
    case_2_height();
  };
});