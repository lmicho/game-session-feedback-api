'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SessionSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the session'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Session', SessionSchema);