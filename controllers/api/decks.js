const Deck = require('../../models/deck');

module.exports = {
    index,
    create,
    update
};

async function index(req, res) {
    const decks = await Deck.find({});
    return res.json(decks)
}

async function create(req, res) {
    let deckData = req.body
    const newDecks = await Deck.create(deckData)
    return res.json(newDecks);
}

async function update(req, res) {
    const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(updatedDeck);
}

/*-- Helper Functions --*/
