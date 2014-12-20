var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var UserSchema = new mongoose.Schema({
	username:String
	,password:String
	,email:String
    ,sex:String
    ,face:String
    ,intro:String
    ,labels:Array
    ,regTime:Date
    ,activeFlag:Boolean
    ,follow:String
    ,fans:String
    ,score:Number
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

UserSchema.pre('save',function(next){
    if (this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

UserSchema.statics = {
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

module.exports = UserSchema