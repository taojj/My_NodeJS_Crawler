CREATE SCHEMA tuger_crawler_wenda;

DROP TABLE IF EXISTS `tuger_admin`;

CREATE TABLE `tuger_crawler_wenda`.`tuger_admin` (
  `id` TINYINT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` CHAR(32) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));


CREATE TABLE `tuger_crawler_wenda`.`tuger_admin` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` CHAR(32) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username` ASC)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;


CREATE TABLE `tuger_crawler_wenda`.`tuger_user` (
  `id` TINYINT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` CHAR(32) NOT NULL,
  `sex` enum('男','女','保密') NOT NULL DEFAULT '保密',
  `email` VARCHAR(50) NOT NULL,
  `face` varchar(50) NOT NULL,
  `intro` varchar(255) NULL,
  `labels` varchar(50) NULL,
  `regTime` int(10) unsigned NOT NULL,
  `activeFlag` tinyint(1) DEFAULT '0',
  `follow` varchar(50) NULL,
  `fans` varchar(50) NULL,
  `score` SMALLINT(5) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username` ASC)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

CREATE TABLE `tuger_crawler_wenda`.`crawler_detail` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(20) NULL,
  `time` INT(10) UNSIGNED NOT NULL,
  `body` TEXT NOT NULL,
  `seqNo` TINYINT(3) NULL,
  `pageNo` TINYINT(3) NULL,
  `authorId` INT NULL,
  `isPost` TINYINT(1) NULL DEFAULT 0,
  `isAsk` TINYINT(1) NULL DEFAULT 0,
  `isAnswer` TINYINT(1) NULL DEFAULT 0,
  `isFollow` TINYINT(1) NULL DEFAULT 1,
  `isNote` TINYINT(1) NULL DEFAULT 0,
  `isMark` TINYINT(1) NULL DEFAULT 0,
  `isReprint` TINYINT(1) NULL DEFAULT 0,
  `isSorted` TINYINT(1) NULL DEFAULT 0,
  `isShifted` TINYINT(1) NULL DEFAULT 0,
  `topicId` INT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `tuger_crawler_wenda`.`topic_detail` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `subtitle` VARCHAR(45) NULL,
  `author` VARCHAR(45) NOT NULL,
  `time` INT(10) NOT NULL,
  `keywords` VARCHAR(45) NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `tuger_crawler_wenda`.`topic_detail`
CHANGE COLUMN `id` `id` VARCHAR(20) NOT NULL ;


CREATE TABLE `tuger_crawler_wenda`.`post_detail` (
  `id` VARCHAR(20) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `subtitle` VARCHAR(45) NULL,
  `author` VARCHAR(45) NOT NULL,
  `time` INT(10) NOT NULL,
  `tags` VARCHAR(45) NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `tuger_crawler_wenda`.`reprint_detail` (
  `id` VARCHAR(20) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `time` INT(10) NOT NULL,
  `tags` VARCHAR(45) NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tuger_crawler_wenda`.`comment_detail` (
  `id` VARCHAR(20) NOT NULL,
  `tpid` VARCHAR(20) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `time` INT(10) NOT NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tuger_crawler_wenda`.`note_detail` (
  `id` VARCHAR(20) NOT NULL,
  `tpid` VARCHAR(20)  NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `time` INT(10) NOT NULL,
  `tags` VARCHAR(45) NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tuger_crawler_wenda`.`category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `prop` TINYINT(1) NOT NULL,
  `count` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tuger_crawler_wenda`.`tag` (
  `id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`, `name`));


CREATE TABLE `tuger_crawler_wenda`.`topic_list` (
  `id` VARCHAR(20) NOT NULL,
  `title` VARCHAR(45) NULL,
  `url` VARCHAR(255) NULL,
  `category_id` INT NOT NULL,
  `created_time` INT NULL,
  PRIMARY KEY (`id`, `category_id`));


CREATE TABLE `tuger_crawler_wenda`.`post_list` (
  `id` VARCHAR(20) NOT NULL,
  `title` VARCHAR(45) NULL,
  `url` VARCHAR(255) NULL,
  `category_id` INT NOT NULL,
  `created_time` INT NULL,
  PRIMARY KEY (`id`, `category_id`));




