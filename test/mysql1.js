var mysql = require('mysql');

//数据库配置
var db_config = {
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tufen_crawler',
}

var db = mysql.createConnection(db_config);
db.connect();

//显示所有数据表
db.query('show tables',function(err,tables){
    if (err) {
        return console.error(err.stack);
    } else {
        console.log(tables);
    }
    //关闭连接
    db.end();

});

