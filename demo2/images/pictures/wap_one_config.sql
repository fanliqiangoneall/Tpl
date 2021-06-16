-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-07-09 10:50:17
-- 服务器版本： 5.6.20-log
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `yun`
--

-- --------------------------------------------------------

--
-- 表的结构 `wap_one_config`
--

CREATE TABLE IF NOT EXISTS `wap_one_config` (
`id` int(11) NOT NULL,
  `modulesid` int(11) NOT NULL DEFAULT '0',
  `configid` int(11) NOT NULL COMMENT 'wap_modules_config中的id',
  `name` varchar(255) NOT NULL COMMENT '模块名字',
  `setconfig` text NOT NULL COMMENT '配置',
  `fid` int(11) NOT NULL COMMENT '模块图片预览'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='单个模块配置' AUTO_INCREMENT=74 ;

--
-- 转存表中的数据 `wap_one_config`
--

INSERT INTO `wap_one_config` (`id`, `modulesid`, `configid`, `name`, `setconfig`, `fid`) VALUES
(1, 1, 1, '公司名称', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u6807\\u9898"},{"name":"max","val":"10"}]}]', 473667),
(2, 2, 1, 'logo', '[{"type":"input","kongjian":[{"name":"mark","val":"logo"},{"name":"max","val":"10"}]}]', 473668),
(64, 1, 2, '网页头部', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00\\u8bbe\\u7f6e"},{"name":"max","val":"5"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c\\u8bbe\\u7f6e"},{"name":"max","val":"6"}]}]', 473665),
(65, 3, 2, 'banner', '[{"type":"img","kongjian":[{"name":"mark","val":"banner1\\u4f4d\\u7f6e\\u4e00\\uff08banner\\u56fe\\uff09"},{"name":"h","val":"613"},{"name":"w","val":"375"}]},{"type":"img","kongjian":[{"name":"mark","val":"banner2\\u4f4d\\u7f6e\\u4e00\\uff08banner\\u56fe\\uff09"},{"name":"h","val":"613"},{"name":"w","val":"375"}]},{"type":"img","kongjian":[{"name":"mark","val":"banner3\\u4f4d\\u7f6e\\u4e00\\uff08banner\\u56fe\\uff09"},{"name":"h","val":"613"},{"name":"w","val":"375"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner1\\u4f4d\\u7f6e\\u4e8c\\uff08banner\\u6807\\u9898\\uff09"},{"name":"max","val":"14"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner2\\u4f4d\\u7f6e\\u4e8c\\uff08banner\\u6807\\u9898\\uff09"},{"name":"max","val":"14"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner3\\u4f4d\\u7f6e\\u4e8c\\uff08banner\\u6807\\u9898\\uff09"},{"name":"max","val":"14"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"banner1\\u4f4d\\u7f6e\\u4e09\\uff08banner\\u5185\\u5bb9\\uff09"},{"name":"max","val":"70"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"banner2\\u4f4d\\u7f6e\\u4e09\\uff08banner\\u5185\\u5bb9\\uff09"},{"name":"max","val":"70"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"banner3\\u4f4d\\u7f6e\\u4e09\\uff08banner\\u5185\\u5bb9\\uff09"},{"name":"max","val":"70"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner1\\u4f4d\\u7f6eURL\\uff08banner\\u6309\\u94ae\\u8df3\\u8f6c\\u5185\\u5bb9\\uff09"},{"name":"max","val":"255"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner2\\u4f4d\\u7f6eURL\\uff08banner\\u6309\\u94ae\\u8df3\\u8f6c\\u5185\\u5bb9\\uff09"},{"name":"max","val":"255"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner3\\u4f4d\\u7f6eURL\\uff08banner\\u6309\\u94ae\\u8df3\\u8f6c\\u5185\\u5bb9\\uff09"},{"name":"max","val":"255"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner1\\u6309\\u94ae\\u6587\\u5b57\\uff08banner\\u6309\\u94ae\\u5185\\u5bb9\\uff09"},{"name":"max","val":"14"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner2\\u6309\\u94ae\\u6587\\u5b57\\uff08banner\\u6309\\u94ae\\u5185\\u5bb9\\uff09"},{"name":"max","val":"14"}]},{"type":"input","kongjian":[{"name":"mark","val":"banner3\\u6309\\u94ae\\u6587\\u5b57\\uff08banner\\u6309\\u94ae\\u5185\\u5bb9\\uff09"},{"name":"max","val":"14"}]}]', 473689),
(66, 5, 2, '我们的服务', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"39"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c"},{"name":"max","val":"126"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e09"},{"name":"max","val":"8"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u6309\\u94ae\\u94fe\\u63a5"},{"name":"max","val":"255"}]}]', 475990),
(67, 6, 2, '我们的优势', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"18"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c"},{"name":"max","val":"48"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e09"},{"name":"max","val":"144"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u56db"},{"name":"max","val":"8"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u6309\\u94aeURL"},{"name":"max","val":"255"}]}]', 476004),
(68, 8, 2, '新闻', '[{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"126"}]}]', 476082),
(69, 9, 2, '产品', '[{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"90"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c"},{"name":"max","val":"18"}]}]', 476076),
(70, 11, 2, '合作客户', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00\\u9ed1\\u8272\\u90e8\\u5206"},{"name":"max","val":"6"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c\\u7ea2\\u8272\\u90e8\\u5206"},{"name":"max","val":"6"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c"},{"name":"max","val":"84"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u4e00\\u4f4d\\u7f6e3"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e3"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e4"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e5"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e6"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e6"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e7"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e7"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e9"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e10"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e11"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e12"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e13"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e14"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e15"},{"name":"h","val":"96"},{"name":"w","val":"96"}]},{"type":"img","kongjian":[{"name":"mark","val":"\\u5408\\u4f5c\\u5ba2\\u6237\\u56fe\\u7247\\u4f4d\\u7f6e16"},{"name":"h","val":"96"},{"name":"w","val":"96"}]}]', 476040),
(71, 13, 2, '网站底部', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"6"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c"},{"name":"max","val":"6"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e09"},{"name":"max","val":"126"}]}]', 476085),
(72, 14, 2, '其他模块一', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"18"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u8bbe\\u7f6e\\u4e8c"},{"name":"max","val":"54"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e09"},{"name":"max","val":"108"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u56db"},{"name":"max","val":"18"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u56db\\u94fe\\u63a5"},{"name":"max","val":"255"}]}]', 476021),
(73, 15, 2, '其他模块二', '[{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e00"},{"name":"max","val":"18"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e8c"},{"name":"max","val":"48"}]},{"type":"longinput","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u4e09"},{"name":"max","val":"102"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u56db"},{"name":"max","val":"12"}]},{"type":"input","kongjian":[{"name":"mark","val":"\\u4f4d\\u7f6e\\u56db\\u94fe\\u63a5"},{"name":"max","val":"255"}]}]', 476063);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wap_one_config`
--
ALTER TABLE `wap_one_config`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wap_one_config`
--
ALTER TABLE `wap_one_config`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=74;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
