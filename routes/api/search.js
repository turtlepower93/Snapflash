const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/search');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', searchCtrl.index);

module.exports = router;