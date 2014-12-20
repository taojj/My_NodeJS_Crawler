var mongoose = require('mongoose'),
    PostSchema = require('../schemas/post'),
    Post = mongoose.model('Post',PostSchema)

module.exports = Post

Post.prototype.save = function(){
	var date = new Date()
	//存储各种时间格式，方便以后扩展
	var time = {
		date:date
		,year:date.getFullYear()
		,month:date.getFullYear()+"-"+(date.getMonth()+1)
		,day:date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
		,minute:date.getFullYear()+"-"+(date.getMonth()+1)+"-"+
		date.getDate()+""+date.getHours()+":"+
		(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())

	}
}