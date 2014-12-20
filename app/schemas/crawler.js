var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var CrawlerSchema = new mongoose.Schema({
	id:Number
    ,author:String
	,time:Date
	,body:String
	,seqNo:Number
	,pageNo:Number
	,authorId:String
	,sort:{
	    isPost:{type:Boolean,default:'false'}
        ,isAsk:{type:Boolean,default:'false'}
        ,isAnswer:{type:Boolean,default:'false'}
        ,isFollow:{type:Boolean,default:'true'}
        ,isNote:{type:Boolean,default:'false'}
        ,isMark:{type:Boolean,default:'false'}
        ,isReprint:{type:Boolean,default:'false'}
        ,isShifted:{type:Boolean,default:'false'}

	}
	,topicId:String
    ,meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }

    }
})

CrawlerSchema.pre('save',function(next){
    if (this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

CrawlerSchema.statics = {
    fetch: function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function(id,cb){
        return this
            .findOne({_id:id})
            .exec(cb)
    }
}

module.exports = CrawlerSchema

