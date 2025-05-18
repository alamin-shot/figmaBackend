const express = require('express');
const { getDinners, addDinner } = require('../controllers/dinnerController');

const router = express.Router();

router.route('/').get(getDinners).post(addDinner);

module.exports = router;
