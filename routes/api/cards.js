const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/decks/:id/cards', cardsCtrl.create);
// router.get('/', cardsCtrl.index);
// router.post('/', cardsCtrl.create);
// router.get('/:id', cardsCtrl.show);
// router.delete('/:id', cardsCtrl.delete);
// router.put('/:id', cardsCtrl.update);

module.exports = router;