const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', decksCtrl.index);
router.post('/', decksCtrl.create);
router.get('/:id', decksCtrl.show);
router.delete('/:id', decksCtrl.delete);
router.put('/:id/addCards', decksCtrl.addCards);
router.put('/:id', decksCtrl.update);

module.exports = router;