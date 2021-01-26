const Deck = require('../../models/deck');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const decks = await Deck.find({});
    res.json(decks)
}

async function create(req, res) {
    let deckData = req.body
    const newDecks = await Deck.create(deckData)
    return res.json(newDecks);
}

/*-- Helper Functions --*/
