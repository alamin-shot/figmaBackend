const express = require('express');
const {
	getBreakfasts,
	addBreakfast,
} = require('../controllers/breakfastController');

const router = express.Router();

router.route('/').get(getBreakfasts).post(addBreakfast);

module.exports = router;
