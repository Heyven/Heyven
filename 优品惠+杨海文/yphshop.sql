/*
Navicat MySQL Data Transfer

Source Server         : username
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : yphshop

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-03-26 19:46:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `sid` varchar(50) DEFAULT NULL,
  `fid` varchar(50) DEFAULT NULL,
  `sum` varchar(50) DEFAULT NULL,
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cid`),
  KEY `sid` (`sid`),
  KEY `fid` (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('14', '1', '1', '37');
INSERT INTO `car` VALUES ('14', '18', '4', '41');
INSERT INTO `car` VALUES ('12', '17', '8', '31');
INSERT INTO `car` VALUES ('22', '13', '4', '27');
INSERT INTO `car` VALUES ('26', '14', '12', '28');
INSERT INTO `car` VALUES ('25', '1', '1', '36');
INSERT INTO `car` VALUES ('12', '1', '3', '24');
INSERT INTO `car` VALUES ('14', '17', '1', '33');
INSERT INTO `car` VALUES ('15', '17', '1', '34');
INSERT INTO `car` VALUES ('16', '1', '2', '35');

-- ----------------------------
-- Table structure for homepage
-- ----------------------------
DROP TABLE IF EXISTS `homepage`;
CREATE TABLE `homepage` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `oldprice` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homepage
-- ----------------------------
INSERT INTO `homepage` VALUES ('1', '怀山堂 铁棍怀山粉健康·82条', '药食同源 健康选择', '238', '￥298', '../images/goods2.jpg');
INSERT INTO `homepage` VALUES ('2', '怀山堂 铁棍怀山粉健康·83条', '药食同源 健康选择', '239', '￥299', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('3', '怀山堂 铁棍怀山粉健康·84条', '药食同源 健康选择', '240', '￥300', '../images/goods2_1.jpg');
INSERT INTO `homepage` VALUES ('4', '怀山堂 铁棍怀山粉健康·85条', '药食同源 健康选择', '241', '￥301', '../images/goods2_2.jpg');
INSERT INTO `homepage` VALUES ('5', '怀山堂 铁棍怀山粉健康·86条', '药食同源 健康选择', '242', '￥302', '../images/goods2_3.jpg');
INSERT INTO `homepage` VALUES ('6', '怀山堂 铁棍怀山粉健康·87条', '药食同源 健康选择', '243', '￥303', '../images/goods3_1.jpg');
INSERT INTO `homepage` VALUES ('7', '怀山堂 铁棍怀山粉健康·88条', '药食同源 健康选择', '244', '￥304', '../images/goods3_2.jpg');
INSERT INTO `homepage` VALUES ('8', '怀山堂 铁棍怀山粉健康·89条', '药食同源 健康选择', '245', '￥305', '../images/goods3_3.jpg');
INSERT INTO `homepage` VALUES ('9', '怀山堂 铁棍怀山粉健康·90条', '药食同源 健康选择', '246', '￥306', '../images/goods4_1.jpg');
INSERT INTO `homepage` VALUES ('10', '怀山堂 铁棍怀山粉健康·91条', '药食同源 健康选择', '247', '￥307', '../images/goods4_2.jpg');
INSERT INTO `homepage` VALUES ('11', '怀山堂 铁棍怀山粉健康·92条', '药食同源 健康选择', '248', '￥308', '../images/goods4_3.jpg');
INSERT INTO `homepage` VALUES ('12', '怀山堂 铁棍怀山粉健康·93条', '药食同源 健康选择', '249', '￥309', '../images/goods5_1.jpg');
INSERT INTO `homepage` VALUES ('13', '怀山堂 铁棍怀山粉健康·94条', '药食同源 健康选择', '250', '￥310', '../images/goods5_2.jpg');
INSERT INTO `homepage` VALUES ('14', '怀山堂 铁棍怀山粉健康·95条', '药食同源 健康选择', '251', '￥311', '../images/goods5_3.jpg');
INSERT INTO `homepage` VALUES ('15', '怀山堂 铁棍怀山粉健康·96条', '药食同源 健康选择', '252', '￥312', '../images/goods6_3.jpg');
INSERT INTO `homepage` VALUES ('16', '怀山堂 铁棍怀山粉健康·97条', '药食同源 健康选择', '253', '￥313', '../images/goods6_2.jpg');
INSERT INTO `homepage` VALUES ('17', '怀山堂 铁棍怀山粉健康·98条', '药食同源 健康选择', '254', '￥314', '../images/goods6_1.jpg');
INSERT INTO `homepage` VALUES ('18', '怀山堂 铁棍怀山粉健康·99条', '药食同源 健康选择', '255', '￥315', '../images/goods4_3.jpg');
INSERT INTO `homepage` VALUES ('19', '怀山堂 铁棍怀山粉健康·100条', '药食同源 健康选择', '256', '￥316', '../images/goods4_3.jpg');
INSERT INTO `homepage` VALUES ('20', '怀山堂 铁棍怀山粉健康·101条', '药食同源 健康选择', '257', '￥317', '../images/goods4_3.jpg');
INSERT INTO `homepage` VALUES ('21', '怀山堂 铁棍怀山粉健康·102条', '药食同源 健康选择', '258', '￥318', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('22', '怀山堂 铁棍怀山粉健康·103条', '药食同源 健康选择', '259', '￥319', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('23', '怀山堂 铁棍怀山粉健康·104条', '药食同源 健康选择', '260', '￥320', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('24', '怀山堂 铁棍怀山粉健康·105条', '药食同源 健康选择', '261', '￥321', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('25', '怀山堂 铁棍怀山粉健康·106条', '药食同源 健康选择', '262', '￥322', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('26', '怀山堂 铁棍怀山粉健康·107条', '药食同源 健康选择', '263', '￥323', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('27', '怀山堂 铁棍怀山粉健康·108条', '药食同源 健康选择', '264', '￥324', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('28', '怀山堂 铁棍怀山粉健康·109条', '药食同源 健康选择', '265', '￥325', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('29', '怀山堂 铁棍怀山粉健康·110条', '药食同源 健康选择', '266', '￥326', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('30', '怀山堂 铁棍怀山粉健康·111条', '药食同源 健康选择', '267', '￥327', '../images/goods1.jpg');
INSERT INTO `homepage` VALUES ('31', '怀山堂 铁棍怀山粉健康·112条', '药食同源 健康选择', '268', '￥328', '../images/goods1.jpg');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '298', '50');
INSERT INTO `list` VALUES ('2', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '299', '51');
INSERT INTO `list` VALUES ('3', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '300', '52');
INSERT INTO `list` VALUES ('4', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '301', '53');
INSERT INTO `list` VALUES ('5', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '302', '54');
INSERT INTO `list` VALUES ('6', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '303', '55');
INSERT INTO `list` VALUES ('7', '../images/goods2_1.jpg', '珍得秘鲁双片系列黑巧克力', '304', '56');
INSERT INTO `list` VALUES ('8', '../images/goods2_2.jpg', '珍得秘鲁双片系列黑巧克力', '305', '57');
INSERT INTO `list` VALUES ('9', '../images/goods3_3.jpg', '珍得秘鲁双片系列黑巧克力', '306', '58');
INSERT INTO `list` VALUES ('10', '../images/goods4_1.jpg', '珍得秘鲁双片系列黑巧克力', '307', '59');
INSERT INTO `list` VALUES ('11', '../images/goods4_2.jpg', '珍得秘鲁双片系列黑巧克力', '308', '60');
INSERT INTO `list` VALUES ('12', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '309', '61');
INSERT INTO `list` VALUES ('13', '../images/goods5_1.jpg', '珍得秘鲁双片系列黑巧克力', '310', '62');
INSERT INTO `list` VALUES ('14', '../images/goods5_2.jpg', '珍得秘鲁双片系列黑巧克力', '311', '63');
INSERT INTO `list` VALUES ('15', '../images/goods5_3.jpg', '珍得秘鲁双片系列黑巧克力', '312', '64');
INSERT INTO `list` VALUES ('16', '../images/goods6_1.jpg', '珍得秘鲁双片系列黑巧克力', '313', '65');
INSERT INTO `list` VALUES ('17', '../images/goods6_2.jpg', '珍得秘鲁双片系列黑巧克力', '314', '66');
INSERT INTO `list` VALUES ('18', '../images/goods6_3.jpg', '珍得秘鲁双片系列黑巧克力', '315', '67');
INSERT INTO `list` VALUES ('19', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '316', '68');
INSERT INTO `list` VALUES ('20', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '317', '69');
INSERT INTO `list` VALUES ('21', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '318', '70');
INSERT INTO `list` VALUES ('22', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '319', '71');
INSERT INTO `list` VALUES ('23', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '320', '72');
INSERT INTO `list` VALUES ('24', '../images/tv_cc_2.jpg', '珍得秘鲁双片系列黑巧克力', '321', '73');
INSERT INTO `list` VALUES ('25', '../images/tv_cc_img1.jpg', '珍得秘鲁双片系列黑巧克力', '322', '74');
INSERT INTO `list` VALUES ('26', '../images/tv_day_img1.jpg', '珍得秘鲁双片系列黑巧克力', '323', '75');
INSERT INTO `list` VALUES ('27', '../images/goods4_1.jpg', '珍得秘鲁双片系列黑巧克力', '324', '76');
INSERT INTO `list` VALUES ('28', '../images/goods4_2.jpg', '珍得秘鲁双片系列黑巧克力', '325', '77');
INSERT INTO `list` VALUES ('29', '../images/goods5_3.jpg', '珍得秘鲁双片系列黑巧克力', '326', '78');
INSERT INTO `list` VALUES ('30', '../images/goods5_3.jpg', '珍得秘鲁双片系列黑巧克力', '327', '79');
INSERT INTO `list` VALUES ('31', '../images/goods6_1.jpg', '珍得秘鲁双片系列黑巧克力', '328', '80');
INSERT INTO `list` VALUES ('32', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '329', '81');
INSERT INTO `list` VALUES ('33', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '330', '82');
INSERT INTO `list` VALUES ('34', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '331', '83');
INSERT INTO `list` VALUES ('35', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '332', '84');
INSERT INTO `list` VALUES ('36', '../images/goods2_3.jpg', '珍得秘鲁双片系列黑巧克力', '333', '85');
INSERT INTO `list` VALUES ('37', '../images/goods4_2.jpg', '珍得秘鲁双片系列黑巧克力', '334', '86');
INSERT INTO `list` VALUES ('38', '../images/goods5_1.jpg', '珍得秘鲁双片系列黑巧克力', '335', '87');
INSERT INTO `list` VALUES ('39', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '336', '88');
INSERT INTO `list` VALUES ('40', '../images/goods5_3.jpg', '珍得秘鲁双片系列黑巧克力', '337', '89');
INSERT INTO `list` VALUES ('41', '../images/goods1.jpg', '珍得秘鲁双片系列黑巧克力', '338', '90');
INSERT INTO `list` VALUES ('42', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '339', '91');
INSERT INTO `list` VALUES ('43', '../images/goods3_1.jpg', '珍得秘鲁双片系列黑巧克力', '340', '92');
INSERT INTO `list` VALUES ('44', '../images/goods2.jpg', '珍得秘鲁双片系列黑巧克力', '341', '93');
INSERT INTO `list` VALUES ('45', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '342', '94');
INSERT INTO `list` VALUES ('46', '../images/goods5_3.jpg', '珍得秘鲁双片系列黑巧克力', '343', '95');
INSERT INTO `list` VALUES ('47', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '344', '96');
INSERT INTO `list` VALUES ('48', '../images/goods5_1.jpg', '珍得秘鲁双片系列黑巧克力', '345', '97');
INSERT INTO `list` VALUES ('49', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '346', '98');
INSERT INTO `list` VALUES ('50', '../images/goods5_1.jpg', '珍得秘鲁双片系列黑巧克力', '347', '99');
INSERT INTO `list` VALUES ('51', '../images/goods6_1.jpg', '珍得秘鲁双片系列黑巧克力', '348', '100');
INSERT INTO `list` VALUES ('52', '../images/goods4_2.jpg', '珍得秘鲁双片系列黑巧克力', '349', '101');
INSERT INTO `list` VALUES ('53', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '350', '102');
INSERT INTO `list` VALUES ('54', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '351', '103');
INSERT INTO `list` VALUES ('55', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '352', '104');
INSERT INTO `list` VALUES ('56', '../images/tv_cc_2.jpg', '珍得秘鲁双片系列黑巧克力', '353', '105');
INSERT INTO `list` VALUES ('57', '../images/goodlist.jpg', '珍得秘鲁双片系列黑巧克力', '354', '106');
INSERT INTO `list` VALUES ('58', '../images/goods3_3.jpg', '珍得秘鲁双片系列黑巧克力', '355', '107');
INSERT INTO `list` VALUES ('59', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '356', '108');
INSERT INTO `list` VALUES ('60', '../images/goods2_3.jpg', '珍得秘鲁双片系列黑巧克力', '357', '109');
INSERT INTO `list` VALUES ('61', '../images/goods4_3.jpg', '珍得秘鲁双片系列黑巧克力', '358', '110');
INSERT INTO `list` VALUES ('62', '../images/goods5_3.jpg', '珍得秘鲁双片系列黑巧克力', '359', '111');
INSERT INTO `list` VALUES ('63', '../images/goods2_1.jpg', '珍得秘鲁双片系列黑巧克力', '360', '112');
INSERT INTO `list` VALUES ('64', '../images/goods2_2.jpg', '珍得秘鲁双片系列黑巧克力', '361', '113');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `passwords` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', 'zhangsan', '123456');
INSERT INTO `login` VALUES ('2', 'lisi', '123456');
INSERT INTO `login` VALUES ('3', 'peiqi', '123456');
INSERT INTO `login` VALUES ('4', 'xiuge', '123456');
INSERT INTO `login` VALUES ('5', 'xiujie', '123456');
INSERT INTO `login` VALUES ('6', 'heyven', '123456');
INSERT INTO `login` VALUES ('32', 'qqqqqq', 'a123456');
INSERT INTO `login` VALUES ('31', 'yang', 'a123456');
INSERT INTO `login` VALUES ('30', 'qwqwqw', 'a123456');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `gid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ming` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img1` varchar(255) NOT NULL,
  `num` int(11) NOT NULL,
  `sum` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
