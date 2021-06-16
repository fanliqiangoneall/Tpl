<?php
// +----------------------------------------------------------------------
// | ThinkPHP
// +----------------------------------------------------------------------
// | Copyright (c) 2007 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id$ 
//公共函数
function toDate($time, $format = 'Y-m-d H:i:s') {
	if (empty ( $time )) {
		return '';
	}
	$format = str_replace ( '#', ':', $format );
	return date ($format, $time );
}

// 缓存文件
function cmssavecache($name = '', $fields = '') {
	$Model = D ( $name );
	$list = $Model->select ();
	$data = array ();
	foreach ( $list as $key => $val ) {
		if (empty ( $fields )) {
			$data [$val [$Model->getPk ()]] = $val;
		} else {
			// 获取需要的字段
			if (is_string ( $fields )) {
				$fields = explode ( ',', $fields );
			}
			if (count ( $fields ) == 1) {
				$data [$val [$Model->getPk ()]] = $val [$fields [0]];
			} else {
				foreach ( $fields as $field ) {
					$data [$val [$Model->getPk ()]] [] = $val [$field];
				}
			}
		}
	}
	$savefile = cmsgetcache ( $name );
	// 所有参数统一为大写
	$content = "<?php\nreturn " . var_export ( array_change_key_case ( $data, CASE_UPPER ), true ) . ";\n?>";
	file_put_contents ( $savefile, $content );
}

function cmsgetcache($name = '') {
	return DATA_PATH . '~' . strtolower ( $name ) . '.php';
}
function getStatus($status, $imageShow = true) {
	switch ($status) {
		case 0 :
			$showText = '禁用';
			$showImg = '<IMG SRC="' . __PUBLIC__ . '/Images/locked.gif" WIDTH="20" HEIGHT="20" BORDER="0" ALT="禁用">';
			break;
		case 2 :
			$showText = '待审';
			$showImg = '<IMG SRC="' . __PUBLIC__ . '/Images/prected.gif" WIDTH="20" HEIGHT="20" BORDER="0" ALT="待审">';
			break;
		case - 1 :
			$showText = '删除';
			$showImg = '<IMG SRC="' . __PUBLIC__ . '/Images/del.gif" WIDTH="20" HEIGHT="20" BORDER="0" ALT="删除">';
			break;
		case 1 :
		default :
			$showText = '正常';
			$showImg = '<IMG SRC="' . __PUBLIC__ . '/Images/ok.gif" WIDTH="20" HEIGHT="20" BORDER="0" ALT="正常">';

	}
	return ($imageShow === true) ?  $showImg  : $showText;

}
function getDefaultStyle($style) {
	if (empty ( $style )) {
		return 'blue';
	} else {
		return $style;
	}

}
function IP($ip = '', $file = 'UTFWry.dat') {
	$_ip = array ();
	if (isset ( $_ip [$ip] )) {
		return $_ip [$ip];
	} else {
		import ( "ORG.Net.IpLocation" );
		$iplocation = new IpLocation ( $file );
		$location = $iplocation->getlocation ( $ip );
		$_ip [$ip] = $location ['country'] . $location ['area'];
	}
	return $_ip [$ip];
}

function getNodeName($id) {
	if (Session::is_set ( 'nodeNameList' )) {
		$name = Session::get ( 'nodeNameList' );
		return $name [$id];
	}
	$Group = D ( "Node" );
	$list = $Group->getField ( 'id,name' );
	$name = $list [$id];
	Session::set ( 'nodeNameList', $list );
	return $name;
}

function get_pawn($pawn) {
	if ($pawn == 0)
		return "<span style='color:green'>没有</span>";
	else
		return "<span style='color:red'>有</span>";
}
function get_patent($patent) {
	if ($patent == 0)
		return "<span style='color:green'>没有</span>";
	else
		return "<span style='color:red'>有</span>";
}


function getNodeGroupName($id) {
	if (empty ( $id )) {
		return '未分组';
	}
	if (isset ( $_SESSION ['nodeGroupList'] )) {
		return $_SESSION ['nodeGroupList'] [$id];
	}
	$Group = D ( "Group" );
	$list = $Group->getField ( 'id,title' );
	$_SESSION ['nodeGroupList'] = $list;
	$name = $list [$id];
	return $name;
}

function getCardStatus($status) {
	switch ($status) {
		case 0 :
			$show = '未启用';
			break;
		case 1 :
			$show = '已启用';
			break;
		case 2 :
			$show = '使用中';
			break;
		case 3 :
			$show = '已禁用';
			break;
		case 4 :
			$show = '已作废';
			break;
	}
	return $show;

}


