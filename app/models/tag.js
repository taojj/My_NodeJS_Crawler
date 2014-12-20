var mongoose = require('mongoose'),
    TagSchema = require('../schemas/tag'),
    Tag = mongoose.model('Tag',TagSchema)

module.exports = Tag