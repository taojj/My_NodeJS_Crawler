var mongoose = require('mongoose'),
    ReprintSchema = require('../schemas/reprint'),
    Reprint = mongoose.model('Reprint',ReprintSchema)

module.exports = Reprint