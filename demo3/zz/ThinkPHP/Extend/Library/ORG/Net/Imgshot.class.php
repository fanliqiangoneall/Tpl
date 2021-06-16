<?php
class Imgshot {
    private $filename;
    private $ext;
    private $x;
    private $y;
    private $x1;
    private $y1;
    private $width = 400;
    private $height = 400;
    private $jpeg_quality = 90;
    /**
     * 构造器
     */
    public function __construct() {
//      log_message ( 'debug', "Img_shot Class Initialized" );
    }
    /**
     * 初始化截图对象
     *
     * @param
     *          filename 源文件路径全明
     * @param
     *          width 截图的宽
     * @param
     *          height 截图的高
     * @param
     *          x 横坐标1
     * @param
     *          y 纵坐标1
     * @param
     *          x1 横坐标1
     * @param
     *          y1 横坐标2
     *       
     */
    public function initialize($filename, $x, $y, $x1, $y1) {
        if (file_exists ( $filename )) {
            $this->filename = $filename;
			$pathinfo = pathinfo ( $filename );
            $this->ext = $pathinfo ['extension'];
			
        } else {
            $e = new Exception ( 'the file is not exists!'.$filename, 1050 );
            throw $e;
        }
        $this->x = $x;
        $this->y = $y;
        $this->x1 = $x1;
        $this->y1 = $y1;
    }
    /**
     * 生成截图
     * 根据图片的格式，生成不同的截图
     */
    public function generate_shot($path) {
        switch ($this->ext) {
            case 'jpg' :
                return $this->generate_jpg ($path);
                break;
            case 'png' :
                return $this->generate_png ($path);
                break;
            case 'gif' :
                return $this->generate_gif ($path);
                break;
            default :
                return false;
        }
    }
    /**
     * 得到生成的截图的文件名
     */
    private function get_shot_name($path) {
        $pathinfo = pathinfo ( $this->filename );
        $fileinfo = explode ( '.', $pathinfo ['basename'] );
        $filename = $path.$fileinfo [0] . '_smalls.' . $this->ext;
        return $filename;
    }
    /**
     * 生成jpg格式的图片
     */
    private function generate_jpg($path) {
        $shot_name = $this->get_shot_name ($path);
        $img_r = imagecreatefromjpeg ( $this->filename );
        $dst_r = ImageCreateTrueColor ( $this->width, $this->height );
                                                                                                      
        imagecopyresampled ( $dst_r, $img_r, 0, 0, $this->x, $this->y, $this->width, $this->height, $this->x1, $this->y1 );
        imagejpeg ( $dst_r, $shot_name, $this->jpeg_quality );
        return $shot_name;
    }
    /**
     * 生成gif格式的图片
     */
    private function generate_gif($path) {
        $shot_name = $this->get_shot_name ($path);
        $img_r = imagecreatefromgif ( $this->filename );
        $dst_r = ImageCreateTrueColor ( $this->width, $this->height );
                                                                                                      
        imagecopyresampled ( $dst_r, $img_r, 0, 0, $this->x, $this->y, $this->width, $this->height, $this->x1, $this->y1 );
        imagegif ( $dst_r, $shot_name );
        return $shot_name;
    }
    /**
     * 生成png格式的图片
     */
    private function generate_png($path) {
        $shot_name = $this->get_shot_name ($path);
        $img_r = imagecreatefrompng ( $this->filename );
        $dst_r = ImageCreateTrueColor ( $this->width, $this->height );
                                                                                                      
        imagecopyresampled ( $dst_r, $img_r, 0, 0, $this->x, $this->y, $this->width, $this->height, $this->x1, $this->y1 );
        imagepng ( $dst_r, $shot_name );
        return $shot_name;
    }
}
?>