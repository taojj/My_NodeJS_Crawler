var mongoose = require('mongoose'),
    TopicListSchema = require('../schemas/topiclist'),
    TopicList = mongoose.model('TopicList',TopicListSchema)

module.exports = TopicList