'use strict';

const express = require('express')
const session = require('../../controllers/sessionControler');
const router = express.Router({ mergeParams: true })

// session Routes
router.route('/')
    .get(session.list_all_sessions)
    .post(session.create_a_session);

router.route('/:sessionId')
    .get(session.read_a_session)
    .put(session.update_a_session)
    .delete(session.delete_a_session);


module.exports = router;