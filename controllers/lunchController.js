const Lunch = require('../models/Lunch');

// @desc    Get all lunch items
// @route   GET /api/lunch
// @access  Public
exports.getLunches = async (req, res, next) => {
	try {
		const lunches = await Lunch.find();
		res.status(200).json({
			success: true,
			count: lunches.length,
			data: lunches,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc    Add new lunch item
// @route   POST /api/lunch
// @access  Public
exports.addLunch = async (req, res, next) => {
	try {
		const lunch = await Lunch.create(req.body);
		res.status(201).json({
			success: true,
			data: lunch,
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
