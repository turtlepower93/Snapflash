const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', decksCtrl.index);
router.post('/', decksCtrl.create);
router.put('/:id', decksCtrl.update);

module.exports = router;