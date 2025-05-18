const express = require('express');
const { getLunches, addLunch } = require('../controllers/lunchController');

const router = express.Router();

router.route('/').get(getLunches).post(addLunch);

module.exports = router;
