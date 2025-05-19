const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name'],
		trim: true,
		maxlength: [50, 'Name cannot be more than 50 characters'],
	},
	review: {
		type: String,
		required: [true, 'Please provide a review'],
		trim: true,
		maxlength: [500, 'Review cannot be more than 500 characters'],
	},
	image: {
		type: String,
		required: [true, 'Please provide an image URL'],
		trim: true,
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: [true, 'Please provide a rating between 1-5'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Review', reviewSchema);
