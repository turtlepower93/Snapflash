const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/api/decks");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/decks/:id/cards", cardsCtrl.create);

module.exports = router;
