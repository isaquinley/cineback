'use strict'

var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var movieRoutes = require('./routes/movieRoutes');
var userRoutes = require('./routes/userRoutes');
var salonRoutes = require('./routes/salonRoutes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//public folder files 
app.use(express.json())
app.use('/files', express.static('files'));
app.use('/api', movieRoutes);
app.use('/api', userRoutes);
app.use('/api', salonRoutes);

module.exports = app;