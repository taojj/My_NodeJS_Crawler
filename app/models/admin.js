var mongoose = require('mongoose'),
    AdminSchema = require('../schemas/admin'),
    Admin = mongoose.model('Admin',AdminSchema)

module.exports = Admin

Admin.prototype.save = function(callback){

}

