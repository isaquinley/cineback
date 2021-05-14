const mongoose = require('mongoose');
const app = require('./app')
const port = process.env.PORT || 3700;

mongoose.connect('mongodb://localhost:27017/cinema', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true },(err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Mongo connection success');
        app.listen(port, function () {
            console.log(`API rest running http://localhost: ${port}`)
        })
    }
});