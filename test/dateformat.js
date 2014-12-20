
//http://bbs.tianya.cn/post-enterprise-8487-342.shtml

//dateObj=new Date(year, month, day, hours, minutes, seconds, microseconds) 
//时间数值，可以不用全部写，不写则默认为0
//http://iask.sina.com.cn/b/21673594.html

var dateString = [
	"2005-10-22 19:06:00"
	,"2005-10-23 07:00:54"
	,"2014-09-13 16:48:29"
	,"2014-09-14 16:21:41"
];

/*
*
* params:"2013-06-26 15:30:43"
* return: Date object
*/

function parseToDate(strTime){
	return new Date(strTime.replace("-","/").replace("-","/"));
}


dateString.forEach(function(value,index,ar){
	var date = parseToDate(value)
	console.log(date.valueOf())
	console.log(date.toJSON())
})

function parseToDate2(strTime){

	var arr = strTime.split("");
	if(arr.length>=2){
		var arr1 = arr[0].split("-");
		var arr2 = arr[1].split(":");
	}else{
		return null;
	}

	if(arr1.length>=3&&arr2.length>=3){
		var b = new Date(arr1[0],arr1[1],arr1[2],arr2[0],arr2[1],arr2[2]);
		return b;
	}else{
		return null;
	}


}




// var dateStr = ("2013-06-26 15:30:43").replace("-", "/").replace("-", "/");
// console.log(dateStr);
// var d = new Date(dateStr);
// console.log(d);
//alert(d);


