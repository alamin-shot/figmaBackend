const HeaderImage = require('../models/HeaderImage');

// @desc    Get all header images
// @route   GET /api/header-images
// @access  Public
exports.getHeaderImages = async (req, res, next) => {
	try {
		const headerImages = await HeaderImage.find();
		res.status(200).json({
			success: true,
			count: headerImages.length,
			data: headerImages,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc    Add new header image
// @route   POST /api/header-images
// @access  Public
exports.addHeaderImage = async (req, res, next) => {
	try {
		const headerImage = await HeaderImage.create(req.body);
		res.status(201).json({
			success: true,
			data: headerImage,
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

// @desc    Delete a header image
// @route   DELETE /api/header-images/:id
// @access  Public
exports.deleteHeaderImage = async (req, res, next) => {
	try {
		const headerImage = await HeaderImage.findById(req.params.id);

		if (!headerImage) {
			return res.status(404).json({
				success: false,
				error: 'Header image not found',
			});
		}

		await headerImage.remove();

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
