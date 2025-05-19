const Review = require('../models/Review');

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = async (req, res) => {
	try {
		const reviews = await Review.find().sort({ createdAt: -1 });
		res.status(200).json({
			success: true,
			count: reviews.length,
			data: reviews,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc    Add new review
// @route   POST /api/reviews
// @access  Public
const addReview = async (req, res) => {
	try {
		const review = await Review.create(req.body);
		res.status(201).json({
			success: true,
			data: review,
		});
	} catch (err) {
		if (err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map((val) => val.message);
			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	}
};

// @desc    Delete review
// @route   DELETE /api/reviews/:id
// @access  Public
const deleteReview = async (req, res) => {
	try {
		const review = await Review.findById(req.params.id);

		if (!review) {
			return res.status(404).json({
				success: false,
				error: 'Review not found',
			});
		}

		await review.remove();

		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

module.exports = { getReviews, addReview, deleteReview };
