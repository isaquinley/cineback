"use strict";
var user = require("../models/user.model");

function getUser(req, res) {
  console.log(req.params.email);
  const email = req.params.email;
  const password = req.params.password;
  user.find({ email: email, password: password }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      //No es encesario el 204, se puede enviar el array vacio
      if (user.length == 0) {
        res.status(401).send({ auth: false });
      } else {
        const response = { auth: true, isAdmin: user[0].isAdmin };
        console.log(response)
        res.status(200).send(response);
      }
    }
  });
}

module.exports = {
  getUser,
};
