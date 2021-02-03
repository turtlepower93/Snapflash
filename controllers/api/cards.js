const Deck = require("../../models/deck");

module.exports = {
  create,
};

async function create(req, res) {
  Deck.findById(req.params.id, function (err, deck) {
    deck.cards.push(req.body);
  });
  return res.json(req.body);
}
