const Deck = require("../../models/deck");

module.exports = {
  index,
};

async function index(req, res) {
  const decks = await Deck.find({
    user: { $ne: req.user },
    hidden: false,
  }).exec();
  return res.json(decks);
}
