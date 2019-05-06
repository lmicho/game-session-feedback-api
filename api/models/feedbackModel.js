'use strict';

const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;


const FeedbackSchema = new Schema({
    rating: {
        type: Number,
        required: 'Enter rating for this session on a scale of 1 to 5'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String
    },
    sessionId: {
        type: ObjectId,
        required: 'Enter a session ID'
    },
    user: {
        type: Number,
        required: 'Enter a user Id '
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);