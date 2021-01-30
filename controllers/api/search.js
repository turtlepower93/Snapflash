const Deck = require('../../models/deck');

module.exports = {
    index,
};

async function index(req, res) {
    const decks = await Deck.find({user:{$ne: req.user}}).exec();
    console.log('helllloooo', decks);
    return res.json(decks);
}

