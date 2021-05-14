// query
"use strict";
var salon = require("../models/salon.model");

function getAllSalon(req, res) {
  salon.find({}, (err, allSalon) => {
    if (err) {
      res.status(500).send(err);
    } else {
      //No es encesario el 204, se puede enviar el array vacio
      if (allSalon.length == 0) {
        res.status(204).send(null);
      } else {
        res.status(200).send(allSalon);
      }
    }
  });
}

function createSalon(req, res) {
  var params = req.body;
  var newSalon = new salon({
    number: params.number,
    name: params.name,
    schedule: params.schedule,
    movie: params.movie,
    description: params.description,
  });
  newSalon.save((err, savedSalon) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(savedSalon);
    }
  });
}

function updateSalon(req, res) {
  var body = req.body;
  var salonNumber = req.params.salonNumber;
  var updatedSalon = new salon({
    $set: {
      schedule: body.schedule,
      movie: body.movie,
    },
  });
  updatedSalon.updateOne(
    { number: salonNumber },
    updatedSalon,
    (err, updateSalonRes) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(updateSalonRes);
      }
    }
  );
}

module.exports = {
  getAllSalon,
  createSalon,
  updateSalon,
};
