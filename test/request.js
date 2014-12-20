var request = require('request');

//通过get请求来读取http://bbs.tianya.cn/post-enterprise-8487-1.shtml 的内容
request({
	url:'http://bbs.tianya.cn/post-enterprise-8487-1.shtml', //请求的Url
	method:'GET',
	headers:{
		'Accept-Language':'zh-CN,zh;q=0.8'
	}
},function(error,response,body){
	if(!error&&response.statusCode == 200){
		//输出网页内容
		console.log(body);
	}
})

