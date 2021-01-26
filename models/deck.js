const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    word: {type: String, required: true},
    definition: {type: String, required: true}
  }, {
    timestamps: true,
  });

const deckSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  cards: [cardSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Deck', deckSchema);