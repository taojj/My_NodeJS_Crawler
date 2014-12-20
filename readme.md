项目名称：tufencrawler（土粉网爬虫程序）

mysql数据库名称：tufen_crawler

CREATE SCHEMA `tufen_crawler`

CREATE TABLE `tufen_crawler`.`topic` (
  `id` INT NOT NULL,
  `author` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `content` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

原始网页地址：
http://bbs.tianya.cn/post-enterprise-8487-1.shtml
http://bbs.tianya.cn/post-enterprise-8487-341.shtml


正则表达式匹配规则：
var url = 'http://bbs.tianya.cn/post-enterprise-8487-1.shtml'
var s = url.match(/post-enterprise-(\d+)-(\d)\.shtml/)
console.log(s[2]);

var content = $('.atl-content bbs-content').html().trim();


主要思路：
提取内容，保存至json数据文件

爬虫程序：
第1步：
request提取网页内容
cheerio提取网页数据
mysql将数据存储到数据库
用async模块来简化异步流程控制

第2步：
request提取网页内容
cheerio提取网页数据
mongoose将数据存储到数据库
用async模块来简化异步流程控制



