var mysql = require('mysql');

//数据库配置
var db_config = {
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tufen_crawler',
	connectionLimit:10
}
//创建连接池
var pool = mysql.createPool(db_config);

//创建数据库连接
pool.getConnection(function(err,connection){
    if(err) throw err;
    //获得新连接后，执行connect()
    //handleDisconnect(connection);
    var sql='show tables';
    query(sql, connection);

})


function query(sql,connection){
	connection.query(sql,function(err,tables){
		if(err) return console.log(err);
		console.log(tables);
	})

	connection.release();
};



