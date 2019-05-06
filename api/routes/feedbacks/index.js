'use strict';

const express = require('express')
const feedback = require('../../controllers/feedbackControler');
const router = express.Router({ mergeParams: true })

// feedback Routes
router.route('/')
    .get(feedback.list_all_feedbacks)
    .post(feedback.create_a_feedback);

router.route('/session/:sessionId')
    .get(feedback.list_feedbacks_session);

router.route('/rating/:rating')
    .get(feedback.list_feedbacks_by_rating);

router.route('/:sessionId/:rating')
    .get(feedback.list_feedbacks_by_session_by_rating);

router.route('/:feedbackId')
    .get(feedback.read_a_feedback)
    .put(feedback.update_a_feedback)
    .delete(feedback.delete_a_feedback);


module.exports = router;