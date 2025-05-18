const mongoose = require('mongoose');

const headerImageSchema = new mongoose.Schema({
	image: {
		type: String,
		required: [true, 'Please add an image URL'],
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('HeaderImage', headerImageSchema);
