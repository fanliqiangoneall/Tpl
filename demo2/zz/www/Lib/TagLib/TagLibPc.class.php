<?php

class TagLibPc extends TagLib{

    protected $tags = array(

         'list' => array('attr' => '$page,sql,table,limit,order','close' =>1),// attr 属性列表close 是否闭合（0 或者1 默认为1，表示闭合）
		 'mylist' => array('attr' => '$page,sql,table,limit,order','close' =>1)// attr 属性列表close 是否闭合（0 或者1 默认为1，表示闭合）
 );
 public function _list ($attr,$content){

       $attr = $this->parseXmlAttr($attr);
       $limit=$attr['limit'];//参数$limit，可通过模板传入参数值
       $order=$attr['order'];//$order$limit，可通过模板传入参数值
	   $table=$attr['table'];
	   $page=$attr['page'];
	   $sql=$attr['sql'];
	   $webid=C('webid');
	   $sql='webid='.$webid.$sql;
	   if(!$page){$page=10;}
	   //import('ORG.Util.Page');// 导入分页类
       $str='<?php ';
	   //$str .= '$count=M('.$table.')->where("'.$sql.'")->count();';
	   //$str .= '$Page       = new Page($count,'.$page.');';
	   //$str .= '$show       = $Page->show();';
	   //$str .= '$list =M('.$table.')->where("'.$sql.'")->order("'.$order.'")->limit($Page->firstRow,$Page->listRows)->select();';
	   $str .= '$list =M('.$table.')->where("'.$sql.'")->order("'.$order.'")->limit('.$limit.')->select();';
       $str .= 'foreach($list as $key=>$val):';
       $str .= '';	
	   $str .= '?>';
	   $str .= ($content);
       $str .='<?php endforeach ;?>';
	   //$str .='<?php echo $show ;';
	 
       return $str;
	   
       }

 public function _mylist ($attr,$content){

       $attr = $this->parseXmlAttr($attr);
       $limit=$attr['limit'];//参数$limit，可通过模板传入参数值
       $order=$attr['order'];//$order$limit，可通过模板传入参数值
	   $table=$attr['table'];
	   $page=$attr['page'];
	   $sql=$attr['sql'];
	   $webid=C('webid');
	   $sql='webid='.$webid.$sql;
	   if(!$page){$page=10;}
	   //import('ORG.Util.Page');// 导入分页类
       $str='<?php ';
	   //$str .= '$count=M('.$table.')->where("'.$sql.'")->count();';
	   //$str .= '$Page       = new Page($count,'.$page.');';
	   //$str .= '$show       = $Page->show();';
	   //$str .= '$list =M('.$table.')->where("'.$sql.'")->order("'.$order.'")->limit($Page->firstRow,$Page->listRows)->select();';
	   $str .= '$mylist =M('.$table.')->where("'.$sql.'")->order("'.$order.'")->limit('.$limit.')->select();';
       $str .= 'foreach($mylist as $key=>$val):';
       $str .= '';	
	   $str .= '?>';
	   $str .= ($content);
       $str .='<?php endforeach ;?>';
	   //$str .='<?php echo $show ;';
	 
       return $str;
	   
       }


}
?>