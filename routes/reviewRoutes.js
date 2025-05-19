const express = require('express');
const {
	getReviews,
	addReview,
	deleteReview,
} = require('../controllers/reviewController');

const router = express.Router();

router.route('/').get(getReviews).post(addReview);

router.route('/:id').delete(deleteReview);

module.exports = router;