/**
 +----------------------------------------------------------
 * 获取登录验证码 默认为4位数字
 +----------------------------------------------------------
 * @param string $fmode 文件名
 +----------------------------------------------------------
 * @return string
 +----------------------------------------------------------
 */
function build_verify($length = 4, $mode = 1) {
	return rand_string ( $length, $mode );
}


function getGroupName($id) {
	if ($id == 0) {
		return '无上级组';
	}
	if ($list = F ( 'groupName' )) {
		return $list [$id];
	}
	$dao = D ( "Role" );
	$list = $dao->select ( array ('field' => 'id,name' ) );
	foreach ( $list as $vo ) {
		$nameList [$vo ['id']] = $vo ['name'];
	}
	$name = $nameList [$id];
	F ( 'groupName', $nameList );
	return $name;
}
function sort_by($array, $keyname = null, $sortby = 'asc') {
	$myarray = $inarray = array ();
	# First store the keyvalues in a seperate array
	foreach ( $array as $i => $befree ) {
		$myarray [$i] = $array [$i] [$keyname];
	}
	# Sort the new array by
	switch ($sortby) {
		case 'asc' :
			# Sort an array and maintain index association...
			asort ( $myarray );
			break;
		case 'desc' :
		case 'arsort' :
			# Sort an array in reverse order and maintain index association
			arsort ( $myarray );
			break;
		case 'natcasesor' :
			# Sort an array using a case insensitive "natural order" algorithm
			natcasesort ( $myarray );
			break;
	}
	# Rebuild the old array
	foreach ( $myarray as $key => $befree ) {
		$inarray [] = $array [$key];
	}
	return $inarray;
}

/**
	 +----------------------------------------------------------
 * 产生随机字串，可用来自动生成密码
 * 默认长度6位 字母和数字混合 支持中文
	 +----------------------------------------------------------
 * @param string $len 长度
 * @param string $type 字串类型
 * 0 字母 1 数字 其它 混合
 * @param string $addChars 额外字符
	 +----------------------------------------------------------
 * @return string
	 +----------------------------------------------------------
 */
function rand_string($len = 6, $type = '', $addChars = '') {
	$str = '';
	switch ($type) {
		case 0 :
			$chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' . $addChars;
			break;
		case 1 :
			$chars = str_repeat ( '0123456789', 3 );
			break;
		case 2 :
			$chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' . $addChars;
			break;
		case 3 :
			$chars = 'abcdefghijklmnopqrstuvwxyz' . $addChars;
			break;
		default :
			// 默认去掉了容易混淆的字符oOLl和数字01，要添加请使用addChars参数
			$chars = 'ABCDEFGHIJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789' . $addChars;
			break;
	}
	if ($len > 10) { //位数过长重复字符串一定次数
		$chars = $type == 1 ? str_repeat ( $chars, $len ) : str_repeat ( $chars, 5 );
	}
	if ($type != 4) {
		$chars = str_shuffle ( $chars );
		$str = substr ( $chars, 0, $len );
	} else {
		// 中文随机字
		for($i = 0; $i < $len; $i ++) {
			$str .= msubstr ( $chars, floor ( mt_rand ( 0, mb_strlen ( $chars, 'utf-8' ) - 1 ) ), 1 );
		}
	}
	return $str;
}
function pwdHash($password, $type = 'md5') {
	return hash ( $type, $password );
}

/* zhanghuihua */
function percent_format($number, $decimals=0) {
	return number_format($number*100, $decimals).'%';
}
/**
 * 动态获取数据库信息
 * @param $tname 表名
 * @param $where 搜索条件
 * @param $order 排序条件 如："id desc";
 * @param $count 取前几条数据 
 */
function findList($tname,$where="", $order, $count){
	$m = M($tname);
	if(!empty($where)){
		$m->where($where);
	}
	if(!empty($order)){
		$m->order($order);
	}
	if($count>0){
		$m->limit($count);
	}
	return $m->select();
}
function findById($name,$id){
	$m = M($name);
	return $m->find($id);
}
function attrById($name, $attr, $id){
	$m = M($name);
	$a = $m->where('id='.$id)->getField($attr);
	return $a;
}
function moduleAccess($moduleName) {
    if ($_SESSION ['administrator']) return true;
    $Model = new Model();
    $list = $Model->query("select m.id,m.name,m.group_id,m.title from node a, node m where a.id = m.pid and a.status=1 and m.status=1 and a.name='".APP_NAME."' and m.name='".$moduleName."'");

    $accessList = $_SESSION ['_ACCESS_LIST'];
    foreach ( $list as $key => $module ) {
        if (isset ( $accessList [strtoupper ( APP_NAME )] [strtoupper ( $module ['name'] )] )) {
            return true;
        }
    }

    return false;
}

