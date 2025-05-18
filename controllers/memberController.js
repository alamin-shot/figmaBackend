const Member = require('../models/Member');

// @desc    Get all members
// @route   GET /api/members
// @access  Public
exports.getMembers = async (req, res, next) => {
	try {
		const members = await Member.find();
		res.status(200).json({
			success: true,
			count: members.length,
			data: members,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc    Add new member
// @route   POST /api/members
// @access  Public
exports.addMember = async (req, res, next) => {
	try {
		const member = await Member.create(req.body);
		res.status(201).json({
			success: true,
			data: member,
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
