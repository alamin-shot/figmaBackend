import express from 'express';
import {
	getReviews,
	addReview,
	deleteReview,
} from '../controllers/reviewController.js';

const router = express.Router();

router.route('/').get(getReviews).post(addReview);

router.route('/:id').delete(deleteReview);

export default router;