function subtext($text, $length)
 {
    if(mb_strlen($text, 'utf8') > $length) 
    return mb_substr($text, 0, $length, 'utf8').'...';
    return $text;
 }
 
	 //系统日志写入
function addlog($type,$title='',$action=MODULE_NAME){
	//$uid=session('name');
	$uid=1;
	$muser=M('user');
	$map['id']=$uid;
	$rs=$muser->field('nickname')->where($map)->find();
	$Mtype=new Model();
	$typers=$Mtype->table('role,role_user')->where('role_user.user_id='.$uid.' and role_user.role_id=role.id')->field('role.name')->find();
	$mnode=M('node');
	$mapnode['name']=$action;
	$rsnode=$mnode->where($mapnode)->field('title')->find();
	$data['uid']=$uid;
	$data['type']=$typers['name'];
	$data['message']='('.$rs['nickname'].')'.$typers['name']."操作".$rsnode['title'].','.$type.$title;
	$data['hostname']=get_client_ip();
	$data['timestamp']=time();
	$data['language']="zh-hans";
	$watchlog=M('watchdog_ee');
	$watchlog->add($data);
	
}

//获取图片路径 参数 fid
function getimgurl($id){
	$yuming=C("yuming");
	$model=M("file_managed");
		$get_img=$model->where("fid=".$id)->getField("uri");
	if($get_img){	
		return C("imgpath")."/uploadfiles/".getserverip()."/".$get_img;
	}else{
		return C("noimgpath");
	}
}

//获取图片路径 参数 fid  7月20 修改让手机站也读取水印，大致思路 手机有水印就读pc
function getpcimgurl($id,$type=''){
	$yuming=C("yuming");
	$model=M("file_managed");
	$get_img=$model->where("fid=".$id)->getField("uri");
	if($get_img){	
		$webid=C("webid");
		$fid=M('system_set')->field('shuiyin,shuiyin_img')->WHERE(' webid='.$webid)->find();
		if($fid['shuiyin']!=0){
			if(!$type){
				$get_img=str_replace("/source/","/pc_water/",$get_img);
			}else{
				$get_img=str_replace("/source/","/source_water/",$get_img);	
			}
		}else{
			if(isMobile()){
				$get_img=str_replace("/source/","/wap/",$get_img);
			}else{
				$get_img=str_replace("/source/","/pc/",$get_img);
			}		
		}	
		return C("imgpath")."/uploadfiles/".getserverip()."/".$get_img;
	}
	else{
		return C("noimgpath");
	}
}


//获取图片路径 参数 fid 7月20 修改让手机站也读取水印，大致思路 手机有水
function getmainimgurl($id){
	$yuming=C("yuming");
	$model=M("file_managed");
	$get_img=$model->where("fid=".$id)->getField("uri");
	if($get_img){
	
		
		$webid=C("webid");
		$fid=M('system_set')->field('shuiyin,shuiyin_img')->WHERE(' webid='.$webid)->find();
		if($fid['shuiyin']!=0){
			$get_img=str_replace("/source/","/source_water/",$get_img);
		}else{
			if(isMobile()){
				//$get_img=str_replace("/source/","/wap/",$get_img);
			}
			//$get_img=str_replace("/source/","/pc/",$get_img);
		}
			
		return C("imgpath")."/uploadfiles/".getserverip()."/".$get_img;
	}
	else{
		return C("noimgpath");
	}
}


//获取图片路径 参数 fid   7月20 修改让手机站也读取水印，大致思路 
function getfimgurl($id){
	$yuming=C("yuming");
	$model=M("file_managed");
	$get_img=$model->where("fid=".$id)->getField("uri");
	if($get_img){
		
	$webid=C("webid");
	$fid=M('system_set')->field('shuiyin,shuiyin_img')->WHERE(' webid='.$webid)->find();
		if($fid['shuiyin']!=0){
			$get_img=str_replace("/source/","/source_water/",$get_img);	
		}else{
			if(isMobile()){
				//$get_img=str_replace("/source/","/wap/",$get_img);
			}
				
		}		
		return C("imgpath")."/uploadfiles/".getserverip()."/".$get_img;
	}
	else{
		return C("noimgpath");
	}
}


