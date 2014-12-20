var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var NoteSchema = new mongoose.Schema({
    tpid:String
	,title:String
	,subtitle:String
	,author:String
	,time:Date
	,tags:Array
	,content:String
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

NoteSchema.pre('save',function(next){
    if (this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

NoteSchema.statics = {
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

module.exports = NoteSchema
