#!/usr/bin/env node

const express = require('express'),
    app = express(),
    port = process.env.PORT || '3000',
    mongoose = require('mongoose'),
    Session = require('./api/models/sessionModel'),
    Feedback = require('./api/models/feedbackModel'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    api = require('./api/routes/api'),
    config = require('config');


mongoose.Promise = global.Promise;
//mongoose.connect();
mongoose.connect(config.DBHost);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', api);


app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('Feedback session service list RESTful API server started on: ' + port);
