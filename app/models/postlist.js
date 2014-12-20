var mongoose = require('mongoose'),
    PostListSchema = require('../schemas/postlist'),
    PostList = mongoose.model('PostList',PostListSchema)

module.exports = PostList