# Host: localhost  (Version: 5.7.26)
# Date: 2021-07-27 01:53:06
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "bet_info"
#

DROP TABLE IF EXISTS `bet_info`;
CREATE TABLE `bet_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `win` int(11) DEFAULT NULL,
  `max_bet` int(11) DEFAULT NULL,
  `min_bet` int(11) DEFAULT NULL,
  `other` int(11) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

#
# Data for table "bet_info"
#

/*!40000 ALTER TABLE `bet_info` DISABLE KEYS */;
INSERT INTO `bet_info` VALUES (8,-15000,5000,5000,-1000,'555','2021-07-24 02:14:39');
/*!40000 ALTER TABLE `bet_info` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `createtime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'lzc','123456','2021-06-18 00:42:27');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
