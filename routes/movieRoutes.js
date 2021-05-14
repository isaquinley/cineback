var express = require('express');
var movieController = require('../controllers/movieController');

var api = express.Router();

api.get('/movies', movieController.getAllMovies);

module.exports = api;