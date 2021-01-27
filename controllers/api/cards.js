const Deck = require('../../models/deck');

module.exports = {
    // index,
    create,
    // update,
    // show,
    // delete:deleteOne,
};

async function create(req, res) {
    Deck.findById(req.params.id, function(err, deck) {
        deck.cards.push(req.body)
    })
    return res.json(req.body)
}