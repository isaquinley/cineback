var express = require('express');
var salonController = require('../controllers/salonMovieController');

var api = express.Router();

api.get('/salons', salonController.getAllSalon);
api.post('/salon', salonController.createSalon)
api.put('/updatesalon/:salonNumber', salonController.updateSalon)

module.exports = api;