'use strict';

const mongoose = require('mongoose'),
    Feedback = mongoose.model('Feedback');

// get all feedbacks
exports.list_all_feedbacks = function (req, res) {
    Feedback.find({}, function (err, feedback) {
        if (err)
            res.send(err);
        res.json(feedback);
    });
};

// get all feedbacks for a specific game session
exports.list_feedbacks_session = function (req, res) {
    Feedback.find({ sessionId: req.params.sessionId }, function (err, feedback) {
        if (err)
            res.send(err);
        res.json(feedback);
    });
};

// get all feedbacks for a specific rating
exports.list_feedbacks_by_rating = function (req, res) {
    Feedback.find({ rating: req.params.rating }, function (err, feedback) {
        if (err)
            res.send(err);
        res.json(feedback);
    });
};

// get all feedbacks for a specific game session and a specific rating
exports.list_feedbacks_by_session_by_rating = function (req, res) {
    Feedback.find({ sessionId: req.params.sessionId, rating: req.params.rating }, function (err, feedback) {
        if (err)
            res.send(err);
        res.json(feedback);
    });
};

// add a new feedback for a specific game session from a specific user
exports.create_a_feedback = function (req, res) {
    Feedback.find({ sessionId: req.body.sessionId, user: req.body.user }, function (err, feedback) {
        if (err)
            res.send(err);
        if (feedback.length > 0) {
            res.json('The user is not authorized to leave a feedback again');
        } else {
            let new_feedback = new Feedback(req.body);
            new_feedback.save(function (err, feedback) {
                if (err)
                    res.send(err);
                res.json(feedback);
            });
        }
    });
};

// get a specific feedback
exports.read_a_feedback = function (req, res) {
    Feedback.findById(req.params.feedbackId, function (err, feedback) {
        if (err)
            res.send(err);
        res.json(feedback);
    });
};

// modify a specific feedback
exports.update_a_feedback = function (req, res) {
    Feedback.findOneAndUpdate({ _id: req.params.feedbackId }, req.body, { new: true }, function (err, feedback) {
        if (err)
            res.send(err);
        res.json(feedback);
    });
};

// delete a specific feedback
exports.delete_a_feedback = function (req, res) {
    Feedback.remove({
        _id: req.params.feedbackId
    }, function (err, feedback) {
        if (err)
            res.send(err);
        res.json({ message: 'Feedback successfully deleted' });
    });
};