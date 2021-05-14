'use strict'
var mongoose = require('mongoose');

var schema = mongoose.Schema;
var movieSchema = schema({
    code: String,
    name: String,
    description: String,
    image: String,
    duration: String,
    type: String
})

module.exports = mongoose.model('movies', movieSchema);