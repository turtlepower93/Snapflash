const Deck = require('../../models/deck');

module.exports = {
    index
};

async function index(req,res) {
    const decks = await Deck.find({});
    res.json(decks)
}

/*-- Helper Functions --*/
