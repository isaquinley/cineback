var express = require('express');
var userController = require('../controllers/userController');

var api = express();

api.get('/user/:email/:password', userController.getUser);

module.exports = api;