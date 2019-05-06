const express = require('express');
const router = express.Router({ mergeParams: true });

// GET home page
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

const sessionRouter = require('./sessions');
router.use('/sessions', sessionRouter);

const feedbackRouter = require('./feedbacks');
router.use('/feedbacks', feedbackRouter);


module.exports = router;