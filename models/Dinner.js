const mongoose = require('mongoose');

const dinnerSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add a title'],
		trim: true,
		maxlength: [100, 'Title cannot be more than 100 characters'],
	},
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

module.exports = mongoose.model('Dinner', dinnerSchema);
