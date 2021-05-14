'use strict'
var mongoose = require('mongoose');

var schema = mongoose.Schema;
var salonSchema = schema({
    number: Number,
    name: String,
    description: String,
    movie: String,
    schedule:String
})

module.exports = mongoose.model('salons', salonSchema);