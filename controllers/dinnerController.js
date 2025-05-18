const Dinner = require('../models/Dinner');

// @desc    Get all dinner items
// @route   GET /api/dinner
// @access  Public
exports.getDinners = async (req, res, next) => {
	try {
		const dinners = await Dinner.find();
		res.status(200).json({
			success: true,
			count: dinners.length,
			data: dinners,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc    Add new dinner item
// @route   POST /api/dinner
// @access  Public
exports.addDinner = async (req, res, next) => {
	try {
		const dinner = await Dinner.create(req.body);
		res.status(201).json({
			success: true,
			data: dinner,
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
