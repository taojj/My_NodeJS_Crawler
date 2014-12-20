var mongoose = require('mongoose'),
    CrawlerSchema = require('../schemas/crawler'),
    Crawler = mongoose.model('Crawler',CrawlerSchema)

module.exports = Crawler