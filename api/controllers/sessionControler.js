'use strict';

const mongoose = require('mongoose'),
    Session = mongoose.model('Session');

// get all game sessions
exports.list_all_sessions = function (req, res) {
    Session.find({}, function (err, session) {
        if (err)
            res.send(err);
        res.json(session);
    });
};

// add a new game session
exports.create_a_session = function (req, res) {
    var new_session = new Session(req.body);
    new_session.save(function (err, session) {
        if (err)
            res.send(err);
        res.json(session);
    });
};

// get a specific game session
exports.read_a_session = function (req, res) {
    Session.findById(req.params.sessionId, function (err, session) {
        if (err)
            res.send(err);
        res.json(session);
    });
};

// modify a specific game session
exports.update_a_session = function (req, res) {
    Session.findOneAndUpdate({ _id: req.params.sessionId }, req.body, { new: true }, function (err, session) {
        if (err)
            res.send(err);
        res.json(session);
    });
};

// delete a specify game session
exports.delete_a_session = function (req, res) {
    Session.remove({
        _id: req.params.sessionId
    }, function (err, session) {
        if (err)
            res.send(err);
        res.json({ message: 'Session successfully deleted' });
    });
};