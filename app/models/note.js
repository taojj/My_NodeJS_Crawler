var mongoose = require('mongoose'),
    NoteSchema = require('../schemas/note'),
    Note = mongoose.model('Note',NoteSchema)

module.exports = Note