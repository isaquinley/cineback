'use strict'
var mongoose = require('mongoose');

var schema = mongoose.Schema;
var userSchema = schema({
    cedula: Number,
    name: String,
    isAdmin: Boolean,
    email: String,
    password: String
})

module.exports = mongoose.model('users', userSchema);