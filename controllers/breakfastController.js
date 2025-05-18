const Breakfast = require('../models/Breakfast');

// @desc    Get all breakfast items
// @route   GET /api/breakfast
// @access  Public
exports.getBreakfasts = async (req, res, next) => {
	try {
		const breakfasts = await Breakfast.find();
		res.status(200).json({
			success: true,
			count: breakfasts.length,
			data: breakfasts,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc    Add new breakfast item
// @route   POST /api/breakfast
// @access  Public
exports.addBreakfast = async (req, res, next) => {
	try {
		const breakfast = await Breakfast.create(req.body);
		res.status(201).json({
			success: true,
			data: breakfast,
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
