// query
'use strict'
var movie = require('../models/movie.model');

function getAllMovies(req, res) {
    movie.find({}, (err, allMovies) => {
        if (err) {
            res.status(500).send(err);
        } else {//No es encesario el 204, se puede enviar el array vacio
            if (allMovies.length == 0) {
                res.status(204).send(null);
            } else {
                res.status(200).send(allMovies);
            }
        }
    });
}

module.exports = {
    getAllMovies
}