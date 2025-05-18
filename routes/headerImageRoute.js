const express = require('express');
const {
	getHeaderImages,
	addHeaderImage,
	deleteHeaderImage,
} = require('../controllers/headerImageController');

const router = express.Router();

router.route('/').get(getHeaderImages).post(addHeaderImage);

router.route('/:id').delete(deleteHeaderImage);

module.exports = router;