//获取服务器ip 参数webid
function getserverip(){
$wid=C("webid");
$ip=(M('websites')->table('shared_server,websites')->field('shared_server.ip')->where('websites.sid=shared_server.sid and websites.id='.$wid)->find());
return $ip['ip'];
}

function getheaderseo(){
$rs=M('system_set')->where('webid='.C("webid"))->field('title,keywords,description')->find();
$seo['page_title']=$rs['title'];
$seo['page_keywords']=$rs['keywords'];
$seo['page_descriptions']=$rs['description'];
return $seo;
}

function productseo(){
$headerseo=getheaderseo();
$seo=M('system_set')->where('webid='.C("webid"))->field('protitle,prokeywords,prodescription')->find();	
//echo M('products_category')->getlastsql();
if($seo){
$seo['page_title']=$seo['protitle'];
$seo['page_keywords']=$seo['prokeywords'];
$seo['page_descriptions']=$seo['prodescription'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}

function procateseo($pcid){
	
	$headerseo=getheaderseo();
	$seo=M('products_category')->where('webid='.C("webid").' and pcid='.$pcid)->field('page_title,page_keywords,page_content')->find();	
	$seocate=M('seo_cate_set')->where('webid='.C("webid"))->field('procate_title,procate_keywords,procate_description')->find();	
	$procate=M('products_category')->where('webid='.C("webid").' and pcid='.$pcid)->field('class_name')->find();	
	if($seocate){
		$seocate['page_title']=str_replace("{class_name}",$procate['class_name'],$seocate['procate_title']); 
		$seocate['page_keywords']=str_replace("{class_name}",$procate['class_name'],$seocate['procate_keywords']);
		$seocate['page_descriptions']=str_replace("{class_name}",$procate['class_name'],$seocate['procate_description']);
	}
	if($seo){
		$seo['page_descriptions']=$seo['page_content'];
		foreach($seo as $key=>$val){
			if(!$val||$val=""){
				if($seocate[$key]){
					$seo[$key]=$seocate[$key];
				}else{
					$seo[$key]=$headerseo[$key];
				}
				
			}
		}
	}else if($seocate){
		foreach($seocate as $key=>$val){
			if(!$val||$val=""){
				$seo[$key]=$headerseo[$key];
			}
		}
	}else{
		$seo=$headerseo;
	}
return $seo;
}

function prodetailseo($pid){
$headerseo=getheaderseo();	
$seo=M('product')->where('webid='.C("webid").' and pid='.$pid)->field('page_title,page_keywords,page_content')->find();	
$seocate=M('seo_cate_set')->where('webid='.C("webid"))->field('pro_title,pro_keywords,pro_description')->find();
$product=M('product')->where('product.webid='.C("webid").' and product.pid='.$pid)->join('products_category on product.class_id=products_category.pcid' )->field('products_category.class_name as class_name,product.pro_name as pro_name,product.pro_model as pro_model')->find();	

if($seocate){
	$seocate['page_title']=str_replace("{class_name}",$product['class_name'],$seocate['pro_title']); 
	$seocate['page_keywords']=str_replace("{class_name}",$product['class_name'],$seocate['pro_keywords']);
	$seocate['page_descriptions']=str_replace("{class_name}",$product['class_name'],$seocate['pro_description']);
	
	$seocate['page_title']=str_replace("{pro_name}",$product['pro_name'],$seocate['page_title']); 
	$seocate['page_keywords']=str_replace("{pro_name}",$product['pro_name'],$seocate['page_keywords']);
	$seocate['page_descriptions']=str_replace("{pro_name}",$product['pro_name'],$seocate['page_descriptions']);
	
	$seocate['page_title']=str_replace("{pro_model}",$product['pro_model'],$seocate['page_title']); 
	$seocate['page_keywords']=str_replace("{pro_model}",$product['pro_model'],$seocate['page_keywords']);
	$seocate['page_descriptions']=str_replace("{pro_model}",$product['pro_model'],$seocate['page_descriptions']);
	
}
if($seo){
	$seo['page_descriptions']=$seo['page_content'];
	foreach($seo as $key=>$val){
		if(!$val||$val=""){
			if($seocate[$key]){
					$seo[$key]=$seocate[$key];
				}else{
					$seo[$key]=$headerseo[$key];
				}
		}
	}
}else if($seocate){
	foreach($seocate as $key=>$val){
		if(!$val||$val=""){
			$seo[$key]=$headerseo[$key];
		}
	}
}else{
	$seo=$headerseo;
}
return $seo;
}

function newseo(){
$headerseo=getheaderseo();	
$seo=M('system_set')->where('webid='.C("webid"))->field('newtitle,newkeywords,newdescription')->find();	
if($seo){
$seo['page_title']=$seo['newtitle'];
$seo['page_keywords']=$seo['newkeywords'];
$seo['page_descriptions']=$seo['newdescription'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}

function newcateseo($classid){
$headerseo=getheaderseo();	
$seo=M('news_class')->where('webid='.C("webid").' and classid='.$classid)->field('page_title,page_keywords,page_content')->find();	
if($seo){
$seo['page_descriptions']=$seo['page_content'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}

function casecateseo($classid){
$headerseo=getheaderseo();	
$seo=M('cates_class')->where('webid='.C("webid").' and classid='.$classid)->field('page_title,page_keywords,page_content')->find();	
if($seo){
$seo['page_descriptions']=$seo['page_content'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}


function newdetailseo($nid){
$headerseo=getheaderseo();	
$seo=M('news')->where('webid='.C("webid").' and nid='.$nid)->field('page_title,page_keywords,page_content')->find();	
$seocate=M('seo_cate_set')->where('webid='.C("webid"))->field('new_title,new_keywords,new_description')->find();	
$new=M('news')->where('webid='.C("webid").' and nid='.$nid)->field('title')->find();
if($seocate){
	$seocate['page_title']=str_replace("{title}",$new['title'],$seocate['new_title']); 
	$seocate['page_keywords']=str_replace("{title}",$new['title'],$seocate['new_keywords']);
	$seocate['page_descriptions']=str_replace("{title}",$new['title'],$seocate['new_description']);
}

if($seo){
	$seo['page_descriptions']=$seo['page_content'];
	foreach($seo as $key=>$val){
		if(!$val||$val=""){
			if($seocate[$key]){
					$seo[$key]=$seocate[$key];
				}else{
					$seo[$key]=$headerseo[$key];
				}
			
		}
	}
}else if($seocate){
	foreach($seocate as $key=>$val){
		if(!$val||$val=""){
			$seo[$key]=$headerseo[$key];
		}
	}
}else{
	$seo=$headerseo;
}
return $seo;
}

function casedetailseo($nid){
$headerseo=getheaderseo();	
$seo=M('cates')->where('webid='.C("webid").' and nid='.$nid)->field('page_title,page_keywords,page_content')->find();	
if($seo){
$seo['page_descriptions']=$seo['page_content'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}

function othercateseo($classid){
$headerseo=getheaderseo();	
$seo=M('intro_class')->where('webid='.C("webid").' and classid='.$classid)->field('page_title,page_keywords,page_content')->find();	
$seocate=M('seo_cate_set')->where('webid='.C("webid"))->field('other_title,other_keywords,other_description')->find();	
$other=M('intro_class')->where('webid='.C("webid").' and classid='.$classid)->field('class_name')->find();	
if($seocate){
	$seocate['page_title']=str_replace("{class_name}",$other['class_name'],$seocate['other_title']); 
	$seocate['page_keywords']=str_replace("{class_name}",$other['class_name'],$seocate['other_keywords']);
	$seocate['page_descriptions']=str_replace("{class_name}",$other['class_name'],$seocate['other_description']);
}

if($seo){
	$seo['page_descriptions']=$seo['page_content'];
	foreach($seo as $key=>$val){
		if(!$val||$val=""){
			if($seocate[$key]){
					$seo[$key]=$seocate[$key];
				}else{
					$seo[$key]=$headerseo[$key];
				}
			
		}
	}
}else if($seocate){
	foreach($seocate as $key=>$val){
		if(!$val||$val=""){
			$seo[$key]=$headerseo[$key];
		}
	}
}else{
	$seo=$headerseo;
}
return $seo;
}

function jobseo($jobid){
$headerseo=getheaderseo();	
$seo=M('jobs')->where('webid='.C("webid").' and jobid='.$jobid)->field('page_title,page_keywords,page_content')->find();	
if($seo){
$seo['page_descriptions']=$seo['page_content'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}

function downloaddetailseo($classid){
$headerseo=getheaderseo();	
$seo=M('download')->where('webid='.C("webid").' and id='.$classid)->field('page_title,page_keywords,page_keywords')->find();	
if($seo){
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}

function downloadcateseo($id){
$headerseo=getheaderseo();	
$seo=M('download_class')->where('webid='.C("webid").' and classid='.$id)->field('page_title,page_keywords,page_content')->find();	
if($seo){
$seo['page_descriptions']=$seo['page_content'];
foreach($seo as $key=>$val){
	if(!$val||$val=""){
		$seo[$key]=$headerseo[$key];
	}
}
}else{
	$seo=$headerseo;
}
return $seo;
}
//产品自定义名称传入产品id
function getproname($pid){
	$rs=M('product')->where('pid='.$pid)->field('staticname')->find();	
	if($rs['staticname']){
		return $rs['staticname'].'.html';
	}else{
		return $pid.'.html';
		}
}

//产品分类名称传入产品id
function getprocatename($pcid){
	$rs=M('products_category')->where('pcid='.$pcid)->field('cateurl')->find();	
	if($rs['cateurl']){
		return $rs['cateurl'].'.html';
	}else{
		return $pcid.'.html';
		}
}


//评论数
function commentlistcount($id){
  $model=M("product_comment");
  $count=$model->where("prod_id=".$id." and status=1 and is_delete=0")->count();
  return $count;
}

//新闻评论数
function newscommentlistcount($id){
  $model=M("news_comment");
  $count=$model->where("nid=".$id." and status=1 and is_delete=0")->count();
  //echo $model->getlastsql();
  //echo $count;
  return $count;
}


//是否显示评论
function comment_show(){
  $model=M("system_set");
  $if_comment=$model->where("webid=".C("webid"))->getField("if_comment");
  return $if_comment;
}

//新闻是否显示评论
function newscomment_show(){
  $model=M("system_set");
  $if_newscomment=$model->where("webid=".C("webid"))->getField("if_newscomment");
  return $if_newscomment;
}

//获取产品关键词
function get_productkeyword($id){
$model=M("product");
$keywords=$model->where("pid=".$id.' and isdeleted=0 ')->getField("labelname");
$keyval=$model->where("pid=".$id.' and isdeleted=0 ')->getField("label");
if(!$keywords){return $name;}
$labelname=explode(",",Ltrim(Rtrim($keywords,","),","));
$label=explode(",",Ltrim(Rtrim($keyval,","),","));
	    foreach($labelname as $k=>$val){
		    $name.="<a href='".U('/tag','','')."/keyword/".$label[$k]."'>".$val."</a>,";
		}
	$name=Rtrim($name,",");
	return $name;
}

//判断是否是移动设备
function isMobile()
{ 
    if(is_weixin()&&gethaswechat()){
	  return "wechat";
	}
	else{
    $agent=strtolower($_SERVER['HTTP_USER_AGENT']);
	$is_ipad = (strpos($agent, 'ipad')) ? true : false;   
    if($is_ipad){
	  return false;
	}
    // 如果有HTTP_X_WAP_PROFILE则一定是移动设备
    if (isset ($_SERVER['HTTP_X_WAP_PROFILE']))
    {
        return true;
    } 
    // 如果via信息含有wap则一定是移动设备,部分服务商会屏蔽该信息
    if (isset ($_SERVER['HTTP_VIA']))
    { 
        // 找不到为flase,否则为true
        return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
    } 
    // 脑残法，判断手机发送的客户端标志,兼容性有待提高
    if (isset ($_SERVER['HTTP_USER_AGENT']))
    {
        $clientkeywords = array ('nokia',
            'sony',
            'ericsson',
            'mot',
            'samsung',
            'htc',
            'sgh',
            'lg',
            'sharp',
            'sie-',
            'philips',
            'panasonic',
            'alcatel',
            'lenovo',
            'iphone',
            'ipod',
            'blackberry',
            'meizu',
            'android',
            'netfront',
            'symbian',
            'ucweb',
            'windowsce',
            'palm',
            'operamini',
            'operamobi',
            'openwave',
            'nexusone',
            'cldc',
            'midp',
            'wap',
            'mobile'
            ); 
        // 从HTTP_USER_AGENT中查找手机浏览器的关键字
        if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT'])))
        {
            return true;
        } 
    } 
    // 协议法，因为有可能不准确，放到最后判断
    if (isset ($_SERVER['HTTP_ACCEPT']))
    { 
        // 如果只支持wml并且不支持html那一定是移动设备
        // 如果支持wml和html但是wml在html之前则是移动设备
        if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html'))))
        {
            return true;
        } 
    } 
    return false;
	}
} 
function getwebid(){
	return C('webid');
}

//获取浮动QQ
function get_QQ(){
$model=M("system_set");
$qq=$model->where("webid=".getwebid())->getField("float_div");
return $qq;
}

//获取统计代码
function get_web_analysis(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("web_analysis");
return $analysis;
}

//获取统计代码
function get_web_analysis_head(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("web_analysis_head");
return $analysis;
}

//获取googel代码
function get_google(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("google");
return $analysis;
}

//获取googel转化代码
function get_inquiry_code(){
$model=M("system_set");
if(strpos($_SERVER['PHP_SELF'],'saveinquiry') !== false){
	$analysis=$model->where("webid=".getwebid())->getField("inquiry_code");
}else{
	$analysis="";
}

return $analysis;
}

//获取联系我们统计代码
function get_contactus_code(){
$model=M("system_set");
if(strpos($_SERVER['PHP_SELF'],'contactus') !== false){
	$analysis=$model->where("webid=".getwebid())->getField("contactus_code");
}else{
	$analysis="";
}


return $analysis;
}

//获取电话统计代码
function get_phone_code(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("phone_code");
return $analysis;
}
//获取邮箱统计代码
function get_email_code(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("email_code");
return $analysis;
}
//获取qq统计代码
function get_qq_code(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("qq_code");
return $analysis;
}
//获取skype统计代码
function get_skype_code(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("skype_code");
return $analysis;
}

//获取备案号
function get_txtBeiAn(){
$model=M("system_set");
$analysis=$model->where("webid=".getwebid())->getField("txtBeiAn");
return $analysis;
}

//产品自定义名称传入产品id
function getWaterUrl($fid){
	return 'fid='.$fid;

}

function isstatic(){
		$rs=M('web_navigation')->field('introclassid,url')->where('webid='.session('webid').' and nav_valid=1 and nav_belong=0  and introtype!=0')->select();
	foreach($rs as $key=>$val){
		$fileid=$classrs['othername'];
		//dump($val['url']);
		$rurl=str_replace($_SESSION['web_url'],$_SESSION['web_url'].'/index.php/Index/',$val['url']);
		//dump($rurl);
		$content=file_get_contents($rurl);
		$urlarr=explode('/',$val['url']);
		$fileid=end($urlarr);
		if($fileid==""){$fileid='index.html';}		
		$shtml = new Shtml($content,1,"../","statichtml/".$url,$fileid); 		
	}
}

function getemail($id="0"){
	$feedbackmail="";
	if($id!=0){
		$rs=M('product')->where('pid='.$id)->field('class_id')->find();
		if($rs){
				$frs=M('products_category')->where('pcid='.$rs['class_id'])->field('feed_email')->find();
				$feedbackmail=$frs['feed_email'];
		}
		if(!$feedbackmail){		
			$email=M('email')->where('webid='.C("webid").' and flag='.'"客户询盘"')->field('email_url')->find();	
			$feedbackmail=$email['email_url'];
		}
	}else{
		$email=M('email')->where('webid='.C("webid").' and flag='.'"产品分类询盘"')->field('email_url')->find();	
		$feedbackmail=$email['email_url'];	
	}
	
		
}

//获取各种	
function chaifen($str,$len,$fg=','){
	if($str){
		$arr=explode($fg,$str);
	}else{
		return ''; }		
return 		$arr[$len];
}


function getparentid($str){
	if(is_numeric($str)){$rs=M('products_category')->field('parent_path')->where('webid='.C("webid").' and  pcid="'.$str.'"')->find();}
	else{
			$rs=M('products_category')->field('parent_path')->where('webid='.C("webid").' and  cateurl="'.$str.'"')->find();
		
	}
if($rs['parent_path']){
	$arr=explode(',',$rs['parent_path']);
	return $arr[1];	
	}else{ return $str;}		
}

function progetparentid($str){
	if(is_numeric($str)){$rs=M('product')->field('parent_path')->where('webid='.C("webid").' and  pid="'.$str.'"')->find();}
	else{
			$rs=M('product')->field('parent_path')->where('webid='.C("webid").' and  staticname="'.$str.'"')->find();
		
	}
if($rs['parent_path']){
	$arr=explode(',',$rs['parent_path']);
	return $arr[1];	
	}else{ return $str;}		
}

function gethaswap(){
	$rs=M('websites')->where('id='.C('webid'))->field('haswap')->find();	
	$url=get_url();//检查是否上线
	if(strstr($url,':8080')){
		return 1;
	}else{
		return $rs['haswap'];
	}
}

function gethaswechat(){
	$rs=M('websites')->where('id='.C('webid'))->field('haswechat')->find();	
	return $rs['haswechat'];
}

function get_url() {
    $sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
    $php_self = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
    $path_info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
    $relate_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : $php_self.(isset($_SERVER['QUERY_STRING']) ? '?'.$_SERVER['QUERY_STRING'] : $path_info);
    return $sys_protocal.(isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '').$relate_url;
}

//字符串截取
function subtxt($txt, $len){
return mb_strlen($txt, 'utf8')>$len ? mb_substr($txt, 0, $len, 'utf8').'...' : $txt;
}


//控制是否上线
/*function upordown(){
	$issx=M('websites')->where('id='.C('webid'))->getfield('issx');	
	return $issx;
}*/

function autocomplete($what){
	$rs=M('product')->where('pro_name like "%'.$what.'%"')->field('pro_name')->limit(5)->select();
	return json_encode($rs);
	
}

//筑友
function get_prodname($pid){
$model=M("product");
$prodname=$model->where("pid=".$pid)->getField("pro_name");

$p_arr=explode(" ",$prodname);
$banner=end($p_arr);
$name=str_replace($banner,"",$prodname);

return  $name."<br>".$banner;

}

//textare 换行
function HtmlEncode($fString)
{
if($fString!="")
{
     $fString = str_replace( '>', '>',$fString);
     $fString = str_replace( '<', '<',$fString);
     $fString = str_replace( chr(32), ' ',$fString);
     $fString = str_replace( chr(13), ' ',$fString);
     $fString = str_replace( chr(10) & chr(10), '<br>',$fString);
     $fString = str_replace( chr(10), '<BR>',$fString);
}
     return $fString;
}


function EncodeHtml($fString)
{
if($fString!="")
{
     $fString = str_replace(">" , ">", $fString);
     $fString = str_replace("<", "<", $fString);
     $fString = str_replace(" ",chr(32),$fString);
     $fString = str_replace("",chr(13),$fString);
     $fString = str_replace("<br>",chr(10) & chr(10),$fString);
     $fString = str_replace("<BR>",chr(10),$fString);
}
     return $fString;
}

//判断分类要不要展开 当前分类 当前循环中的分类id
function inthiscate($classid,$path,$product=''){
	if(!$product){
		if($classid==$path){return true;}
		$parent_path=M('products_category')->where('pcid='.$classid)->getfield('parent_path');
		$str=strstr($parent_path,','.$path.',');
		if($str){
			return true;
		}else{
			return false;
		}
	}else{
		if($path==$product['class_id']){return true;}
		$parent_path=$product['parent_path'];
		$str=strstr($parent_path,','.$path.',');
		if($str){
			return true;
		}else{
			return false;
		}	
	}
}


function is_weixin()
{ 
	if(strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger')) {
              return true;
            } else {
              return false;
            }
}

//不过滤特殊字符
function get_zifu($body){
  
	//return htmlspecialchars_decode($body);
    $body=str_replace("nbsp;","&nbsp;",str_replace("&","",str_replace("mdash;",'—',str_replace("delta;",'δ',str_replace("ge;",'≥',str_replace("quot;",'"',str_replace("ndash;","–",str_replace("ldquo;","“",str_replace("rdquo;","”",str_replace("gt;",">",str_replace("lt;","<",str_replace("sup3;","³",str_replace("ordm;","º",str_replace("mega;","Ω",str_replace("oslash;","ø",str_replace("deg;","°",str_replace("le;","≤",str_replace("mu;","μ",str_replace("amp;","&",str_replace("times;","×",str_replace("plusmn;","±",htmlspecialchars_decode($body))))))))))))))))))))));
	return $body;
}

//特殊的化学名称下标处理
function get_xiabiao($body)
{
	$body=str_replace("CO2","CO<sub>2</sub>",str_replace("H2S","H<sub>2</sub>S",htmlspecialchars_decode($body)));
	return $body;
	}


function aboutusimg(){
$_content=M('intro_class')->WHERE('webid='.C('webid')." and othername='aboutus'")->getfield('readme');
preg_match_all("/src=\"\/?(.*?)\"/", htmlspecialchars_decode($_content), $match);
return ($match[1][0]);
}	
?>