const Deck = require('../../models/deck');

module.exports = {
    index,
    create,
    update,
    show,
    delete:deleteOne,
};

async function index(req, res) {
    const decks = await Deck.find({});
    return res.json(decks);
}

async function create(req, res) {
    let deckData = req.body
    const newDecks = await Deck.create(deckData);
    return res.json(newDecks);
}

async function show(req, res) {
    let deck = await Deck.findById(req.params.id);
    return res.json(deck);
}

async function update(req, res) {
    const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(updatedDeck);
}

async function deleteOne(req, res) {
    const removedDeck = await Deck.findByIdAndRemove(req.params.id);
    return res.json(removedDeck);
}

/*-- Helper Functions --*/
