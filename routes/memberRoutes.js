const express = require('express');
const { getMembers, addMember } = require('../controllers/memberController');

const router = express.Router();

router.route('/').get(getMembers).post(addMember);

module.exports = router;
